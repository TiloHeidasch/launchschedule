import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BlueMarbleListEntryComponent } from "./blue-marble-list-entry.component";
import { AnimationModule } from "src/app/animation/animation.module";
import { IonicModule } from "@ionic/angular";
import { NgxIonicImageViewerModule } from "ngx-ionic-image-viewer";

@NgModule({
  declarations: [BlueMarbleListEntryComponent],
  imports: [
    AnimationModule,
    CommonModule,
    IonicModule,
    NgxIonicImageViewerModule,
  ],
  exports: [BlueMarbleListEntryComponent],
})
export class BlueMarbleListEntryModule {}
