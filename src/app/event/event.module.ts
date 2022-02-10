import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { EventRoutingModule } from "./event-routing.module";

import { EventPage } from "./event.page";
import { EventOverviewPage } from "./event-overview.page";
import { EventDetailCardComponent } from "./event-detail-card/event-detail-card.component";
import { CountdownModule } from "../countdown/countdown.module";
import { EventListEntryModule } from "./event-list-entry/event-list-entry.module";
import { VideoModule } from "../video/video.module";
import { LaunchListEntryModule } from "../launch/launch-list-entry/launch-list-entry.module";
import { AstronautListEntryModule } from "../astronaut/astronaut-list-entry/astronaut-list-entry.module";
import { SpacestationListEntryModule } from "../spacestation/spacestation-list-entry/spacestation-list-entry.module";
import { NotificationModule } from "../notification/notification.module";
import { NgxIonicImageViewerModule } from "ngx-ionic-image-viewer";
import { ListEntryDummyModule } from "../list-entry-dummy/list-entry-dummy.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventRoutingModule,
    CountdownModule,
    EventListEntryModule,
    VideoModule,
    LaunchListEntryModule,
    AstronautListEntryModule,
    SpacestationListEntryModule,
    NotificationModule,
    NgxIonicImageViewerModule,
    ListEntryDummyModule,
  ],
  declarations: [EventPage, EventOverviewPage, EventDetailCardComponent],
  exports: [],
})
export class EventModule {}
