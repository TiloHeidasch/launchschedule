import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { PadRoutingModule } from "./pad-routing.module";

import { PadPage } from "./pad.page";
import { PadOverviewPage } from "./pad-overview.page";
import { PadDetailCardComponent } from "./pad-detail-card/pad-detail-card.component";
import { MapModule } from "../map/map.module";
import { PadListEntryModule } from "./pad-list-entry/pad-list-entry.module";
import { NotificationModule } from "../notification/notification.module";
import { NgxIonicImageViewerModule } from "ngx-ionic-image-viewer";
import { PadService } from "./pad.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PadRoutingModule,
    MapModule,
    PadListEntryModule,
    NotificationModule,
    NgxIonicImageViewerModule,
  ],
  declarations: [PadPage, PadOverviewPage, PadDetailCardComponent],
  exports: [],
  providers: [PadService],
})
export class PadModule {}
