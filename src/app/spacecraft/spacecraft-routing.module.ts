import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpacecraftPage } from './spacecraft.page';
import { SpacecraftOverviewPage } from './spacecraft-overview.page';

const routes: Routes = [
  {
    path: '',
    component: SpacecraftOverviewPage
  },
  {
    path: ':id',
    component: SpacecraftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpacecraftRoutingModule { }
