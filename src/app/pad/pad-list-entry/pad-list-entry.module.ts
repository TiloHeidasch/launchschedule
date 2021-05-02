import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PadListEntryComponent } from "./pad-list-entry.component";
import { PadRoutingModule } from "../pad-routing.module";
import { AnimationModule } from "src/app/animation/animation.module";
import { IonicModule } from "@ionic/angular";
import { NotificationModule } from "src/app/notification/notification.module";
import { PadService } from "../pad.service";

@NgModule({
  declarations: [PadListEntryComponent],
  imports: [
    PadRoutingModule,
    AnimationModule,
    CommonModule,
    IonicModule,
    NotificationModule,
  ],
  exports: [PadListEntryComponent],
  providers: [PadService],
})
export class PadListEntryModule {}
