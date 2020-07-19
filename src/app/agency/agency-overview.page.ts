import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaunchLibraryService } from '../launch-library.service';


@Component({
  selector: 'app-agency-overview',
  templateUrl: './agency-overview.page.html',
  styleUrls: ['./agency-overview.page.scss'],
})
export class AgencyOverviewPage implements OnInit {
  title = 'Agencies';
  agencies: any[] = [];
  constructor(private activatedRoute: ActivatedRoute, private service: LaunchLibraryService) { }
  search: string;
  startDate: Date;
  endDate: Date;
  padId: number;
  locationId: number;
  rocketId: number;
  agencyId: number;

  showFilter: boolean = false;

  ngOnInit() {
    this.loadFirst();
  }
  async loadFirst() {
    this.agencies = [];
    this.agencies = (await this.service.getFirstAgencies(this.search, this.startDate, this.endDate, this.padId, this.locationId, this.rocketId, this.agencyId)).agencies;
  }

  async loadMore(event) {
    const answer = await this.service.getNextAgencies(this.agencies.length, this.search, this.startDate, this.endDate, this.padId, this.locationId, this.rocketId, this.agencyId);
    this.agencies.push(...answer.agencies);
    event.target.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    if (this.agencies.length === answer.max) {
      event.target.disabled = true;
    }
  }
  toggleFilter() {
    this.showFilter = !this.showFilter
  }
  searchChange(event) {
    this.search = event.detail.value;
    this.loadFirst();
  }
}
