import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayloadPageRoutingModule } from './payload-routing.module';

import { PayloadPage } from './payload.page';
import { PayloadOverviewPage } from './payload-overview.page';
import { PayloadListEntryComponent } from './payload-list-entry/payload-list-entry.component';
import { PayloadDetailCardComponent } from './payload-detail-card/payload-detail-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayloadPageRoutingModule
  ],
  declarations: [PayloadPage, PayloadOverviewPage, PayloadListEntryComponent, PayloadDetailCardComponent],
  exports: [PayloadDetailCardComponent]
})
export class PayloadModule { }
