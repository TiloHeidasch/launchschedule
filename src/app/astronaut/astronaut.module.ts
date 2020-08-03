import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AstronautRoutingModule } from './astronaut-routing.module';

import { AstronautPage } from './astronaut.page';
import { AstronautOverviewPage } from './astronaut-overview.page';
import { AstronautDetailCardComponent } from './astronaut-detail-card/astronaut-detail-card.component';
import { AnimationModule } from '../animation/animation.module';
import { AgencyModule } from '../agency/agency.module';
import { LaunchModule } from '../launch/launch.module';
import { AstronautListEntryModule } from './astronaut-list-entry/astronaut-list-entry.module';
import { AstronautStatusModule } from './astronaut-status/astronaut-status.module';
import { LaunchListEntryModule } from '../launch/launch-list-entry/launch-list-entry.module';
import { AgencyListEntryModule } from '../agency/agency-list-entry/agency-list-entry.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AstronautRoutingModule,
    AnimationModule,
    AgencyModule,
    LaunchModule,
    AstronautListEntryModule,
    AstronautStatusModule,
    LaunchListEntryModule,
    AgencyListEntryModule
  ],
  declarations: [AstronautPage, AstronautOverviewPage, AstronautDetailCardComponent],
  exports: []
})
export class AstronautModule { }
