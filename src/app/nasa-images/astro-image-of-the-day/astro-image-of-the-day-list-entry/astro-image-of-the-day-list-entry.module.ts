import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AnimationModule } from "src/app/animation/animation.module";
import { IonicModule } from "@ionic/angular";
import { NgxIonicImageViewerModule } from "ngx-ionic-image-viewer";
import { AstroImageOfTheDayListEntryComponent } from "./astro-image-of-the-day-list-entry.component";
import { YouTubePlayerModule } from "@angular/youtube-player";

@NgModule({
  declarations: [AstroImageOfTheDayListEntryComponent],
  imports: [
    AnimationModule,
    CommonModule,
    IonicModule,
    NgxIonicImageViewerModule,
    YouTubePlayerModule,
  ],
  exports: [AstroImageOfTheDayListEntryComponent],
})
export class AstroImageOfTheDayListEntryModule {}
