import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgencyPage } from './agency.page';
import { AgencyOverviewPage } from './agency-overview.page';

const routes: Routes = [
  {
    path: '',
    component: AgencyOverviewPage
  },
  {
    path: ':id',
    component: AgencyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgencyRoutingModule { }
