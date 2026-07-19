import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LocationListEntryComponent } from "./location-list-entry.component";
import { LocationRoutingModule } from "../location-routing.module";
import { IonicModule } from "@ionic/angular";
import { LocationService } from "../location.service";

@NgModule({
  declarations: [LocationListEntryComponent],
  imports: [
    LocationRoutingModule,
    CommonModule,
    IonicModule,
  ],
  exports: [LocationListEntryComponent],
  providers: [LocationService],
})
export class LocationListEntryModule {}
