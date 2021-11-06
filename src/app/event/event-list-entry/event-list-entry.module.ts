import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EventListEntryComponent } from "./event-list-entry.component";
import { EventRoutingModule } from "../event-routing.module";
import { CountdownModule } from "src/app/countdown/countdown.module";
import { IonicModule } from "@ionic/angular";
import { NotificationModule } from "src/app/notification/notification.module";

@NgModule({
  declarations: [EventListEntryComponent],
  imports: [
    EventRoutingModule,
    CommonModule,
    CountdownModule,
    IonicModule,
    NotificationModule,
  ],
  exports: [EventListEntryComponent],
})
export class EventListEntryModule {}
