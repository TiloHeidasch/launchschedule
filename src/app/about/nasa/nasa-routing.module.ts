import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NasaPage } from "./nasa.page";

const routes: Routes = [
  {
    path: "",
    component: NasaPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NasaPageRoutingModule {}
