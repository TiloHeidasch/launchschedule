import { Component, Input, OnInit } from "@angular/core";
import { PlaceholderService } from "src/app/placeholder.service";
import { MarsPhoto } from "../mars-photos.service";

@Component({
  selector: "app-rover-list-entry",
  templateUrl: "./rover-list-entry.component.html",
  styleUrls: ["./rover-list-entry.component.scss"],
})
export class RoverListEntryComponent implements OnInit {
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
