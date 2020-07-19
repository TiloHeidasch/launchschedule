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
  constructor(private activatedRoute: ActivatedRoute, private service: LaunchLibraryService) { }
  search: string;
  startDate: Date = new Date();
  endDate: Date;
  padId: number;
  locationId: number;
  rocketId: number;
  agencyId: number;

  ngOnInit() {
    this.loadFirst();
  }
  async loadFirst() {
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
}
