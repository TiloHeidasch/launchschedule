import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { EventPage } from "./event.page";
import { EventOverviewPage } from "./event-overview.page";

const routes: Routes = [
  {
    path: "",
    component: EventOverviewPage,
  },
  {
    path: ":id",
    component: EventPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventRoutingModule {}
