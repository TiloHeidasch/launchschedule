import { Component, OnInit, Input } from "@angular/core";
import { LaunchLibraryService } from "src/app/launch-library.service";

@Component({
  selector: "app-pad-detail-card",
  templateUrl: "./pad-detail-card.component.html",
  styleUrls: ["./pad-detail-card.component.scss"],
})
export class PadDetailCardComponent implements OnInit {
  @Input() pad;

  constructor(private service: LaunchLibraryService) {}

  async ngOnInit() {}
}
