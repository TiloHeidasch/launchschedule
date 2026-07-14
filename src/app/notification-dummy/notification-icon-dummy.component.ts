import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-notification-icon-dummy",
  standalone: false,
  templateUrl: "./notification-icon-dummy.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["./notification-icon-dummy.component.scss"],
})
export class NotificationIconDummyComponent {
  constructor() {}
}
