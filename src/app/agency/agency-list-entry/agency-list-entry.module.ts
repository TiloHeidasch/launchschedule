import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgencyListEntryComponent } from './agency-list-entry.component';
import { AgencyRoutingModule } from '../agency-routing.module';
import { AnimationModule } from 'src/app/animation/animation.module';


@NgModule({
    declarations: [AgencyListEntryComponent],
    imports: [
        AgencyRoutingModule,
        AnimationModule,
        CommonModule
    ],
    exports: [AgencyListEntryComponent],
})
export class AgencyListEntryModule { }
