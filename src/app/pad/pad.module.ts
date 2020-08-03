import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PadRoutingModule } from './pad-routing.module';

import { PadPage } from './pad.page';
import { PadOverviewPage } from './pad-overview.page';
import { PadListEntryComponent } from './pad-list-entry/pad-list-entry.component';
import { PadDetailCardComponent } from './pad-detail-card/pad-detail-card.component';
import { AnimationModule } from '../animation/animation.module';
import { MapModule } from '../map/map.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PadRoutingModule,
    AnimationModule,
    MapModule
  ],
  declarations: [PadPage, PadOverviewPage, PadListEntryComponent, PadDetailCardComponent],
  exports: [PadListEntryComponent]
})
export class PadModule { }
