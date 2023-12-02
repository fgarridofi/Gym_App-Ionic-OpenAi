import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CardioPage } from '../cardio/cardio.page';
import { MusculacionPage } from '../musculacion/musculacion.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}

  navigateToMusculacion() {
    this.navCtrl.navigateForward('/musculacion');
  }

  navigateToCardio() {
    this.navCtrl.navigateForward('/cardio');
  }



}

