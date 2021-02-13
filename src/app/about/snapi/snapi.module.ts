import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SnapiPageRoutingModule } from "./snapi-routing.module";

import { SnapiPage } from "./snapi.page";
import { AboutCardModule } from "../about-card/about-card.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SnapiPageRoutingModule,
    AboutCardModule,
  ],
  declarations: [SnapiPage],
})
export class SnapiPageModule {}
