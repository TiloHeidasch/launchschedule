import { Component, Input } from "@angular/core";
import { PlaceholderService } from "src/app/placeholder.service";

@Component({
  selector: "app-astronaut-detail-card",
  templateUrl: "./astronaut-detail-card.component.html",
  styleUrls: ["./astronaut-detail-card.component.scss"],
})
export class AstronautDetailCardComponent {
  @Input() astronaut;

  constructor(public placeholderService: PlaceholderService) {}
}
