import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgencyRoutingModule } from './agency-routing.module';

import { AgencyPage } from './agency.page';
import { AgencyOverviewPage } from './agency-overview.page';
import { AgencyListEntryComponent } from './agency-list-entry/agency-list-entry.component';
import { AgencyDetailCardComponent } from './agency-detail-card/agency-detail-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgencyRoutingModule
  ],
  declarations: [AgencyPage, AgencyOverviewPage, AgencyListEntryComponent, AgencyDetailCardComponent],
  exports: [AgencyDetailCardComponent]
})
export class AgencyModule { }
