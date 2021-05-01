import { Component, OnInit, ViewChild } from "@angular/core";
import { RocketParamStoreService } from "./rocket-param-store.service";
import { IonContent, ViewDidEnter, IonInfiniteScroll } from "@ionic/angular";
import { RocketService } from "../masterdata/rocket.service";

@Component({
  selector: "app-rocket-overview",
  templateUrl: "./rocket-overview.page.html",
  styleUrls: ["./rocket-overview.page.scss"],
})
export class RocketOverviewPage implements OnInit, ViewDidEnter {
  title = "Rockets";
  @ViewChild("rocketOverviewContent") content: IonContent;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(
    private service: RocketService,
    public store: RocketParamStoreService
  ) {}

  ngOnInit() {
    if (this.store.rockets.length === 0) {
      this.loadFirst();
    }
  }
  ionViewDidEnter() {
    this.content.scrollToPoint(0, this.store.scrollY, 250);
  }
  logScrolling(event) {
    this.store.scrollY = event.detail.currentY;
  }
  async loadFirst(refreshEvent?) {
    try {
      this.infiniteScroll.disabled = false;
    } catch (error) {}
    this.store.rockets = [];
    const answer = await this.service.getFirstRockets(
      this.store.search
    );
    this.store.rockets = answer.rockets;
    if (refreshEvent) {
      refreshEvent.target.complete();
    }
  }

  async loadMore(event) {
    const answer = await this.service.getNextRockets(
      this.store.rockets.length,
      this.store.search
    );
    this.store.rockets.push(...answer.rockets);
    event.target.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    if (this.store.rockets.length === answer.max) {
      event.target.disabled = true;
    }
  }
  toggleFilter() {
    this.store.showFilter = !this.store.showFilter;
  }
  searchChange(event) {
    this.store.search = event.detail.value;
    this.loadFirst();
  }
}
