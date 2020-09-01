import { Component, OnInit, Input } from "@angular/core";
import { LaunchLibraryService } from "src/app/launch-library.service";

@Component({
  selector: "app-rocket-detail-card",
  templateUrl: "./rocket-detail-card.component.html",
  styleUrls: ["./rocket-detail-card.component.scss"],
})
export class RocketDetailCardComponent implements OnInit {
  @Input() rocket?;
  @Input() id?;
  constructor(private service: LaunchLibraryService) {}

  async ngOnInit() {
    if (this.rocket === undefined) {
      this.rocket = await this.service.getRocketById(this.id);
    }
  }
}
