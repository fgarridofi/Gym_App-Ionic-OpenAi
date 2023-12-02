import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardioPageRoutingModule } from './cardio-routing.module';

import { CardioPage } from './cardio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardioPageRoutingModule
  ],
  declarations: [CardioPage]
})
export class CardioPageModule {}
