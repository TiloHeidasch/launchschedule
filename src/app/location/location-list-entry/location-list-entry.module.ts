import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationListEntryComponent } from './location-list-entry.component';
import { LocationRoutingModule } from '../location-routing.module';


@NgModule({
    declarations: [LocationListEntryComponent],
    imports: [
        LocationRoutingModule,
        CommonModule
    ],
    exports: [LocationListEntryComponent],
})
export class LocationListEntryModule { }
