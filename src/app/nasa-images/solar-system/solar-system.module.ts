import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SolarSystemRoutingModule } from "./solar-system-routing.module";

import { NgxIonicImageViewerModule } from "ngx-ionic-image-viewer";
import { SolarSystemPage } from "./solar-system.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolarSystemRoutingModule,
    NgxIonicImageViewerModule,
  ],
  declarations: [SolarSystemPage],
})
export class SolarSystemModule {}
