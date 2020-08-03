import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LocationRoutingModule } from './location-routing.module';
import { LocationPage } from './location.page';
import { LocationOverviewPage } from './location-overview.page';
import { LocationDetailCardComponent } from './location-detail-card/location-detail-card.component';
import { AnimationModule } from '../animation/animation.module';
import { LocationListEntryModule } from './location-list-entry/location-list-entry.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationRoutingModule,
    AnimationModule,
    LocationListEntryModule
  ],
  declarations: [LocationPage, LocationOverviewPage, LocationDetailCardComponent],
  exports: []
})
export class LocationModule { }
