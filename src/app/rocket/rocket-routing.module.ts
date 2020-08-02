import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RocketPage } from './rocket.page';
import { RocketOverviewPage } from './rocket-overview.page';

const routes: Routes = [
  {
    path: '',
    component: RocketOverviewPage
  },
  {
    path: ':id',
    component: RocketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RocketRoutingModule { }
