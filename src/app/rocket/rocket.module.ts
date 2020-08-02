import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RocketRoutingModule } from './rocket-routing.module';

import { RocketPage } from './rocket.page';
import { RocketListEntryComponent } from './rocket-list-entry/rocket-list-entry.component';
import { RocketDetailCardComponent } from './rocket-detail-card/rocket-detail-card.component';
import { CommonModule } from '@angular/common';
import { RocketOverviewPage } from './rocket-overview.page';
import { AnimationModule } from '../animation/animation.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RocketRoutingModule,
    AnimationModule
  ],
  declarations: [RocketOverviewPage, RocketPage, RocketListEntryComponent, RocketDetailCardComponent],
  exports: [RocketDetailCardComponent, RocketListEntryComponent],
})
export class RocketModule { }
