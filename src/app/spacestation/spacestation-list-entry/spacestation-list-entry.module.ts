import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacestationListEntryComponent } from './spacestation-list-entry.component';
import { SpacestationRoutingModule } from '../spacestation-routing.module';


@NgModule({
    declarations: [SpacestationListEntryComponent],
    imports: [
        SpacestationRoutingModule,
        CommonModule
    ],
    exports: [SpacestationListEntryComponent],
})
export class SpacestationListEntryModule { }
