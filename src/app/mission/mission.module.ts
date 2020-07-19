import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MissionPageRoutingModule } from './mission-routing.module';

import { MissionPage } from './mission.page';
import { MissionOverviewPage } from './mission-overview.page';
import { MissionListEntryComponent } from './mission-list-entry/mission-list-entry.component';
import { MissionDetailCardComponent } from './mission-detail-card/mission-detail-card.component';
import { PayloadModule } from '../payload/payload.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MissionPageRoutingModule,
    PayloadModule
  ],
  declarations: [MissionPage, MissionOverviewPage, MissionListEntryComponent, MissionDetailCardComponent],
  exports: [MissionDetailCardComponent]
})
export class MissionModule { }
