import { Component, Input } from "@angular/core";

@Component({
  selector: "app-astronaut-status",
  templateUrl: "./astronaut-status.component.html",
  styleUrls: ["./astronaut-status.component.scss"],
})
export class AstronautStatusComponent {
  @Input() status: { id: number; name: string };
  constructor() {}
}
