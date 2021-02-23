import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PerseverancePage } from "./perseverance.page";

const routes: Routes = [
  {
    path: "",
    component: PerseverancePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerseverancePageRoutingModule {}
