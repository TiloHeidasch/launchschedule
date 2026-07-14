import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-countdown-dummy",
  standalone: false,
  templateUrl: "./countdown-dummy.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["./countdown-dummy.component.scss"],
})
export class CountdownDummyComponent {
  constructor() {}
}
