import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EventListEntryComponent } from "./event-list-entry.component";
import { EventRoutingModule } from "../event-routing.module";
import { CountdownModule } from "src/app/countdown/countdown.module";
import { AnimationModule } from "src/app/animation/animation.module";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [EventListEntryComponent],
  imports: [
    EventRoutingModule,
    CommonModule,
    AnimationModule,
    CountdownModule,
    IonicModule,
  ],
  exports: [EventListEntryComponent],
})
export class EventListEntryModule {}
