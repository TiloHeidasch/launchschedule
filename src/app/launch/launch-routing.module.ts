import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LaunchPage } from "./launch.page";
import { LaunchOverviewPage } from "./launch-overview.page";

const routes: Routes = [
  {
    path: "",
    component: LaunchOverviewPage,
  },
  {
    path: ":id",
    component: LaunchPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaunchRoutingModule {}
