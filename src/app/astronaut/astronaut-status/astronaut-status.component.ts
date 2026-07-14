import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-astronaut-status",
  standalone: false,
  templateUrl: "./astronaut-status.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["./astronaut-status.component.scss"],
})
export class AstronautStatusComponent {
  @Input() status: { id: number; name: string };
  constructor() {}
}
