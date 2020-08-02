import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatisticPageRoutingModule } from './statistic-routing.module';

import { StatisticPage } from './statistic.page';
import { AnimationModule } from '../animation/animation.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatisticPageRoutingModule,
    AnimationModule
  ],
  declarations: [StatisticPage]
})
export class StatisticPageModule { }
