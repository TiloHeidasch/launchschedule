import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { StuffInSpacePageRoutingModule } from "./stuff-in-space-routing.module";

import { StuffInSpacePage } from "./stuff-in-space.page";
import { AboutCardModule } from "../about-card/about-card.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StuffInSpacePageRoutingModule,
    AboutCardModule,
  ],
  declarations: [StuffInSpacePage],
})
export class StuffInSpacePageModule {}
