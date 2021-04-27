import { Component, OnInit, ViewChild } from "@angular/core";
import { IonContent, IonInfiniteScroll, ViewDidEnter } from "@ionic/angular";
import { StarshipParamStoreService } from "../starship-param-store.service";

@Component({
  selector: "app-overview",
  templateUrl: "./overview.page.html",
  styleUrls: ["./overview.page.scss"],
})
export class OverviewPage implements OnInit, ViewDidEnter {
  @ViewChild("overviewContent") content: IonContent;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(public store: StarshipParamStoreService) {}
  nextLaunch;
  nextEvent;

  ionViewDidEnter() {
    this.content.scrollToPoint(0, this.store.overviewScrollY, 250);
  }
  logScrolling(event) {
    this.store.overviewScrollY = event.detail.currentY;
  }

  ngOnInit() {
    this.determineNextUpcoming();
  }

  private determineNextUpcoming() {
    if (
      this.store.dashboard.upcoming.launches.length > 0 ||
      this.store.dashboard.upcoming.events.length > 0
    ) {
      const launch = this.store.dashboard.upcoming.launches[0];
      const event = this.store.dashboard.upcoming.events[0];
      const nextLaunchDate = launch ? new Date(launch.net) : new Date(0);
      const nextEventDate = event ? new Date(event.date) : new Date(0);
      if (nextLaunchDate.getTime() > nextEventDate.getTime()) {
        this.nextLaunch = launch;
        this.nextEvent = undefined;
      } else if (nextLaunchDate.getTime() < nextEventDate.getTime()) {
        this.nextLaunch = undefined;
        this.nextEvent = event;
      }
    }
  }
}
