import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LocationListEntryComponent } from "./location-list-entry.component";
import { LocationRoutingModule } from "../location-routing.module";
import { AnimationModule } from "src/app/animation/animation.module";
import { IonicModule } from "@ionic/angular";
import { NotificationModule } from "src/app/notification/notification.module";

@NgModule({
  declarations: [LocationListEntryComponent],
  imports: [
    LocationRoutingModule,
    AnimationModule,
    CommonModule,
    IonicModule,
    NotificationModule,
  ],
  exports: [LocationListEntryComponent],
})
export class LocationListEntryModule {}
