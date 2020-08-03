import { Component, OnInit, Input } from '@angular/core';
import { LaunchLibraryService } from 'src/app/launch-library.service';


@Component({
  selector: 'astronaut-list-entry',
  templateUrl: './astronaut-list-entry.component.html',
  styleUrls: ['./astronaut-list-entry.component.scss'],
})
export class AstronautListEntryComponent implements OnInit {
  @Input('astronaut') astronaut?;
  @Input('id') id?;
  title: string;
  subtitle: string;
  constructor(private service: LaunchLibraryService) { }

  async ngOnInit() {
    if (this.astronaut === undefined) {
      this.astronaut = await this.service.getAstronautById(this.id);
    }
    this.title = this.astronaut.name;
    this.subtitle = this.astronaut.nationality;
  }

}
