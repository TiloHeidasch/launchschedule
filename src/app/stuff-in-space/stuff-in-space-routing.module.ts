import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { StuffInSpacePage } from "./stuff-in-space.page";

const routes: Routes = [
  {
    path: "",
    component: StuffInSpacePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StuffInSpaceRoutingModule {}
