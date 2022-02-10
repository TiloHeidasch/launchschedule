import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { CuriosityPageRoutingModule } from "./curiosity-routing.module";

import { CuriosityPage } from "./curiosity.page";
import { RoverListEntryModule } from "../rover-list-entry/rover-list-entry.module";
import { ListEntryDummyModule } from "src/app/list-entry-dummy/list-entry-dummy.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuriosityPageRoutingModule,
    RoverListEntryModule,
    ListEntryDummyModule,
  ],
  declarations: [CuriosityPage],
})
export class CuriosityPageModule {}
