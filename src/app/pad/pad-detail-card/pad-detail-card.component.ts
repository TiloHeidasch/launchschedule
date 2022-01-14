import { Component, Input } from "@angular/core";
import { PlaceholderService } from "src/app/placeholder.service";

@Component({
  selector: "app-pad-detail-card",
  templateUrl: "./pad-detail-card.component.html",
  styleUrls: ["./pad-detail-card.component.scss"],
})
export class PadDetailCardComponent {
  @Input() pad;

  constructor(public placeholderService: PlaceholderService) {}
}
