import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AstronautPage } from './astronaut.page';
import { AstronautOverviewPage } from './astronaut-overview.page';

const routes: Routes = [
  {
    path: '',
    component: AstronautOverviewPage
  },
  {
    path: ':id',
    component: AstronautPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AstronautRoutingModule { }
