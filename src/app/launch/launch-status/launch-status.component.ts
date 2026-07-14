import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-launch-status",
  standalone: false,
  templateUrl: "./launch-status.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["./launch-status.component.scss"],
})
export class LaunchStatusComponent {
  @Input() status: { id: number; name: string };
  constructor() {}
}
