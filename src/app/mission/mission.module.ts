import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MissionDetailCardComponent } from './mission-detail-card/mission-detail-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [MissionDetailCardComponent],
  exports: [MissionDetailCardComponent]
})
export class MissionModule { }
