import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";
import { PlaceholderService } from "src/app/placeholder.service";

@Component({
  selector: "app-launch-list-entry",
  templateUrl: "./launch-list-entry.component.html",
  styleUrls: ["./launch-list-entry.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchListEntryComponent implements OnInit {
  @Input() launch;
  title: string;
  subtitle: string;
  date: Date;
  imageUrl: string;
  constructor(public placeholderService: PlaceholderService) {}

  ngOnInit() {
    this.title = this.launch.name.split("|")[1].trim();
    this.subtitle = this.launch.name.split("|")[0].trim();
    this.date = new Date(this.launch.net);
  }
}
