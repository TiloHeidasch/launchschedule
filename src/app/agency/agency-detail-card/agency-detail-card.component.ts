import { Component, OnInit, Input, ChangeDetectionStrategy } from "@angular/core";
import { AgencyService } from "../agency.service";
import { PlaceholderService } from "src/app/placeholder.service";

@Component({
  selector: "app-agency-detail-card",
  standalone: false,
  templateUrl: "./agency-detail-card.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["./agency-detail-card.component.scss"],
})
export class AgencyDetailCardComponent implements OnInit {
  @Input() agency = undefined;
  @Input() id?;

  constructor(
    private service: AgencyService,
    public placeholderService: PlaceholderService
  ) {}

  async ngOnInit() {
    if (this.agency === undefined) {
      this.agency = await this.service.getAgencyById(this.id);
    }
  }
}
