import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchListEntryComponent } from './launch-list-entry.component';
import { LaunchRoutingModule } from '../launch-routing.module';
import { LaunchStatusModule } from '../launch-status/launch-status.module';
import { CountdownModule } from 'src/app/countdown/countdown.module';


@NgModule({
    declarations: [LaunchListEntryComponent],
    imports: [
        LaunchRoutingModule,
        CommonModule,
        LaunchStatusModule,
        CountdownModule
    ],
    exports: [LaunchListEntryComponent],
})
export class LaunchListEntryModule { }
