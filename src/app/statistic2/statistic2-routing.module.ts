import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Statistic2Page } from './statistic2.page';

const routes: Routes = [
  {
    path: '',
    component: Statistic2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Statistic2PageRoutingModule {}
