import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketListEntryComponent } from './rocket-list-entry.component';
import { RocketRoutingModule } from '../rocket-routing.module';


@NgModule({
    declarations: [RocketListEntryComponent],
    imports: [
        RocketRoutingModule,
        CommonModule
    ],
    exports: [RocketListEntryComponent],
})
export class RocketListEntryModule { }
