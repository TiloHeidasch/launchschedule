import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MissionListEntryComponent } from './mission-list-entry/mission-list-entry.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [MissionListEntryComponent],
  exports: [MissionListEntryComponent]
})
export class MissionModule { }
