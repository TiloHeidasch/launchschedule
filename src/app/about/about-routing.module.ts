import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutPage } from "./about.page";

const routes: Routes = [
  {
    path: "",
    component: AboutPage,
    children: [
      {
        path: "rcket",
        loadChildren: () =>
          import("./rcket/rcket.module").then((m) => m.RcketPageModule),
      },
      {
        path: "ll2",
        loadChildren: () =>
          import("./ll2/ll2.module").then(
            (m) => m.Ll2PageModule
          ),
      },
      {
        path: "snapi",
        loadChildren: () =>
          import("./snapi/snapi.module").then((m) => m.SnapiPageModule),
      },
      {
        path: "nasa",
        loadChildren: () =>
          import("./nasa/nasa.module").then((m) => m.NasaPageModule),
      },
      {
        path: "",
        redirectTo: "/about/rcket",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutPageRoutingModule {}
