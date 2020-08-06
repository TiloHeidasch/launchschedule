import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { VideoComponent } from './video.component';
import { YouTubePlayerModule } from "@angular/youtube-player";


@NgModule({
    declarations: [VideoComponent],
    imports: [
        CommonModule,
        IonicModule,
        YouTubePlayerModule
    ],
    exports: [VideoComponent],
})
export class VideoModule { }
