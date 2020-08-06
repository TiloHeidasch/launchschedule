import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'youtube-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  @Input('launchVideo') launchVideo?;
  @Input('url') url?;
  @Input('title') title?;
  @Input('description') description?;
  id = '0';
  constructor() { }

  ngOnInit() {
    if (this.launchVideo) {
      this.url = this.launchVideo.url;
      this.title = this.launchVideo.title;
      this.description = this.launchVideo.description;
    }
    if (this.url.search('youtube') !== -1) {
      this.id = this.url.replace('https://www.youtube.com/watch?v=', '');

      const tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }
  }

}
