import { Component, OnInit, Input } from "@angular/core";
import { LaunchLibraryService } from "src/app/launch-library.service";
import { PlaceholderService } from "src/app/placeholder.service";

@Component({
  selector: "app-launch-detail-card",
  templateUrl: "./launch-detail-card.component.html",
  styleUrls: ["./launch-detail-card.component.scss"],
})
export class LaunchDetailCardComponent implements OnInit {
  @Input() launch;
  title;
  subtitle;
  date;
  imageUrl;

  constructor(
    private service: LaunchLibraryService,
    public placeholderService: PlaceholderService
  ) {}

  async ngOnInit() {
    this.date = new Date(this.launch.net);
    this.title = this.launch.name.split("|")[1].trim();
    this.subtitle = this.launch.name.split("|")[0].trim();
    if (this.launch.infographic) {
      this.imageUrl = this.launch.infographic;
    } else {
      this.imageUrl = this.launch.image;
    }
  }
  navigate(baseUrl: string, hashtag: string) {
    window.location.href = baseUrl + hashtag.replace("#", "");
  }
}
