import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaunchLibraryService } from '../launch-library.service';
import { PayloadParamStoreService } from './payload-param-store.service';


@Component({
  selector: 'app-payload-overview',
  templateUrl: './payload-overview.page.html',
  styleUrls: ['./payload-overview.page.scss'],
})
export class PayloadOverviewPage implements OnInit {
  title = 'Payloads';
  constructor(private activatedRoute: ActivatedRoute, private service: LaunchLibraryService, public store: PayloadParamStoreService) { }

  ngOnInit() {
    if (this.store.payloads.length === 0) {
      this.loadFirst();
    }
  }
  async loadFirst() {
    this.store.payloads = [];
    this.store.payloads = (await this.service.getFirstPayloads(this.store.search, this.store.startDate, this.store.endDate, this.store.padId, this.store.locationId, this.store.rocketId, this.store.payloadId)).payloads;
  }

  async loadMore(event) {
    const answer = await this.service.getNextPayloads(this.store.payloads.length, this.store.search, this.store.startDate, this.store.endDate, this.store.padId, this.store.locationId, this.store.rocketId, this.store.payloadId);
    this.store.payloads.push(...answer.payloads);
    event.target.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    if (this.store.payloads.length === answer.max) {
      event.target.disabled = true;
    }
  }
  toggleFilter() {
    this.store.showFilter = !this.store.showFilter
  }
  searchChange(event) {
    this.store.search = event.detail.value;
    this.loadFirst();
  }
}
