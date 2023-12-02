import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cardio',
  templateUrl: './cardio.page.html',
  styleUrls: ['./cardio.page.scss'],
})
export class CardioPage  {
  cardioExercise = [{ value: null }];
  objetivo: string = '';  

  constructor(
    private alertController: AlertController,
    private router: Router

  ) {}

  ionViewDidEnter() {
    this.cardioExercise = [{ value: null }];
  }
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Debes seleccionar al menos un ejercicio.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  startTraining() {
    const selectedExercise = this.cardioExercise.map(group => group.value);

    if (selectedExercise.some(exer => exer !== null)) {
   
      this.router.navigate(['/resultados'], { state: { selectedExercise, objetivo: this.objetivo } });
    } else {
      this.presentAlert();
    }
  }
}
