import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Statistic2PageRoutingModule } from './statistic2-routing.module';

import { Statistic2Page } from './statistic2.page';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Statistic2PageRoutingModule,
    PrimeNGModule,
  ],
  declarations: [Statistic2Page]
})
export class Statistic2PageModule { }
