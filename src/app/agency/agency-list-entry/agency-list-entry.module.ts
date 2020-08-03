import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgencyListEntryComponent } from './agency-list-entry.component';
import { AgencyRoutingModule } from '../agency-routing.module';


@NgModule({
    declarations: [AgencyListEntryComponent],
    imports: [
        AgencyRoutingModule,
        CommonModule
    ],
    exports: [AgencyListEntryComponent],
})
export class AgencyListEntryModule { }
