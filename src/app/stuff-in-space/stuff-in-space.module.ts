import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { StuffInSpaceRoutingModule } from "./stuff-in-space-routing.module";

import { NgxIonicImageViewerModule } from "ngx-ionic-image-viewer";
import { StuffInSpacePage } from "./stuff-in-space.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, StuffInSpaceRoutingModule],
  declarations: [StuffInSpacePage],
})
export class StuffInSpaceModule {}
