import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PadPage } from "./pad.page";
import { PadOverviewPage } from "./pad-overview.page";

const routes: Routes = [
  {
    path: "",
    component: PadOverviewPage,
  },
  {
    path: ":id",
    component: PadPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PadRoutingModule {}
