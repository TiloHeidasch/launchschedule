import { Component, Input } from "@angular/core";
import { PlaceholderService } from "src/app/placeholder.service";

@Component({
  selector: "app-location-detail-card",
  templateUrl: "./location-detail-card.component.html",
  styleUrls: ["./location-detail-card.component.scss"],
})
export class LocationDetailCardComponent {
  @Input() location;

  constructor(public placeholderService: PlaceholderService) {}
}
