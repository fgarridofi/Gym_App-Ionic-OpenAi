import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpenaiService } from '../../openai.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
})
export class ResultadosPage implements OnInit {
  cards: any[] = []; 
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute, 
    private openaiService: OpenaiService,
    private alertController: AlertController,
    private router: Router 
  ) {}

  ngOnInit() {
    const selectedMuscles = history.state.selectedMuscles;
    const selectedExercise = history.state.selectedExercise;
    const objetivo = history.state.objetivo; 
  
    if (
      (selectedMuscles && selectedMuscles.length > 0) ||
      (selectedExercise && selectedExercise.length > 0)
    ) {
      let generateCodeObservable;
  
      if (selectedMuscles && selectedMuscles.length > 0) {
        generateCodeObservable = this.openaiService.generateCodeFromMuscles(
          selectedMuscles
        );
      } else {
        generateCodeObservable = this.openaiService.generateCodeFromCardio(
          selectedExercise,
          objetivo
        );
      }
  
      generateCodeObservable.subscribe((response) => {
          const messageContent = response.choices[0]?.message?.content;
          if (messageContent) {
            const lines = messageContent.split('\n');
            
            this.cards = lines
              .filter((line: string) => /^\s*\d+\./.test(line.trim()))
              .map((line: string, index: number) => ({ text: line, completed: false,showProgressBar: index === 0, }));
            
            console.log('Lista de ejercicios:', this.cards);
          } else {
            this.cards = [];
          }
      
          this.isLoading = false;
          
        },
        (error) => {
          console.error('Error al generar código:', error);
          this.isLoading = false;
        }
      );

    } else {
      console.error(
        'No se proporcionaron músculos seleccionados ni ejercicios cardiovasculares.'
      );
      this.isLoading = false;
    }

    

  }

  checkAllCompleted() {
    if (this.cards.every((card) => card.completed)) {
      this.showCongratulationsAlert();
    }
  }

  async showCongratulationsAlert() {
    const alert = await this.alertController.create({
      header: '¡Felicidades!',
      message: 'Entrenamiento completado',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigate(['/home']);
          },
        },
      ],
    });

    await alert.present();
  }

  handleCheckboxChange(index: number) {
    this.cards[index].showProgressBar = false;
  
    // Si hay una siguiente tarjeta, muestra la barra de progreso
    if (index < this.cards.length - 1) {
      this.cards[index + 1].showProgressBar = true;
    }
  
    this.checkAllCompleted();
  }
}


