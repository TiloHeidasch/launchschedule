import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SpacestationListEntryComponent } from "./spacestation-list-entry.component";
import { SpacestationRoutingModule } from "../spacestation-routing.module";
import { IonicModule } from "@ionic/angular";
import { NotificationModule } from "src/app/notification/notification.module";
import { SpacestationService } from "../spacestation.service";

@NgModule({
  declarations: [SpacestationListEntryComponent],
  imports: [
    SpacestationRoutingModule,
    CommonModule,
    IonicModule,
    NotificationModule,
  ],
  exports: [SpacestationListEntryComponent],
  providers: [SpacestationService],
})
export class SpacestationListEntryModule {}
