import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AstronautRoutingModule } from '../astronaut-routing.module';
import { AstronautStatusComponent } from './astronaut-status.component';


@NgModule({
    declarations: [AstronautStatusComponent],
    imports: [
        AstronautRoutingModule,
        CommonModule
    ],
    exports: [AstronautStatusComponent],
})
export class AstronautStatusModule { }
