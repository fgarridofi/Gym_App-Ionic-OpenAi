import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { MusculacionPage } from './pages/musculacion/musculacion.page';
import { CardioPage } from './pages/cardio/cardio.page';
import { ResultadosPage } from './pages/resultados/resultados.page';

const routes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'musculacion', component: MusculacionPage },
  { path: 'cardio', component: CardioPage },
  { path: 'resultados', component: ResultadosPage },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
