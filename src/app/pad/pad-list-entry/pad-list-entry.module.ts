import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadListEntryComponent } from './pad-list-entry.component';
import { PadRoutingModule } from '../pad-routing.module';
import { AnimationModule } from 'src/app/animation/animation.module';


@NgModule({
    declarations: [PadListEntryComponent],
    imports: [
        PadRoutingModule,
        AnimationModule,
        CommonModule
    ],
    exports: [PadListEntryComponent],
})
export class PadListEntryModule { }
