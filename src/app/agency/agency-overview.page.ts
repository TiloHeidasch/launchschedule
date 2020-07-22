import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaunchLibraryService } from '../launch-library.service';
import { AgencyParamStoreService } from './agency-param-store.service';


@Component({
  selector: 'app-agency-overview',
  templateUrl: './agency-overview.page.html',
  styleUrls: ['./agency-overview.page.scss'],
})
export class AgencyOverviewPage implements OnInit {
  title = 'Agencies';
  agencies: any[] = [];
  constructor(private activatedRoute: ActivatedRoute, private service: LaunchLibraryService, public store: AgencyParamStoreService) { }

  ngOnInit() {
    this.loadFirst();
  }
  async loadFirst() {
    this.agencies = [];
    this.agencies = (await this.service.getFirstAgencies(this.store.search, this.store.startDate, this.store.endDate, this.store.padId, this.store.locationId, this.store.rocketId, this.store.agencyId)).agencies;
  }

  async loadMore(event) {
    const answer = await this.service.getNextAgencies(this.agencies.length, this.store.search, this.store.startDate, this.store.endDate, this.store.padId, this.store.locationId, this.store.rocketId, this.store.agencyId);
    this.agencies.push(...answer.agencies);
    event.target.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    if (this.agencies.length === answer.max) {
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
