import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MissionListEntryComponent } from "./mission-list-entry.component";
import { IonicModule } from "@ionic/angular";

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [MissionListEntryComponent],
  exports: [MissionListEntryComponent],
})
export class MissionListModule {}
