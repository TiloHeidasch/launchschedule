import { Component, OnInit } from "@angular/core";
import { StarshipParamStoreService } from "./starship-param-store.service";

@Component({
  selector: "app-starship",
  templateUrl: "./starship.page.html",
  styleUrls: ["./starship.page.scss"],
})
export class StarshipPage implements OnInit {
  title = "Starship";
  videoId = "0";
  youtubePlayer;
  currentStreamId = 0;
  constructor(public store: StarshipParamStoreService) {}

  ngOnInit() {
    if (this.store.dashboard === undefined) {
      this.store.loadDashboard();
    }
    this.addYoutubeScriptToDocument();
  }
  private extractYoutubeVideoIdFromUrl(youtubeUrl: string): string {
    if (youtubeUrl.startsWith("https://www.youtube.com/watch?v=")) {
      return youtubeUrl.replace("https://www.youtube.com/watch?v=", "");
    }
    return undefined;
  }
  private addYoutubeScriptToDocument() {
    const tag = document.createElement("script");

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }
  switchStream() {
    this.currentStreamId++;
    if (this.currentStreamId === this.store.dashboard.live_streams.length) {
      this.currentStreamId = 0;
    }
    this.queueCurrentVideo();
  }
  videoReady(event) {
    console.log("videoReady", event);
    this.youtubePlayer = event.target;
    this.queueCurrentVideo();
  }
  queueCurrentVideo() {
    this.videoId = this.extractYoutubeVideoIdFromUrl(
      this.store.dashboard.live_streams[this.currentStreamId].url
    );
    this.youtubePlayer.cueVideoById(this.videoId);
  }
  videoStateChange(e) {
    console.log("videoStateChange: ", e);
    if (e.data === 5) {
      console.log("VIDEO STATE == 5");
      e.target.mute();
      e.target.playVideo();
    }
  }
}
