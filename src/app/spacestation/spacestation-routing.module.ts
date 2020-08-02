import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpacestationPage } from './spacestation.page';
import { SpacestationOverviewPage } from './spacestation-overview.page';

const routes: Routes = [
  {
    path: '',
    component: SpacestationOverviewPage
  },
  {
    path: ':id',
    component: SpacestationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpacestationRoutingModule { }
