import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadListEntryComponent } from './pad-list-entry.component';
import { PadRoutingModule } from '../pad-routing.module';


@NgModule({
    declarations: [PadListEntryComponent],
    imports: [
        PadRoutingModule,
        CommonModule
    ],
    exports: [PadListEntryComponent],
})
export class PadListEntryModule { }
