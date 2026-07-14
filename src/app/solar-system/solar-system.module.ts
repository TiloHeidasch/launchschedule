import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SolarSystemRoutingModule } from "./solar-system-routing.module";

import { NgxIonicImageViewerComponent } from "@herdwatch/ngx-ionic-image-viewer";
import { SolarSystemPage } from "./solar-system.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolarSystemRoutingModule,
    NgxIonicImageViewerComponent,
  ],
  declarations: [SolarSystemPage],
})
export class SolarSystemModule {}
