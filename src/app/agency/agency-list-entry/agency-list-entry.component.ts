import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from "@angular/core";
import { AgencyService } from "src/app/masterdata/agency.service";
import { PlaceholderService } from "src/app/placeholder.service";

@Component({
  selector: "app-agency-list-entry",
  templateUrl: "./agency-list-entry.component.html",
  styleUrls: ["./agency-list-entry.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgencyListEntryComponent implements OnInit {
  @Input() agency?;
  @Input() id?;
  title: string;
  subtitle: string;
  constructor(
    private service: AgencyService,
    private cdr: ChangeDetectorRef,
    public placeholderService: PlaceholderService
  ) {}

  async ngOnInit() {
    if (this.agency === undefined) {
      this.agency = await this.service.getAgencyById(this.id);
      this.cdr.markForCheck();
    }
    this.title = this.agency.name;
    this.subtitle = this.agency.abbrev;
  }
}
