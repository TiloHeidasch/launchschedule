import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AgencyListEntryComponent } from "./agency-list-entry.component";
import { AgencyRoutingModule } from "../agency-routing.module";
import { AnimationModule } from "src/app/animation/animation.module";
import { IonicModule } from "@ionic/angular";
import { NotificationModule } from "src/app/notification/notification.module";

@NgModule({
  declarations: [AgencyListEntryComponent],
  imports: [
    AgencyRoutingModule,
    AnimationModule,
    CommonModule,
    IonicModule,
    NotificationModule,
  ],
  exports: [AgencyListEntryComponent],
})
export class AgencyListEntryModule {}
