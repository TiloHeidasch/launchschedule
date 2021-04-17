import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PreviousPage } from "./previous.page";

const routes: Routes = [
  {
    path: "",
    component: PreviousPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreviousPageRoutingModule {}
