import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusculacionPageRoutingModule } from './musculacion-routing.module';

import { MusculacionPage } from './musculacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusculacionPageRoutingModule
  ],
  declarations: [MusculacionPage]
})
export class MusculacionPageModule {}
