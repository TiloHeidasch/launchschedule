import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaunchLibraryService } from '../launch-library.service';
import { EventParamStoreService } from './event-param-store.service';


@Component({
  selector: 'app-event-overview',
  templateUrl: './event-overview.page.html',
  styleUrls: ['./event-overview.page.scss'],
})
export class EventOverviewPage implements OnInit {
  title = 'Events';
  constructor(private activatedRoute: ActivatedRoute, private service: LaunchLibraryService, public store: EventParamStoreService) { }

  ngOnInit() {
    if (this.store.events.length === 0) {
      this.loadFirst();
    }
  }
  async loadFirst() {
    this.store.events = [];
    this.store.events = (await this.service.getFirstEvents(this.store.search, this.store.status)).events;
  }

  async loadMore(event) {
    const answer = await this.service.getNextEvents(this.store.events.length, this.store.search, this.store.status);
    this.store.events.push(...answer.events);
    event.target.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    if (this.store.events.length === answer.max) {
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
