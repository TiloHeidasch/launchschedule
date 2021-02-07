import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CuriosityListEntryComponent } from "./curiosity-list-entry.component";
import { AnimationModule } from "src/app/animation/animation.module";
import { IonicModule } from "@ionic/angular";
import { NgxIonicImageViewerModule } from "ngx-ionic-image-viewer";

@NgModule({
  declarations: [CuriosityListEntryComponent],
  imports: [
    AnimationModule,
    CommonModule,
    IonicModule,
    NgxIonicImageViewerModule,
  ],
  exports: [CuriosityListEntryComponent],
})
export class CuriosityListEntryModule {}
