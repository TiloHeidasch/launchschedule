import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationPage } from './location.page';
import { LocationOverviewPage } from './location-overview.page';

const routes: Routes = [
  {
    path: '',
    component: LocationOverviewPage
  },
  {
    path: ':id',
    component: LocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationRoutingModule { }
