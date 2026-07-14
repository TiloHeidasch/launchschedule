import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ApodService, AstronomyPictureOfTheDay } from "./apod.service";

@Component({
  selector: "app-astro-image-of-the-day",
  standalone: false,
  templateUrl: "./astro-image-of-the-day.page.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["./astro-image-of-the-day.page.scss"],
})
export class AstroImageOfTheDayPage implements OnInit {
  astroImageOfTheDay: AstronomyPictureOfTheDay = undefined;
  constructor(private service: ApodService) {}

  ngOnInit() {
    this.getAstroImageOfTheDay();
  }

  async getAstroImageOfTheDay(refreshEvent?) {
    this.astroImageOfTheDay = await this.service.getAstronomyPictureOfTheDay();
    if (refreshEvent) {
      refreshEvent.target.complete();
    }
  }
}
