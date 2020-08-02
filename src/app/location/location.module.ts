import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationRoutingModule } from './location-routing.module';

import { LocationPage } from './location.page';
import { LocationOverviewPage } from './location-overview.page';
import { LocationListEntryComponent } from './location-list-entry/location-list-entry.component';
import { LocationDetailCardComponent } from './location-detail-card/location-detail-card.component';
import { AnimationModule } from '../animation/animation.module';
import { MapModule } from '../map/map.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationRoutingModule,
    AnimationModule
  ],
  declarations: [LocationPage, LocationOverviewPage, LocationListEntryComponent, LocationDetailCardComponent],
  exports: [LocationDetailCardComponent]
})
export class LocationModule { }
