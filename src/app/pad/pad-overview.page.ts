import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaunchLibraryService } from '../launch-library.service';
import { PadParamStoreService } from './pad-param-store.service';


@Component({
  selector: 'app-pad-overview',
  templateUrl: './pad-overview.page.html',
  styleUrls: ['./pad-overview.page.scss'],
})
export class PadOverviewPage implements OnInit {
  title = 'Pads';
  pads: any[] = [];
  constructor(private activatedRoute: ActivatedRoute, private service: LaunchLibraryService, private store: PadParamStoreService) { }

  ngOnInit() {
    this.loadFirst();
  }
  async loadFirst() {
    this.pads = [];
    this.pads = (await this.service.getFirstPads(this.store.search, this.store.startDate, this.store.endDate, this.store.padId, this.store.locationId, this.store.rocketId, this.store.padId)).pads;
  }

  async loadMore(event) {
    const answer = await this.service.getNextPads(this.pads.length, this.store.search, this.store.startDate, this.store.endDate, this.store.padId, this.store.locationId, this.store.rocketId, this.store.padId);
    this.pads.push(...answer.pads);
    event.target.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    if (this.pads.length === answer.max) {
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
