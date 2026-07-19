import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SpacestationListEntryComponent } from "./spacestation-list-entry.component";
import { SpacestationRoutingModule } from "../spacestation-routing.module";
import { IonicModule } from "@ionic/angular";
import { SpacestationService } from "../spacestation.service";

@NgModule({
  declarations: [SpacestationListEntryComponent],
  imports: [
    SpacestationRoutingModule,
    CommonModule,
    IonicModule,
  ],
  exports: [SpacestationListEntryComponent],
  providers: [SpacestationService],
})
export class SpacestationListEntryModule {}
