import { Component, OnInit, Input } from "@angular/core";
import { TwitterService } from "./twitter.service";

@Component({
  selector: "app-starship-update",
  templateUrl: "./starship-update.component.html",
  styleUrls: ["./starship-update.component.scss"],
})
export class StarshipUpdateComponent implements OnInit {
  @Input() update: {
    id: number;
    profile_image: string;
    comment: string;
    info_url: string;
    created_by: string;
    created_on: string;
  };
  isTwitter = false;
  twitterContent;
  constructor(private twitterService: TwitterService) {}

  ngOnInit() {
    this.checkAndExtractTwitterContent();
  }
  private async checkAndExtractTwitterContent() {
    this.isTwitter = this.update.info_url.startsWith("https://twitter.com/");
    if (this.isTwitter) {
      this.twitterContent = await this.twitterService.extractTwitterContent(
        this.update.info_url
      );
    }
  }
  toDate(dateString: string): Date {
    return new Date(dateString);
  }
}
