import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaunchlibraryPageRoutingModule } from './launchlibrary-routing.module';

import { LaunchlibraryPage } from './launchlibrary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaunchlibraryPageRoutingModule
  ],
  declarations: [LaunchlibraryPage]
})
export class LaunchlibraryPageModule {}
