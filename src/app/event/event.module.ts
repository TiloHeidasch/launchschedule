import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventRoutingModule } from './event-routing.module';

import { EventPage } from './event.page';
import { EventOverviewPage } from './event-overview.page';
import { EventListEntryComponent } from './event-list-entry/event-list-entry.component';
import { EventDetailCardComponent } from './event-detail-card/event-detail-card.component';
import { AnimationModule } from '../animation/animation.module';
import { CountdownModule } from '../countdown/countdown.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventRoutingModule,
    AnimationModule,
    CountdownModule
  ],
  declarations: [EventPage, EventOverviewPage, EventListEntryComponent, EventDetailCardComponent],
  exports: [EventDetailCardComponent]
})
export class EventModule { }
