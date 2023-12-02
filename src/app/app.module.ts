import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CardioPageModule } from './pages/cardio/cardio.module'; 
import { MusculacionPageModule } from './pages/musculacion/musculacion.module'; 
import { ResultadosPageModule } from './pages/resultados/resultados.module'; 
import { HomePageModule } from './pages/home/home.module'; 


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,CardioPageModule, MusculacionPageModule, ResultadosPageModule, HomePageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
