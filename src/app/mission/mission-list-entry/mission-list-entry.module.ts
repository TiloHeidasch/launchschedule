import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionListEntryComponent } from './mission-list-entry.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [MissionListEntryComponent],
  exports: [MissionListEntryComponent]
})
export class MissionListModule { }
