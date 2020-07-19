import { Component, OnInit, Input } from '@angular/core';
import { LaunchLibraryService } from 'src/app/launch-library.service';

@Component({
  selector: 'agency-detail-card',
  templateUrl: './agency-detail-card.component.html',
  styleUrls: ['./agency-detail-card.component.scss'],
})
export class AgencyDetailCardComponent implements OnInit {
  @Input('id') id;
  agency;

  constructor(private service: LaunchLibraryService) { }

  async ngOnInit() {
    this.agency = await this.service.getAgencyById(this.id);
  }

}
