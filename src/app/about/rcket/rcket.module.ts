import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { RcketPageRoutingModule } from "./rcket-routing.module";

import { RcketPage } from "./rcket.page";
import { AboutCardModule } from "../about-card/about-card.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RcketPageRoutingModule,
    AboutCardModule,
  ],
  declarations: [RcketPage],
})
export class RcketPageModule {}
