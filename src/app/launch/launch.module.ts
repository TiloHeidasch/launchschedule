import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { LaunchRoutingModule } from "./launch-routing.module";

import { LaunchPage } from "./launch.page";
import { LaunchOverviewPage } from "./launch-overview.page";
import { LaunchDetailCardComponent } from "./launch-detail-card/launch-detail-card.component";
import { CountdownModule } from "../countdown/countdown.module";
import { LaunchListEntryModule } from "./launch-list-entry/launch-list-entry.module";
import { LaunchStatusModule } from "./launch-status/launch-status.module";
import { AgencyListEntryModule } from "../agency/agency-list-entry/agency-list-entry.module";
import { MissionListModule } from "../mission/mission-list-entry/mission-list-entry.module";
import { PadListEntryModule } from "../pad/pad-list-entry/pad-list-entry.module";
import { RocketListEntryModule } from "../rocket/rocket-list-entry/rocket-list-entry.module";
import { AstronautListEntryModule } from "../astronaut/astronaut-list-entry/astronaut-list-entry.module";
import { VideoModule } from "../video/video.module";
import { NotificationModule } from "../notification/notification.module";
import { NgxIonicImageViewerModule } from "ngx-ionic-image-viewer";
import { ListEntryDummyModule } from "../list-entry-dummy/list-entry-dummy.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaunchRoutingModule,
    MissionListModule,
    PadListEntryModule,
    CountdownModule,
    LaunchListEntryModule,
    LaunchStatusModule,
    AgencyListEntryModule,
    RocketListEntryModule,
    AstronautListEntryModule,
    VideoModule,
    NotificationModule,
    NgxIonicImageViewerModule,
    ListEntryDummyModule,
  ],
  declarations: [LaunchPage, LaunchOverviewPage, LaunchDetailCardComponent],
  exports: [LaunchDetailCardComponent],
})
export class LaunchModule {}
