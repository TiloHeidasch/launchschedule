import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-mission-list-entry",
  templateUrl: "./mission-list-entry.component.html",
  styleUrls: ["./mission-list-entry.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MissionListEntryComponent {
  @Input() mission;

  constructor() {}
}
