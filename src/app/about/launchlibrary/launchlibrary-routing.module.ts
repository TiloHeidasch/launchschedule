import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaunchlibraryPage } from './launchlibrary.page';

const routes: Routes = [
  {
    path: '',
    component: LaunchlibraryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaunchlibraryPageRoutingModule {}
