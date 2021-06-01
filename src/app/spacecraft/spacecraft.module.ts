import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SpacecraftRoutingModule } from "./spacecraft-routing.module";

import { SpacecraftPage } from "./spacecraft.page";
import { SpacecraftOverviewPage } from "./spacecraft-overview.page";
import { SpacecraftDetailCardComponent } from "./spacecraft-detail-card/spacecraft-detail-card.component";
import { AnimationModule } from "../animation/animation.module";
import { AgencyListEntryModule } from "../agency/agency-list-entry/agency-list-entry.module";
import { SpacecraftListEntryModule } from "./spacecraft-list-entry/spacecraft-list-entry.module";
import { NotificationModule } from "../notification/notification.module";
import { NgxIonicImageViewerModule } from "ngx-ionic-image-viewer";
import { SpacecraftService } from "./spacecraft.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpacecraftRoutingModule,
    AnimationModule,
    AgencyListEntryModule,
    SpacecraftListEntryModule,
    NotificationModule,
    NgxIonicImageViewerModule,
  ],
  declarations: [
    SpacecraftPage,
    SpacecraftOverviewPage,
    SpacecraftDetailCardComponent,
  ],
  exports: [],
  providers: [SpacecraftService],
})
export class SpacecraftModule {}
