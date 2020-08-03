import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { YouTubePlayerModule } from "@angular/youtube-player";

import { IonicModule } from '@ionic/angular';

import { LaunchRoutingModule } from './launch-routing.module';

import { LaunchPage } from './launch.page';
import { LaunchOverviewPage } from './launch-overview.page';
import { LaunchDetailCardComponent } from './launch-detail-card/launch-detail-card.component';
import { VideoComponent } from './video/video.component';
import { AnimationModule } from '../animation/animation.module';
import { CountdownModule } from '../countdown/countdown.module';
import { LaunchListEntryModule } from './launch-list-entry/launch-list-entry.module';
import { LaunchStatusModule } from './launch-status/launch-status.module';
import { AgencyListEntryModule } from '../agency/agency-list-entry/agency-list-entry.module';
import { MissionListModule } from '../mission/mission-list-entry/mission-list-entry.module';
import { PadListEntryModule } from '../pad/pad-list-entry/pad-list-entry.module';
import { RocketListEntryModule } from '../rocket/rocket-list-entry/rocket-list-entry.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaunchRoutingModule,
    MissionListModule,
    PadListEntryModule,
    YouTubePlayerModule,
    AnimationModule,
    CountdownModule,
    LaunchListEntryModule,
    LaunchStatusModule,
    AgencyListEntryModule,
    RocketListEntryModule
  ],
  declarations: [LaunchPage, LaunchOverviewPage, LaunchDetailCardComponent, VideoComponent],
  exports: [LaunchDetailCardComponent],
})
export class LaunchModule { }
