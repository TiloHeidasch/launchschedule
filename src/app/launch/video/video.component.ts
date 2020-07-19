import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'launch-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  @Input('src') src: string;
  id = '0';
  constructor() { }

  ngOnInit() {
    if (this.src.search('youtube') !== -1) {
      this.id = this.src.replace('https://www.youtube.com/watch?v=', '');

      const tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }
  }

}
