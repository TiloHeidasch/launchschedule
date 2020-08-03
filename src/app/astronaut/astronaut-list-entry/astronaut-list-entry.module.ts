import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AstronautListEntryComponent } from './astronaut-list-entry.component';
import { AstronautRoutingModule } from '../astronaut-routing.module';
import { AstronautStatusModule } from '../astronaut-status/astronaut-status.module';
import { CountdownModule } from 'src/app/countdown/countdown.module';
import { AnimationModule } from 'src/app/animation/animation.module';


@NgModule({
    declarations: [AstronautListEntryComponent],
    imports: [
        AstronautRoutingModule,
        CommonModule,
        AnimationModule,
        AstronautStatusModule
    ],
    exports: [AstronautListEntryComponent],
})
export class AstronautListEntryModule { }
