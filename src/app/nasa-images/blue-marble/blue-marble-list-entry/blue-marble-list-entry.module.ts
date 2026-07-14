import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BlueMarbleListEntryComponent } from "./blue-marble-list-entry.component";
import { IonicModule } from "@ionic/angular";
import { NgxIonicImageViewerComponent } from "@herdwatch/ngx-ionic-image-viewer";

@NgModule({
  declarations: [BlueMarbleListEntryComponent],
  imports: [CommonModule, IonicModule, NgxIonicImageViewerComponent],
  exports: [BlueMarbleListEntryComponent],
})
export class BlueMarbleListEntryModule {}
