import { Component, OnInit, Input } from "@angular/core";
import { LaunchLibraryService } from "src/app/launch-library.service";
import { PlaceholderService } from "src/app/placeholder.service";

@Component({
  selector: "app-astronaut-detail-card",
  templateUrl: "./astronaut-detail-card.component.html",
  styleUrls: ["./astronaut-detail-card.component.scss"],
})
export class AstronautDetailCardComponent implements OnInit {
  @Input() astronaut;

  constructor(
    private service: LaunchLibraryService,
    public placeholderService: PlaceholderService
  ) {}

  async ngOnInit() {}
}
