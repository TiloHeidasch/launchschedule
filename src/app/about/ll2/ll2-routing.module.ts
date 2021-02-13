import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { Ll2Page } from "./ll2.page";

const routes: Routes = [
  {
    path: "",
    component: Ll2Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ll2PageRoutingModule {}
