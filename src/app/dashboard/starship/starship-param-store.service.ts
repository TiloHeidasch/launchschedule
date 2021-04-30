import { Injectable } from "@angular/core";
import { LaunchLibraryService } from "src/app/launch-library.service";

@Injectable({
  providedIn: "root",
})
export class StarshipParamStoreService {
  showFilter = false;
  dashboard;
  overviewScrollY = 0;
  previousScrollY = 0;
  eventLaunchArray: { date: Date; event?; launch? }[] = [];

  constructor(private service: LaunchLibraryService) {}

  async loadDashboard(event?) {
    this.dashboard = await this.service.getStarshipDashboard();
    if (event) {
      event.target.complete();
    }
    this.combinePrevious();
  }
  combinePrevious() {
    this.eventLaunchArray = [];
    this.dashboard.previous.launches.forEach((launch) => {
      this.eventLaunchArray.push({ date: new Date(launch.net), launch });
    });
    this.dashboard.previous.events.forEach((event) => {
      this.eventLaunchArray.push({ date: new Date(event.date), event });
    });
    this.eventLaunchArray = this.eventLaunchArray.sort(
      (el1, el2) => el2.date.getTime() - el1.date.getTime()
    );
  }
}
