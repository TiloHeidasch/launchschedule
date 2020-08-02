import { Component, OnInit, Input } from '@angular/core';
import { LaunchLibraryService } from 'src/app/launch-library.service';

@Component({
  selector: 'spacecraft-detail-card',
  templateUrl: './spacecraft-detail-card.component.html',
  styleUrls: ['./spacecraft-detail-card.component.scss'],
})
export class SpacecraftDetailCardComponent implements OnInit {
  @Input('spacecraft') spacecraft?;
  @Input('id') id?;

  constructor(private service: LaunchLibraryService) {
  }

  async ngOnInit() {
    if (this.spacecraft === undefined) {
      this.spacecraft = await this.service.getSpacecraftById(this.id);
    }
  }

}
