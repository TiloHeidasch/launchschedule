import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";
import { PlaceholderService } from "src/app/placeholder.service";

@Component({
  selector: "app-event-list-entry",
  templateUrl: "./event-list-entry.component.html",
  styleUrls: ["./event-list-entry.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventListEntryComponent implements OnInit {
  @Input() event;
  title: string;
  subtitle: string;
  date: Date;
  constructor(public placeholderService: PlaceholderService) {}

  ngOnInit() {
    this.title = this.event.name;
    this.subtitle = this.event.type.name;
    this.date = new Date(this.event.date);
  }
}
