import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaunchLibraryService } from '../launch-library.service';


@Component({
  selector: 'app-payload-overview',
  templateUrl: './payload-overview.page.html',
  styleUrls: ['./payload-overview.page.scss'],
})
export class PayloadOverviewPage implements OnInit {
  title = 'Payloads';
  payloads: any[] = [];
  constructor(private activatedRoute: ActivatedRoute, private service: LaunchLibraryService) { }
  search: string;
  startDate: Date;
  endDate: Date;
  padId: number;
  locationId: number;
  rocketId: number;
  payloadId: number;

  ngOnInit() {
    this.loadFirst();
  }
  async loadFirst() {
    this.payloads = (await this.service.getFirstPayloads(this.search, this.startDate, this.endDate, this.padId, this.locationId, this.rocketId, this.payloadId)).payloads;
  }

  async loadMore(event) {
    const answer = await this.service.getNextPayloads(this.payloads.length, this.search, this.startDate, this.endDate, this.padId, this.locationId, this.rocketId, this.payloadId);
    this.payloads.push(...answer.payloads);
    event.target.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    if (this.payloads.length === answer.max) {
      event.target.disabled = true;
    }
  }
}
