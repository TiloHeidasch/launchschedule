import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { LocationRoutingModule } from "./location-routing.module";
import { LocationPage } from "./location.page";
import { LocationOverviewPage } from "./location-overview.page";
import { LocationDetailCardComponent } from "./location-detail-card/location-detail-card.component";
import { LocationListEntryModule } from "./location-list-entry/location-list-entry.module";
import { PadListEntryModule } from "../pad/pad-list-entry/pad-list-entry.module";
import { NotificationModule } from "../notification/notification.module";
import { NgxIonicImageViewerModule } from "ngx-ionic-image-viewer";
import { LocationService } from "./location.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationRoutingModule,
    LocationListEntryModule,
    PadListEntryModule,
    NotificationModule,
    NgxIonicImageViewerModule,
  ],
  declarations: [
    LocationPage,
    LocationOverviewPage,
    LocationDetailCardComponent,
  ],
  exports: [],
  providers: [LocationService],
})
export class LocationModule {}
