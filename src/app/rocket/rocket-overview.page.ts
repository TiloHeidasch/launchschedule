import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaunchLibraryService } from '../launch-library.service';
import { RocketParamStoreService } from './rocket-param-store.service';


@Component({
  selector: 'app-rocket-overview',
  templateUrl: './rocket-overview.page.html',
  styleUrls: ['./rocket-overview.page.scss'],
})
export class RocketOverviewPage implements OnInit {
  title = 'Rockets';
  constructor(private activatedRoute: ActivatedRoute, private service: LaunchLibraryService, public store: RocketParamStoreService) { }

  ngOnInit() {
    if (this.store.rockets.length === 0) {
      this.loadFirst();
    }
  }
  async loadFirst() {
    this.store.rockets = [];
    const answer = await this.service.getFirstRockets(this.store.search, this.store.active, this.store.reusable);
    this.store.rockets = answer.rockets;
  }

  async loadMore(event) {
    const answer = await this.service.getNextRockets(this.store.rockets.length, this.store.search, this.store.active, this.store.reusable);
    this.store.rockets.push(...answer.rockets);
    event.target.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    if (this.store.rockets.length === answer.max) {
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
