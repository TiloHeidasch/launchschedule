import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MissionListEntryComponent } from "./mission-list-entry.component";
import { AnimationModule } from "src/app/animation/animation.module";
import { IonicModule } from "@ionic/angular";

@NgModule({
  imports: [CommonModule, AnimationModule, IonicModule],
  declarations: [MissionListEntryComponent],
  exports: [MissionListEntryComponent],
})
export class MissionListModule {}
