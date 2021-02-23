import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NasaImagesPage } from "./nasa-images.page";

const routes: Routes = [
  {
    path: "",
    component: NasaImagesPage,
    children: [
      {
        path: "astro",
        loadChildren: () =>
          import("./astro-image-of-the-day/astro-image-of-the-day.module").then(
            (m) => m.AstroImageOfTheDayModule
          ),
      },
      {
        path: "marble",
        loadChildren: () =>
          import("./blue-marble/blue-marble.module").then(
            (m) => m.BlueMarblePageModule
          ),
      },
      {
        path: "curiosity",
        loadChildren: () =>
          import("./rover/curiosity/curiosity.module").then(
            (m) => m.CuriosityPageModule
          ),
      },
      {
        path: "perseverance",
        loadChildren: () =>
          import("./rover/perseverance/perseverance.module").then(
            (m) => m.PerseverancePageModule
          ),
      },
      {
        path: "",
        redirectTo: "/nasa/astro",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NasaImagesRoutingModule {}
