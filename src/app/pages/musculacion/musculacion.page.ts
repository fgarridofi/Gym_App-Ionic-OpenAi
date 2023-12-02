import { Component, OnInit } from '@angular/core';
import { ToastController,AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-musculacion',
  templateUrl: './musculacion.page.html',
  styleUrls: ['./musculacion.page.scss'],
})
export class MusculacionPage  {

    muscleGroups = [{ value: '' }];

    addMuscleGroup() {
      if (this.muscleGroups.length < 3) {
        this.muscleGroups.push({ value: '' });
      } else {
        this.manyMusclesAlert();
      }
    }

    constructor(
      private alertController: AlertController,
      private router: Router
    ) {}

    ionViewDidEnter() {
      this.muscleGroups = [{ value: '' }];
    }

    async startTraining() {
      const selectedMuscles = this.muscleGroups
                                                .map(group => group.value)
                                                .filter(muscle => muscle !== null && muscle.trim() !== '');
  
      console.log('Muscles:', selectedMuscles);

      if (selectedMuscles.length > 0) {
        this.router.navigate(['/resultados'], { state: { selectedMuscles } });
      } else {
        this.insertMusclesAlert();
      }
    }
  

    async insertMusclesAlert() {
      const alert = await this.alertController.create({
        header: 'Alerta',
        message: 'Debes seleccionar al menos un grupo muscular.',
        buttons: ['OK'],
      });
  
      await alert.present();
    }


    async manyMusclesAlert() {
      const alert = await this.alertController.create({
        header: 'Alerta',
        message: 'Entrenar demasiados grupos musculares puede aumentar el riesgo de lesiones y afectar la efectividad del entrenamiento.',
        buttons: ['Entendido'],
      });
  
      await alert.present();
    }
}
