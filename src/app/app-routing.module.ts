import { NgModule } from "@angular/core";
import { RouterModule, Routes, NoPreloading } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "launch",
    pathMatch: "full",
  },
  {
    path: "launch",
    loadChildren: () =>
      import("./launch/launch.module").then((m) => m.LaunchModule),
  },
  {
    path: "news",
    loadChildren: () => import("./news/news.module").then((m) => m.NewsModule),
  },
  {
    path: "rocket",
    loadChildren: () =>
      import("./rocket/rocket.module").then((m) => m.RocketModule),
  },
  {
    path: "agency",
    loadChildren: () =>
      import("./agency/agency.module").then((m) => m.AgencyModule),
  },
  {
    path: "pad",
    loadChildren: () => import("./pad/pad.module").then((m) => m.PadModule),
  },
  {
    path: "statistic",
    loadChildren: () =>
      import("./statistic/statistic.module").then((m) => m.StatisticPageModule),
  },
  {
    path: "location",
    loadChildren: () =>
      import("./location/location.module").then((m) => m.LocationModule),
  },
  {
    path: "astronaut",
    loadChildren: () =>
      import("./astronaut/astronaut.module").then((m) => m.AstronautModule),
  },
  {
    path: "spacecraft",
    loadChildren: () =>
      import("./spacecraft/spacecraft.module").then((m) => m.SpacecraftModule),
  },
  {
    path: "spacestation",
    loadChildren: () =>
      import("./spacestation/spacestation.module").then(
        (m) => m.SpacestationModule
      ),
  },
  {
    path: "event",
    loadChildren: () =>
      import("./event/event.module").then((m) => m.EventModule),
  },
  {
    path: "**",
    redirectTo: "launch",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: NoPreloading,
    relativeLinkResolution: 'legacy'
}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
