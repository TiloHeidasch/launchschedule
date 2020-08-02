import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaunchLibraryService } from '../launch-library.service';
import { SpacestationParamStoreService } from './spacestation-param-store.service';


@Component({
  selector: 'app-spacestation-overview',
  templateUrl: './spacestation-overview.page.html',
  styleUrls: ['./spacestation-overview.page.scss'],
})
export class SpacestationOverviewPage implements OnInit {
  title = 'Spacestations';
  constructor(private activatedRoute: ActivatedRoute, private service: LaunchLibraryService, public store: SpacestationParamStoreService) { }

  ngOnInit() {
    if (this.store.spacestations.length === 0) {
      this.loadFirst();
    }
  }
  async loadFirst() {
    this.store.spacestations = [];
    this.store.spacestations = (await this.service.getFirstSpacestations(this.store.search, this.store.status)).spacestations;
  }

  async loadMore(event) {
    const answer = await this.service.getNextSpacestations(this.store.spacestations.length, this.store.search, this.store.status);
    this.store.spacestations.push(...answer.spacestations);
    event.target.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    if (this.store.spacestations.length === answer.max) {
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
