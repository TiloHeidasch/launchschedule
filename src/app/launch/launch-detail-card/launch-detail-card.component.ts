import { Component, OnInit, Input, ChangeDetectionStrategy } from "@angular/core";
import { LaunchLibraryService } from "src/app/launch-library.service";
import { PlaceholderService } from "src/app/placeholder.service";

@Component({
  selector: "app-launch-detail-card",
  standalone: false,
  templateUrl: "./launch-detail-card.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
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
    const image = this.launch.infographic
      ? this.launch.infographic
      : this.launch.image;
    this.imageUrl = this.placeholderService.resolveImage(image);
  }
  navigate(baseUrl: string, hashtag: string) {
    window.location.href = baseUrl + hashtag.replace("#", "");
  }
}
