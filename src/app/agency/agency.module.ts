import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AgencyRoutingModule } from "./agency-routing.module";

import { AgencyPage } from "./agency.page";
import { AgencyOverviewPage } from "./agency-overview.page";
import { AgencyDetailCardComponent } from "./agency-detail-card/agency-detail-card.component";
import { AnimationModule } from "../animation/animation.module";
import { AgencyListEntryModule } from "./agency-list-entry/agency-list-entry.module";
import { RocketListEntryModule } from "../rocket/rocket-list-entry/rocket-list-entry.module";
import { SpacecraftListEntryModule } from "../spacecraft/spacecraft-list-entry/spacecraft-list-entry.module";
import { NotificationModule } from "../notification/notification.module";
import { NgxIonicImageViewerModule } from "ngx-ionic-image-viewer";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgencyRoutingModule,
    AnimationModule,
    AgencyListEntryModule,
    RocketListEntryModule,
    SpacecraftListEntryModule,
    NotificationModule,
    NgxIonicImageViewerModule,
  ],
  declarations: [AgencyPage, AgencyOverviewPage, AgencyDetailCardComponent],
  exports: [],
})
export class AgencyModule {}
