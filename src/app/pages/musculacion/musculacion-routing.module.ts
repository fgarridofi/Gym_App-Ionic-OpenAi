import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusculacionPage } from './musculacion.page';

const routes: Routes = [
  {
    path: '',
    component: MusculacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusculacionPageRoutingModule {}
