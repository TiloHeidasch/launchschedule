import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacecraftListEntryComponent } from './spacecraft-list-entry.component';
import { SpacecraftRoutingModule } from '../spacecraft-routing.module';
import { AnimationModule } from 'src/app/animation/animation.module';


@NgModule({
    declarations: [SpacecraftListEntryComponent],
    imports: [
        SpacecraftRoutingModule,
        AnimationModule,
        CommonModule
    ],
    exports: [SpacecraftListEntryComponent],
})
export class SpacecraftListEntryModule { }
