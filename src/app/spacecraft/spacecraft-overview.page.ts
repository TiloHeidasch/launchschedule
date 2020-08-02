import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaunchLibraryService } from '../launch-library.service';
import { SpacecraftParamStoreService } from './spacecraft-param-store.service';


@Component({
  selector: 'app-spacecraft-overview',
  templateUrl: './spacecraft-overview.page.html',
  styleUrls: ['./spacecraft-overview.page.scss'],
})
export class SpacecraftOverviewPage implements OnInit {
  title = 'Spacecrafts';
  constructor(private activatedRoute: ActivatedRoute, private service: LaunchLibraryService, public store: SpacecraftParamStoreService) { }

  ngOnInit() {
    if (this.store.spacecrafts.length === 0) {
      this.loadFirst();
    }
  }
  async loadFirst() {
    this.store.spacecrafts = [];
    this.store.spacecrafts = (await this.service.getFirstSpacecrafts(this.store.search, this.store.status)).spacecrafts;
  }

  async loadMore(event) {
    const answer = await this.service.getNextSpacecrafts(this.store.spacecrafts.length, this.store.search, this.store.status);
    this.store.spacecrafts.push(...answer.spacecrafts);
    event.target.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    if (this.store.spacecrafts.length === answer.max) {
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
