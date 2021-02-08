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

  constructor(public placeholderService: PlaceholderService) {}

  ngOnInit() {}
}
