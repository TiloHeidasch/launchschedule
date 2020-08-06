import { Component, OnInit, Input } from '@angular/core';
import { LaunchLibraryService } from 'src/app/launch-library.service';


@Component({
  selector: 'spacestation-list-entry',
  templateUrl: './spacestation-list-entry.component.html',
  styleUrls: ['./spacestation-list-entry.component.scss'],
})
export class SpacestationListEntryComponent implements OnInit {
  @Input('spacestation') spacestation?;
  @Input('id') id?;
  title: string;
  subtitle: string;
  constructor(private service: LaunchLibraryService) { }

  async ngOnInit() {
    if (!this.spacestation) {
      this.spacestation = await this.service.getSpacestationById(this.id);
    }
    this.title = this.spacestation.name;
    this.subtitle = this.spacestation.orbit;
  }

}
