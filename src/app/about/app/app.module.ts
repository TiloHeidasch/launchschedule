import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppPageRoutingModule } from './app-routing.module';

import { AppPage } from './app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppPageRoutingModule
  ],
  declarations: [AppPage]
})
export class AppPageModule {}
