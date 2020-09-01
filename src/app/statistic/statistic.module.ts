import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { StatisticPageRoutingModule } from "./statistic-routing.module";

import { StatisticPage } from "./statistic.page";
import { PrimeNGModule } from "../prime-ng/prime-ng.module";
import { ChartsComponent } from "./charts/charts.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatisticPageRoutingModule,
    PrimeNGModule,
  ],
  declarations: [StatisticPage, ChartsComponent],
})
export class StatisticPageModule {}
