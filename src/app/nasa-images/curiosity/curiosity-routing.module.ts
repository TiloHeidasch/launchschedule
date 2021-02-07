import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuriosityPage } from './curiosity.page';

const routes: Routes = [
  {
    path: '',
    component: CuriosityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuriosityPageRoutingModule {}
