import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SolarSystemPage } from "./solar-system.page";

const routes: Routes = [
  {
    path: "",
    component: SolarSystemPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolarSystemRoutingModule {}
