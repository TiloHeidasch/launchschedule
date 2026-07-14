import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { PlaceholderService } from "src/app/placeholder.service";
import { EpicPicture } from "../epic.service";

@Component({
  selector: "app-blue-marble-list-entry",
  standalone: false,
  templateUrl: "./blue-marble-list-entry.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["./blue-marble-list-entry.component.scss"],
})
export class BlueMarbleListEntryComponent {
  @Input() epicPicture: EpicPicture;
  constructor(public placeholderService: PlaceholderService) {}
}
