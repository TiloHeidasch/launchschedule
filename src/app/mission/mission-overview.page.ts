import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaunchLibraryService } from '../launch-library.service';


@Component({
  selector: 'app-mission-overview',
  templateUrl: './mission-overview.page.html',
  styleUrls: ['./mission-overview.page.scss'],
})
export class MissionOverviewPage implements OnInit {
  title = 'Missions';
  missions: any[] = [];
  constructor(private activatedRoute: ActivatedRoute, private service: LaunchLibraryService) { }
  search: string;
  startDate: Date;
  endDate: Date;
  padId: number;
  locationId: number;
  rocketId: number;
  missionId: number;

  showFilter: boolean = false;

  ngOnInit() {
    this.loadFirst();
  }
  async loadFirst() {
    this.missions = [];
    this.missions = (await this.service.getFirstMissions(this.search, this.startDate, this.endDate, this.padId, this.locationId, this.rocketId, this.missionId)).missions;
  }

  async loadMore(event) {
    const answer = await this.service.getNextMissions(this.missions.length, this.search, this.startDate, this.endDate, this.padId, this.locationId, this.rocketId, this.missionId);
    this.missions.push(...answer.missions);
    event.target.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    if (this.missions.length === answer.max) {
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
