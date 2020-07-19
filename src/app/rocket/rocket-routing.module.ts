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
  },
  {
    path: 'big-image-modal',
    loadChildren: () => import('./rocket-detail-card/big-image-modal/big-image-modal.module').then(m => m.BigImageModalModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RocketRoutingModule { }
