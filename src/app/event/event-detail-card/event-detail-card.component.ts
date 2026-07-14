import { Component, OnInit, Input, ChangeDetectionStrategy } from "@angular/core";
import { LaunchLibraryService } from "src/app/launch-library.service";
import { PlaceholderService } from "src/app/placeholder.service";

@Component({
  selector: "app-event-detail-card",
  standalone: false,
  templateUrl: "./event-detail-card.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["./event-detail-card.component.scss"],
})
export class EventDetailCardComponent implements OnInit {
  @Input() event;
  date: Date;

  constructor(
    private service: LaunchLibraryService,
    public placeholderService: PlaceholderService
  ) {}

  async ngOnInit() {
    this.date = new Date(this.event.date);
  }
}
