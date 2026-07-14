import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutCardComponent } from "./about-card.component";
import { IonicModule } from "@ionic/angular";
import { NgxIonicImageViewerComponent } from "@herdwatch/ngx-ionic-image-viewer";

@NgModule({
  declarations: [AboutCardComponent],
  imports: [IonicModule, CommonModule, NgxIonicImageViewerComponent],
  exports: [AboutCardComponent],
})
export class AboutCardModule {}
