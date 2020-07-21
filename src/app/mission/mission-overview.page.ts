import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaunchLibraryService } from '../launch-library.service';
import { MissionParamStoreService } from './mission-param-store.service';


@Component({
  selector: 'app-mission-overview',
  templateUrl: './mission-overview.page.html',
  styleUrls: ['./mission-overview.page.scss'],
})
export class MissionOverviewPage implements OnInit {
  title = 'Missions';
  missions: any[] = [];
  constructor(private activatedRoute: ActivatedRoute, private service: LaunchLibraryService, private store: MissionParamStoreService) { }

  ngOnInit() {
    this.loadFirst();
  }
  async loadFirst() {
    this.missions = [];
    this.missions = (await this.service.getFirstMissions(this.store.search, this.store.startDate, this.store.endDate, this.store.padId, this.store.locationId, this.store.rocketId, this.store.missionId)).missions;
  }

  async loadMore(event) {
    const answer = await this.service.getNextMissions(this.missions.length, this.store.search, this.store.startDate, this.store.endDate, this.store.padId, this.store.locationId, this.store.rocketId, this.store.missionId);
    this.missions.push(...answer.missions);
    event.target.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    if (this.missions.length === answer.max) {
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
