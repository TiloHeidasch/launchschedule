import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaunchLibraryService } from '../launch-library.service';


@Component({
  selector: 'app-launch-overview',
  templateUrl: './launch-overview.page.html',
  styleUrls: ['./launch-overview.page.scss'],
})
export class LaunchOverviewPage implements OnInit {
  title = 'Launches';
  launches: any[] = [];
  constructor(private activatedRoute: ActivatedRoute, private service: LaunchLibraryService) {
    this.setStartToToday();
    this.setEndToInf();
  }
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
    this.launches = [];
    this.launches = (await this.service.getFirstLaunches(this.search, this.startDate, this.endDate, this.padId, this.locationId, this.rocketId, this.agencyId)).launches;
  }

  async loadMore(event) {
    const answer = await this.service.getNextLaunches(this.launches.length, this.search, this.startDate, this.endDate, this.padId, this.locationId, this.rocketId, this.agencyId);
    this.launches.push(...answer.launches);
    event.target.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    if (this.launches.length === answer.max) {
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
  startChange(event) {
    this.startDate = new Date(event.detail.value);
    this.loadFirst();
  }
  startClear() {
    this.startDate = new Date('1950-01-01');
    this.loadFirst();
  }
  startToday() {
    this.setStartToToday();
    this.loadFirst();
  }
  endChange(event) {
    this.endDate = new Date(event.detail.value);
    this.loadFirst();
  }
  endClear() {
    this.setEndToInf();
    this.loadFirst();
  }
  endToday() {
    this.endDate = new Date(new Date().toISOString().split('T')[0]);
    this.loadFirst();
  }
  private setStartToToday() {
    this.startDate = new Date(new Date().toISOString().split('T')[0]);
  }
  private setEndToInf() {
    this.endDate = new Date('2050-12-31');
  }
}
