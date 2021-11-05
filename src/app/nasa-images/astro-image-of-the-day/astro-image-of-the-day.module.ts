import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AstroImageOfTheDayRoutingModule } from "./astro-image-of-the-day-routing.module";

import { NgxIonicImageViewerModule } from "ngx-ionic-image-viewer";
import { AstroImageOfTheDayPage } from "./astro-image-of-the-day.page";
import { AstroImageOfTheDayListEntryModule } from "./astro-image-of-the-day-list-entry/astro-image-of-the-day-list-entry.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AstroImageOfTheDayRoutingModule,
    NgxIonicImageViewerModule,
    AstroImageOfTheDayListEntryModule,
  ],
  declarations: [AstroImageOfTheDayPage],
})
export class AstroImageOfTheDayModule {}
