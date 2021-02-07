import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AstroImageOfTheDayPage } from "./astro-image-of-the-day.page";

const routes: Routes = [
  {
    path: "",
    component: AstroImageOfTheDayPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AstroImageOfTheDayRoutingModule {}
