import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { NgxIonicImageViewerComponent } from "@herdwatch/ngx-ionic-image-viewer";
import { AstroImageOfTheDayListEntryComponent } from "./astro-image-of-the-day-list-entry.component";
import { YouTubePlayerModule } from "@angular/youtube-player";

@NgModule({
  declarations: [AstroImageOfTheDayListEntryComponent],
  imports: [
    CommonModule,
    IonicModule,
    NgxIonicImageViewerComponent,
    YouTubePlayerModule,
  ],
  exports: [AstroImageOfTheDayListEntryComponent],
})
export class AstroImageOfTheDayListEntryModule {}
