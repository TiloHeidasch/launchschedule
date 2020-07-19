import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaunchLibraryService } from '../launch-library.service';


@Component({
  selector: 'app-rocket-overview',
  templateUrl: './rocket-overview.page.html',
  styleUrls: ['./rocket-overview.page.scss'],
})
export class RocketOverviewPage implements OnInit {
  title = 'Rockets';
  rockets: any[] = [];
  constructor(private activatedRoute: ActivatedRoute, private service: LaunchLibraryService) { }
  search: string;
  padId: number;
  locationId: number;
  rocketId: number;
  agencyId: number;

  showFilter: boolean = false;

  ngOnInit() {
    this.loadFirst();
  }
  async loadFirst() {
    this.rockets = [];
    const answer = await this.service.getFirstRockets(this.search, undefined, undefined, this.padId, this.locationId, this.rocketId, this.agencyId);
    this.rockets = answer.rockets;
  }

  async loadMore(event) {
    const answer = await this.service.getNextRockets(this.rockets.length, this.search, undefined, undefined, this.padId, this.locationId, this.rocketId, this.agencyId);
    this.rockets.push(...answer.rockets);
    event.target.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    if (this.rockets.length === answer.max) {
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
