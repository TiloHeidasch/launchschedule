import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'launch-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  @Input('video') video;
  id = '0';
  constructor() { }

  ngOnInit() {
    if (this.video.url.search('youtube') !== -1) {
      this.id = this.video.url.replace('https://www.youtube.com/watch?v=', '');

      const tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }
  }

}
