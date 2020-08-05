import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RocketRoutingModule } from './rocket-routing.module';

import { RocketPage } from './rocket.page';
import { RocketDetailCardComponent } from './rocket-detail-card/rocket-detail-card.component';
import { CommonModule } from '@angular/common';
import { RocketOverviewPage } from './rocket-overview.page';
import { AnimationModule } from '../animation/animation.module';
import { RocketListEntryModule } from './rocket-list-entry/rocket-list-entry.module';
import { AgencyListEntryModule } from '../agency/agency-list-entry/agency-list-entry.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RocketRoutingModule,
    AnimationModule,
    RocketListEntryModule,
    AgencyListEntryModule
  ],
  declarations: [RocketOverviewPage, RocketPage, RocketDetailCardComponent],
  exports: [],
})
export class RocketModule { }
