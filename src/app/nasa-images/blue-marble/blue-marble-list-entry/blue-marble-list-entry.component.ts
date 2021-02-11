import { Component, Input, OnInit } from "@angular/core";
import { PlaceholderService } from "src/app/placeholder.service";
import { EpicPicture } from "../epic.service";

@Component({
  selector: "app-blue-marble-list-entry",
  templateUrl: "./blue-marble-list-entry.component.html",
  styleUrls: ["./blue-marble-list-entry.component.scss"],
})
export class BlueMarbleListEntryComponent implements OnInit {
  @Input() epicPicture: EpicPicture;
  constructor(public placeholderService: PlaceholderService) {}

  ngOnInit() {}
}
