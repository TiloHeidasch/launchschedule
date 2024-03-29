import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LocationListEntryComponent } from "./location-list-entry.component";
import { LocationRoutingModule } from "../location-routing.module";
import { IonicModule } from "@ionic/angular";
import { NotificationModule } from "src/app/notification/notification.module";
import { LocationService } from "../location.service";

@NgModule({
  declarations: [LocationListEntryComponent],
  imports: [
    LocationRoutingModule,
    CommonModule,
    IonicModule,
    NotificationModule,
  ],
  exports: [LocationListEntryComponent],
  providers: [LocationService],
})
export class LocationListEntryModule {}
