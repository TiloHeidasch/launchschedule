import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlueMarblePage } from './blue-marble.page';

const routes: Routes = [
  {
    path: '',
    component: BlueMarblePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlueMarblePageRoutingModule {}
