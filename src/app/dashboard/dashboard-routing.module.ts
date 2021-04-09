import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "starship",
        loadChildren: () =>
          import("./starship/starship.module").then((m) => m.StarshipModule),
      },
      {
        path: "",
        redirectTo: "/dashboard/starship",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
