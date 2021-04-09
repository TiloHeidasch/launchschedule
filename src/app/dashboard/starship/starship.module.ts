import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { StarshipRoutingModule } from "./starship-routing.module";

import { StarshipPage } from "./starship.page";
import { YouTubePlayerModule } from "@angular/youtube-player";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarshipRoutingModule,
    YouTubePlayerModule,
  ],
  declarations: [StarshipPage],
  exports: [],
})
export class StarshipModule {}
