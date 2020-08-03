import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationListEntryComponent } from './location-list-entry.component';
import { LocationRoutingModule } from '../location-routing.module';
import { AnimationModule } from 'src/app/animation/animation.module';


@NgModule({
    declarations: [LocationListEntryComponent],
    imports: [
        LocationRoutingModule,
        AnimationModule,
        CommonModule
    ],
    exports: [LocationListEntryComponent],
})
export class LocationListEntryModule { }
