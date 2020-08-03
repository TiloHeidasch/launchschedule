import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListEntryComponent } from './event-list-entry.component';
import { EventRoutingModule } from '../event-routing.module';
import { CountdownModule } from 'src/app/countdown/countdown.module';
import { AnimationModule } from 'src/app/animation/animation.module';


@NgModule({
    declarations: [EventListEntryComponent],
    imports: [
        EventRoutingModule,
        CommonModule,
        AnimationModule,
        CountdownModule
    ],
    exports: [EventListEntryComponent],
})
export class EventListEntryModule { }
