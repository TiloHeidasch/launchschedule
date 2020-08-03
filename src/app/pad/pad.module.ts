import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PadRoutingModule } from './pad-routing.module';

import { PadPage } from './pad.page';
import { PadOverviewPage } from './pad-overview.page';
import { PadDetailCardComponent } from './pad-detail-card/pad-detail-card.component';
import { AnimationModule } from '../animation/animation.module';
import { MapModule } from '../map/map.module';
import { PadListEntryModule } from './pad-list-entry/pad-list-entry.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PadRoutingModule,
    AnimationModule,
    MapModule,
    PadListEntryModule
  ],
  declarations: [PadPage, PadOverviewPage, PadDetailCardComponent],
  exports: []
})
export class PadModule { }
