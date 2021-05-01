import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";
import { SpacestationService } from "src/app/masterdata/spacestation.service";
import { PlaceholderService } from "src/app/placeholder.service";

@Component({
  selector: "app-spacestation-list-entry",
  templateUrl: "./spacestation-list-entry.component.html",
  styleUrls: ["./spacestation-list-entry.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpacestationListEntryComponent implements OnInit {
  @Input() spacestation?;
  @Input() id?;
  title: string;
  subtitle: string;
  constructor(
    private service: SpacestationService,
    public placeholderService: PlaceholderService
  ) {}

  async ngOnInit() {
    if (!this.spacestation) {
      this.spacestation = await this.service.getSpacestationById(this.id);
    }
    this.title = this.spacestation.name;
    this.subtitle = this.spacestation.orbit;
  }
}
