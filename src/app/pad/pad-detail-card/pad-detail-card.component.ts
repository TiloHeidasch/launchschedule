import { Component, OnInit, Input } from '@angular/core';
import { LaunchLibraryService } from 'src/app/launch-library.service';

@Component({
  selector: 'pad-detail-card',
  templateUrl: './pad-detail-card.component.html',
  styleUrls: ['./pad-detail-card.component.scss'],
})
export class PadDetailCardComponent implements OnInit {
  @Input('id') id;
  pad;
  title;
  subtitle;

  constructor(private service: LaunchLibraryService) {
  }

  async ngOnInit() {
    this.pad = await this.service.getPadById(this.id);
    this.title = this.pad.name.split(',')[0].trim();
    this.subtitle = this.pad.name.split(',')[1] + this.pad.name.split(',')[2];

  }

}
