import { Component, Input, OnInit } from "@angular/core";
import { PlaceholderService } from "src/app/placeholder.service";
import { MarsPhoto } from "../mars-photos.service";

@Component({
  selector: "app-curiosity-list-entry",
  templateUrl: "./curiosity-list-entry.component.html",
  styleUrls: ["./curiosity-list-entry.component.scss"],
})
export class CuriosityListEntryComponent implements OnInit {
  @Input() marsPhoto: MarsPhoto;
  title: string;
  subtitle: string;
  text: string;
  constructor(public placeholderService: PlaceholderService) {}

  ngOnInit() {
    this.title = this.marsPhoto.camera.full_name;
    this.subtitle = this.marsPhoto.rover.name;
    this.text =
      "Date: " + this.marsPhoto.earth_date + "; Sol: " + this.marsPhoto.sol;
  }
}
