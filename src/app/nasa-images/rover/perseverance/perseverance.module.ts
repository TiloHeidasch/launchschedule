import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { PerseverancePageRoutingModule } from "./perseverance-routing.module";

import { PerseverancePage } from "./perseverance.page";
import { RoverListEntryModule } from "../rover-list-entry/rover-list-entry.module";
import { ListEntryDummyModule } from "src/app/list-entry-dummy/list-entry-dummy.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerseverancePageRoutingModule,
    RoverListEntryModule,
    ListEntryDummyModule,
  ],
  declarations: [PerseverancePage],
})
export class PerseverancePageModule {}
