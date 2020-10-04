import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppPage } from './app.page';

const routes: Routes = [
  {
    path: '',
    component: AppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppPageRoutingModule {}
