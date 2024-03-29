import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutCardComponent } from "./about-card.component";
import { IonicModule } from "@ionic/angular";
import { NgxIonicImageViewerModule } from "ngx-ionic-image-viewer";

@NgModule({
  declarations: [AboutCardComponent],
  imports: [IonicModule, CommonModule, NgxIonicImageViewerModule],
  exports: [AboutCardComponent],
})
export class AboutCardModule {}
