import { Component, Input, OnInit } from "@angular/core";
import { PlaceholderService } from "src/app/placeholder.service";
import { AstronomyPictureOfTheDay } from "../apod.service";

@Component({
  selector: "app-astro-image-of-the-day-list-entry",
  templateUrl: "./astro-image-of-the-day-list-entry.component.html",
  styleUrls: ["./astro-image-of-the-day-list-entry.component.scss"],
})
export class AstroImageOfTheDayListEntryComponent implements OnInit {
  @Input() astroImageOfTheDay: AstronomyPictureOfTheDay;
  id = "0";

  constructor(public placeholderService: PlaceholderService) {}

  ngOnInit() {
    if (this.astroImageOfTheDay.media_type === "video") {
      this.id = this.astroImageOfTheDay.url.replace(
        "https://www.youtube.com/embed/",
        ""
      );
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }
  }
}
