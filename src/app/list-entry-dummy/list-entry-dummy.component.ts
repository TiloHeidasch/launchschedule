import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-list-entry-dummy",
  standalone: false,
  templateUrl: "./list-entry-dummy.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["./list-entry-dummy.component.scss"],
})
export class ListEntryDummyComponent {
  constructor() {}
  @Input() countdown: boolean = false;
  @Input() content: boolean = false;
}
