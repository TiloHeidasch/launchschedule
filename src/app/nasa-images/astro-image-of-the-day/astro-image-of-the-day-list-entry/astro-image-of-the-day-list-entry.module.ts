import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AnimationModule } from "src/app/animation/animation.module";
import { IonicModule } from "@ionic/angular";
import { NgxIonicImageViewerModule } from "ngx-ionic-image-viewer";
import { AstroImageOfTheDayListEntryComponent } from "./astro-image-of-the-day-list-entry.component";

@NgModule({
  declarations: [AstroImageOfTheDayListEntryComponent],
  imports: [
    AnimationModule,
    CommonModule,
    IonicModule,
    NgxIonicImageViewerModule,
  ],
  exports: [AstroImageOfTheDayListEntryComponent],
})
export class AstroImageOfTheDayListEntryModule {}
