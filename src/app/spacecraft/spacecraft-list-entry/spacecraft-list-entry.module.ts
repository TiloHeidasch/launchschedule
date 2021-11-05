import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SpacecraftListEntryComponent } from "./spacecraft-list-entry.component";
import { SpacecraftRoutingModule } from "../spacecraft-routing.module";
import { IonicModule } from "@ionic/angular";
import { NotificationModule } from "src/app/notification/notification.module";
import { SpacecraftService } from "../spacecraft.service";

@NgModule({
  declarations: [SpacecraftListEntryComponent],
  imports: [
    SpacecraftRoutingModule,
    CommonModule,
    IonicModule,
    NotificationModule,
  ],
  exports: [SpacecraftListEntryComponent],
  providers: [SpacecraftService],
})
export class SpacecraftListEntryModule {}
