import { Component, OnInit, Input } from "@angular/core";
import { LaunchLibraryService } from "src/app/launch-library.service";
import { PlaceholderService } from "src/app/placeholder.service";

@Component({
  selector: "app-location-detail-card",
  templateUrl: "./location-detail-card.component.html",
  styleUrls: ["./location-detail-card.component.scss"],
})
export class LocationDetailCardComponent implements OnInit {
  @Input() location;

  constructor(
    private service: LaunchLibraryService,
    public placeholderService: PlaceholderService
  ) {}

  async ngOnInit() {}
}
