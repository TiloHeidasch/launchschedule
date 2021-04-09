import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { StarshipPage } from "./starship.page";

const routes: Routes = [
  {
    path: "",
    component: StarshipPage,
    children: [
      {
        path: "overview",
        loadChildren: () =>
          import("./overview/overview.module").then(
            (m) => m.OverviewPageModule
          ),
      },
      {
        path: "previous",
        loadChildren: () =>
          import("./previous/previous.module").then(
            (m) => m.PreviousPageModule
          ),
      },
      // {
      //   path: "blog",
      //   loadChildren: () =>
      //     import("./blog/blog.module").then((m) => m.BlogPageModule),
      // },
      // {
      //   path: "report",
      //   loadChildren: () =>
      //     import("./report/report.module").then((m) => m.ReportPageModule),
      // },
      {
        path: "",
        redirectTo: "/dashboard/starship/overview",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarshipRoutingModule {}
