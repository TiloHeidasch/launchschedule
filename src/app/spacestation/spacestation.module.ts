import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SpacestationRoutingModule } from "./spacestation-routing.module";

import { SpacestationPage } from "./spacestation.page";
import { SpacestationOverviewPage } from "./spacestation-overview.page";
import { SpacestationDetailCardComponent } from "./spacestation-detail-card/spacestation-detail-card.component";
import { SpacestationListEntryModule } from "./spacestation-list-entry/spacestation-list-entry.module";
import { AgencyListEntryModule } from "../agency/agency-list-entry/agency-list-entry.module";
import { AstronautListEntryModule } from "../astronaut/astronaut-list-entry/astronaut-list-entry.module";
import { NotificationModule } from "../notification/notification.module";
import { NgxIonicImageViewerModule } from "ngx-ionic-image-viewer";
import { SpacestationService } from "./spacestation.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpacestationRoutingModule,
    SpacestationListEntryModule,
    AgencyListEntryModule,
    AstronautListEntryModule,
    NotificationModule,
    NgxIonicImageViewerModule,
  ],
  declarations: [
    SpacestationPage,
    SpacestationOverviewPage,
    SpacestationDetailCardComponent,
  ],
  exports: [],
  providers: [SpacestationService],
})
export class SpacestationModule {}
