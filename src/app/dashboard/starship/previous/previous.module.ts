import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { PreviousPageRoutingModule } from "./previous-routing.module";

import { PreviousPage } from "./previous.page";
import { LaunchListEntryModule } from "src/app/launch/launch-list-entry/launch-list-entry.module";
import { EventListEntryModule } from "src/app/event/event-list-entry/event-list-entry.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreviousPageRoutingModule,
    LaunchListEntryModule,
    EventListEntryModule,
  ],
  declarations: [PreviousPage],
})
export class PreviousPageModule {}
