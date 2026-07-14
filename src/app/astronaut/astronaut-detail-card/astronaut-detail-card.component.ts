import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { PlaceholderService } from "src/app/placeholder.service";

@Component({
  selector: "app-astronaut-detail-card",
  standalone: false,
  templateUrl: "./astronaut-detail-card.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["./astronaut-detail-card.component.scss"],
})
export class AstronautDetailCardComponent {
  @Input() astronaut;

  constructor(public placeholderService: PlaceholderService) {}
}
