import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { StatisticPageRoutingModule } from "./statistic-routing.module";

import { StatisticPage } from "./statistic.page";
import { ChartsComponent } from "./charts/charts.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatisticPageRoutingModule,
  ],
  declarations: [StatisticPage, ChartsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StatisticPageModule {}