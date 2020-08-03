import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchRoutingModule } from '../launch-routing.module';
import { LaunchStatusComponent } from './launch-status.component';


@NgModule({
    declarations: [LaunchStatusComponent],
    imports: [
        LaunchRoutingModule,
        CommonModule
    ],
    exports: [LaunchStatusComponent],
})
export class LaunchStatusModule { }
