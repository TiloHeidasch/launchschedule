import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AstronautRoutingModule } from './astronaut-routing.module';

import { AstronautPage } from './astronaut.page';
import { AstronautOverviewPage } from './astronaut-overview.page';
import { AstronautListEntryComponent } from './astronaut-list-entry/astronaut-list-entry.component';
import { AstronautDetailCardComponent } from './astronaut-detail-card/astronaut-detail-card.component';
import { AnimationModule } from '../animation/animation.module';
import { AstronautStatusComponent } from './astronaut-status/astronaut-status.component';
import { AgencyModule } from '../agency/agency.module';
import { LaunchModule } from '../launch/launch.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AstronautRoutingModule,
    AnimationModule,
    AgencyModule,
    LaunchModule,
  ],
  declarations: [AstronautPage, AstronautOverviewPage, AstronautListEntryComponent, AstronautDetailCardComponent, AstronautStatusComponent],
  exports: [AstronautDetailCardComponent]
})
export class AstronautModule { }
