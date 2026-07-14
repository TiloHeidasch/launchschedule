import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-about",
  standalone: false,
  templateUrl: "./about.page.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["./about.page.scss"],
})
export class AboutPage {
  title = "About";
  constructor() {}
}
