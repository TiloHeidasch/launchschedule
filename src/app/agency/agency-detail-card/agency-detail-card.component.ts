import { Component, OnInit, Input } from "@angular/core";
import { LaunchLibraryService } from "src/app/launch-library.service";
import { PlaceholderService } from "src/app/placeholder.service";

@Component({
  selector: "app-agency-detail-card",
  templateUrl: "./agency-detail-card.component.html",
  styleUrls: ["./agency-detail-card.component.scss"],
})
export class AgencyDetailCardComponent implements OnInit {
  @Input() agency = undefined;
  @Input() id?;

  constructor(
    private service: LaunchLibraryService,
    public placeholderService: PlaceholderService
  ) {}

  async ngOnInit() {
    if (this.agency === undefined) {
      this.agency = await this.service.getAgencyById(this.id);
    }
  }
}
