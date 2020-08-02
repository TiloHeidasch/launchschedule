import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { YouTubePlayerModule } from "@angular/youtube-player";

import { IonicModule } from '@ionic/angular';

import { LaunchRoutingModule } from './launch-routing.module';

import { LaunchPage } from './launch.page';
import { LaunchOverviewPage } from './launch-overview.page';
import { LaunchListEntryComponent } from './launch-list-entry/launch-list-entry.component';
import { RocketModule } from '../rocket/rocket.module';
import { AgencyModule } from '../agency/agency.module';
import { MissionModule } from '../mission/mission.module';
import { PadModule } from '../pad/pad.module';
import { LaunchDetailCardComponent } from './launch-detail-card/launch-detail-card.component';
import { VideoComponent } from './video/video.component';
import { AnimationModule } from '../animation/animation.module';
import { LaunchStatusComponent } from './launch-status/launch-status.component';
import { CountdownModule } from '../countdown/countdown.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaunchRoutingModule,
    RocketModule,
    AgencyModule,
    MissionModule,
    PadModule,
    YouTubePlayerModule,
    AnimationModule,
    CountdownModule
  ],
  declarations: [LaunchPage, LaunchOverviewPage, LaunchListEntryComponent, LaunchDetailCardComponent, VideoComponent, LaunchStatusComponent],
  exports: [LaunchDetailCardComponent, LaunchListEntryComponent],
})
export class LaunchModule { }
