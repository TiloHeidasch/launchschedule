import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RcketPage } from "./rcket.page";

const routes: Routes = [
  {
    path: "",
    component: RcketPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RcketPageRoutingModule {}
