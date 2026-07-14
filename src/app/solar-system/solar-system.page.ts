import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-solar-system",
  standalone: false,
  templateUrl: "./solar-system.page.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["./solar-system.page.scss"],
})
export class SolarSystemPage {
  constructor() {}
}
