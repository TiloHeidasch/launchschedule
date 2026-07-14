import { Component, OnInit, Input, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-youtube-video",
  standalone: false,
  templateUrl: "./video.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["./video.component.scss"],
})
export class VideoComponent implements OnInit {
  @Input() launchVideo?;
  @Input() url?;
  @Input() title?;
  @Input() description?;
  id = "0";
  constructor() {}

  ngOnInit() {
    if (this.launchVideo) {
      this.url = this.launchVideo.url;
      this.title = this.launchVideo.title;
      this.description = this.launchVideo.description;
    }
    if (this.url.search("youtube") !== -1) {
      this.id = this.url.replace("https://www.youtube.com/watch?v=", "");

      const tag = document.createElement("script");

      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }
  }
}
