import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpacestationRoutingModule } from './spacestation-routing.module';

import { SpacestationPage } from './spacestation.page';
import { SpacestationOverviewPage } from './spacestation-overview.page';
import { SpacestationListEntryComponent } from './spacestation-list-entry/spacestation-list-entry.component';
import { SpacestationDetailCardComponent } from './spacestation-detail-card/spacestation-detail-card.component';
import { AnimationModule } from '../animation/animation.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpacestationRoutingModule,
    AnimationModule
  ],
  declarations: [SpacestationPage, SpacestationOverviewPage, SpacestationListEntryComponent, SpacestationDetailCardComponent],
  exports: [SpacestationDetailCardComponent]
})
export class SpacestationModule { }
