import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RoverListEntryComponent } from "./rover-list-entry.component";
import { IonicModule } from "@ionic/angular";
import { NgxIonicImageViewerModule } from "ngx-ionic-image-viewer";

@NgModule({
  declarations: [RoverListEntryComponent],
  imports: [CommonModule, IonicModule, NgxIonicImageViewerModule],
  exports: [RoverListEntryComponent],
})
export class RoverListEntryModule {}
