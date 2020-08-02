import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaunchLibraryService } from '../launch-library.service';
import { AstronautParamStoreService } from './astronaut-param-store.service';


@Component({
  selector: 'app-astronaut-overview',
  templateUrl: './astronaut-overview.page.html',
  styleUrls: ['./astronaut-overview.page.scss'],
})
export class AstronautOverviewPage implements OnInit {
  title = 'Astronauts';
  constructor(private activatedRoute: ActivatedRoute, private service: LaunchLibraryService, public store: AstronautParamStoreService) { }

  ngOnInit() {
    if (this.store.astronauts.length === 0) {
      this.loadFirst();
    }
  }
  async loadFirst() {
    this.store.astronauts = [];
    this.store.astronauts = (await this.service.getFirstAstronauts(this.store.search, this.store.status)).astronauts;
  }

  async loadMore(event) {
    const answer = await this.service.getNextAstronauts(this.store.astronauts.length, this.store.search, this.store.status);
    this.store.astronauts.push(...answer.astronauts);
    event.target.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    if (this.store.astronauts.length === answer.max) {
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
