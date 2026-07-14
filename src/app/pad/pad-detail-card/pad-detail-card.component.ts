import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { PlaceholderService } from "src/app/placeholder.service";

@Component({
  selector: "app-pad-detail-card",
  standalone: false,
  templateUrl: "./pad-detail-card.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["./pad-detail-card.component.scss"],
})
export class PadDetailCardComponent {
  @Input() pad;

  constructor(public placeholderService: PlaceholderService) {}
}
