import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpacecraftRoutingModule } from './spacecraft-routing.module';

import { SpacecraftPage } from './spacecraft.page';
import { SpacecraftOverviewPage } from './spacecraft-overview.page';
import { SpacecraftListEntryComponent } from './spacecraft-list-entry/spacecraft-list-entry.component';
import { SpacecraftDetailCardComponent } from './spacecraft-detail-card/spacecraft-detail-card.component';
import { AnimationModule } from '../animation/animation.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpacecraftRoutingModule,
    AnimationModule
  ],
  declarations: [SpacecraftPage, SpacecraftOverviewPage, SpacecraftListEntryComponent, SpacecraftDetailCardComponent],
  exports: [SpacecraftDetailCardComponent, SpacecraftListEntryComponent]
})
export class SpacecraftModule { }
