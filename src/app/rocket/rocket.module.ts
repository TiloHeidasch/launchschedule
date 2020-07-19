import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RocketRoutingModule } from './rocket-routing.module';

import { RocketPage } from './rocket.page';
import { RocketListEntryComponent } from './rocket-list-entry/rocket-list-entry.component';
import { RocketDetailCardComponent } from './rocket-detail-card/rocket-detail-card.component';
import { CommonModule } from '@angular/common';
import { RocketOverviewPage } from './rocket-overview.page';
import { BigImageModalModule } from './rocket-detail-card/big-image-modal/big-image-modal.module';
import { BigImageModal } from './rocket-detail-card/big-image-modal/big-image-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RocketRoutingModule,
    BigImageModalModule
  ],
  declarations: [RocketOverviewPage, RocketPage, RocketListEntryComponent, RocketDetailCardComponent],
  exports: [RocketDetailCardComponent],
})
export class RocketModule { }
