import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { NasaImagesRoutingModule } from "./nasa-images-routing.module";

import { NasaImagesPage } from "./nasa-images.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, NasaImagesRoutingModule],
  declarations: [NasaImagesPage],
})
export class NasaImagesModule {}
