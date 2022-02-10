import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { BlueMarblePageRoutingModule } from "./blue-marble-routing.module";

import { BlueMarblePage } from "./blue-marble.page";
import { BlueMarbleListEntryModule } from "./blue-marble-list-entry/blue-marble-list-entry.module";
import { NgxIonicImageViewerModule } from "ngx-ionic-image-viewer";
import { ListEntryDummyModule } from "src/app/list-entry-dummy/list-entry-dummy.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlueMarblePageRoutingModule,
    NgxIonicImageViewerModule,
    BlueMarbleListEntryModule,
    ListEntryDummyModule,
  ],
  declarations: [BlueMarblePage],
})
export class BlueMarblePageModule {}
