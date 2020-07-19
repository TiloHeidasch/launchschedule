import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaunchLibraryService } from '../launch-library.service';


@Component({
  selector: 'app-pad-overview',
  templateUrl: './pad-overview.page.html',
  styleUrls: ['./pad-overview.page.scss'],
})
export class PadOverviewPage implements OnInit {
  title = 'Pads';
  pads: any[] = [];
  constructor(private activatedRoute: ActivatedRoute, private service: LaunchLibraryService) { }
  search: string;
  startDate: Date;
  endDate: Date;
  padId: number;
  locationId: number;
  rocketId: number;

  showFilter: boolean = false;

  ngOnInit() {
    this.loadFirst();
  }
  async loadFirst() {
    this.pads = [];
    this.pads = (await this.service.getFirstPads(this.search, this.startDate, this.endDate, this.padId, this.locationId, this.rocketId, this.padId)).pads;
  }

  async loadMore(event) {
    const answer = await this.service.getNextPads(this.pads.length, this.search, this.startDate, this.endDate, this.padId, this.locationId, this.rocketId, this.padId);
    this.pads.push(...answer.pads);
    event.target.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    if (this.pads.length === answer.max) {
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
