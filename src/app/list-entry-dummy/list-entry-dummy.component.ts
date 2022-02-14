import { Component, Input } from "@angular/core";

@Component({
  selector: "app-list-entry-dummy",
  templateUrl: "./list-entry-dummy.component.html",
  styleUrls: ["./list-entry-dummy.component.scss"],
})
export class ListEntryDummyComponent {
  constructor() {}
  @Input() countdown: boolean = false;
  @Input() notification: boolean = false;
  @Input() content: boolean = false;
}
