import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-nasa-images",
  standalone: false,
  templateUrl: "./nasa-images.page.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["./nasa-images.page.scss"],
})
export class NasaImagesPage {
  title = "NASA Images";
  constructor() {}
}
