import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpacestationRoutingModule } from './spacestation-routing.module';

import { SpacestationPage } from './spacestation.page';
import { SpacestationOverviewPage } from './spacestation-overview.page';
import { SpacestationDetailCardComponent } from './spacestation-detail-card/spacestation-detail-card.component';
import { AnimationModule } from '../animation/animation.module';
import { SpacestationListEntryModule } from './spacestation-list-entry/spacestation-list-entry.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpacestationRoutingModule,
    AnimationModule,
    SpacestationListEntryModule
  ],
  declarations: [SpacestationPage, SpacestationOverviewPage, SpacestationDetailCardComponent],
  exports: []
})
export class SpacestationModule { }
