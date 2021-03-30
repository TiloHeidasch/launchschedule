import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { NasaPageRoutingModule } from "./nasa-routing.module";

import { NasaPage } from "./nasa.page";
import { AboutCardModule } from "../about-card/about-card.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NasaPageRoutingModule,
    AboutCardModule,
  ],
  declarations: [NasaPage],
})
export class NasaPageModule {}
