import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";
import { PlaceholderService } from "src/app/placeholder.service";

@Component({
  selector: "app-spacecraft-list-entry",
  templateUrl: "./spacecraft-list-entry.component.html",
  styleUrls: ["./spacecraft-list-entry.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpacecraftListEntryComponent implements OnInit {
  @Input() spacecraft;
  title: string;
  subtitle: string;
  constructor(public placeholderService: PlaceholderService) {}

  ngOnInit() {
    this.title = this.spacecraft.name;
    this.subtitle = this.spacecraft.agency.abbrev;
  }
}
