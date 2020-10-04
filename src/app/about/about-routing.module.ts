import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutPage } from "./about.page";

const routes: Routes = [
  {
    path: "",
    component: AboutPage,
    children: [
      {
        path: "app",
        loadChildren: () =>
          import("./app/app.module").then((m) => m.AppPageModule),
      },
      {
        path: "launchlibrary",
        loadChildren: () =>
          import("./launchlibrary/launchlibrary.module").then(
            (m) => m.LaunchlibraryPageModule
          ),
      },
      {
        path: "news",
        loadChildren: () =>
          import("./news/news.module").then((m) => m.NewsPageModule),
      },
      {
        path: "",
        redirectTo: "/about/app",
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
