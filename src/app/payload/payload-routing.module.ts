import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayloadPage } from './payload.page';
import { PayloadOverviewPage } from './payload-overview.page';

const routes: Routes = [
  {
    path: '',
    component: PayloadOverviewPage
  },
  {
    path: ':id',
    component: PayloadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayloadPageRoutingModule { }
