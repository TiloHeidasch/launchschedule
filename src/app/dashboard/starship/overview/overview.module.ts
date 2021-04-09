import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { OverviewPageRoutingModule } from "./overview-routing.module";

import { OverviewPage } from "./overview.page";
import { LaunchListEntryModule } from "src/app/launch/launch-list-entry/launch-list-entry.module";
import { EventListEntryModule } from "src/app/event/event-list-entry/event-list-entry.module";
import { StarshipUpdateModule } from "./starship-update/starship-update.module";
import { RoadClosuresModule } from "./road-closures/road-closures.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverviewPageRoutingModule,
    LaunchListEntryModule,
    EventListEntryModule,
    StarshipUpdateModule,
    RoadClosuresModule,
  ],
  declarations: [OverviewPage],
})
export class OverviewPageModule {}
