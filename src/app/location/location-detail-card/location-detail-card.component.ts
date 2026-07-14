import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { PlaceholderService } from "src/app/placeholder.service";

@Component({
  selector: "app-location-detail-card",
  standalone: false,
  templateUrl: "./location-detail-card.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["./location-detail-card.component.scss"],
})
export class LocationDetailCardComponent {
  @Input() location;

  constructor(public placeholderService: PlaceholderService) {}
}
