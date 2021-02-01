import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";
import { PlaceholderService } from "src/app/placeholder.service";

@Component({
  selector: "app-rocket-list-entry",
  templateUrl: "./rocket-list-entry.component.html",
  styleUrls: ["./rocket-list-entry.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RocketListEntryComponent implements OnInit {
  @Input() rocket;
  title: string;
  subtitle: string;
  imageUrl: string;

  constructor(public placeholderService: PlaceholderService) {}

  ngOnInit() {
    this.title = this.rocket.name;
    this.subtitle = this.rocket.family;
  }
}
