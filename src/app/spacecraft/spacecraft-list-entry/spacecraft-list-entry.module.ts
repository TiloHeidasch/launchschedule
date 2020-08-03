import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacecraftListEntryComponent } from './spacecraft-list-entry.component';
import { SpacecraftRoutingModule } from '../spacecraft-routing.module';


@NgModule({
    declarations: [SpacecraftListEntryComponent],
    imports: [
        SpacecraftRoutingModule,
        CommonModule
    ],
    exports: [SpacecraftListEntryComponent],
})
export class SpacecraftListEntryModule { }
