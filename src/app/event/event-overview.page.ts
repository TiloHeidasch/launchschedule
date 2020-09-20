import { Component, OnInit, ViewChild } from "@angular/core";
import { LaunchLibraryService } from "../launch-library.service";
import { EventParamStoreService } from "./event-param-store.service";
import { IonContent, ViewDidEnter, IonInfiniteScroll } from "@ionic/angular";

@Component({
  selector: "app-event-overview",
  templateUrl: "./event-overview.page.html",
  styleUrls: ["./event-overview.page.scss"],
})
export class EventOverviewPage implements OnInit, ViewDidEnter {
  title = "Events";
  @ViewChild("eventOverviewContent") content: IonContent;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(
    private service: LaunchLibraryService,
    public store: EventParamStoreService
  ) {}

  ngOnInit() {
    if (this.store.events.length === 0) {
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
    this.store.events = [];
    this.store.events = (await this.service.getFirstEvents(
      this.store.search,
      this.store.type,
      this.store.upcomingPreviousAll
    )).events;
    if (refreshEvent) {
      refreshEvent.target.complete();
    }
  }

  async loadMore(event) {
    const answer = await this.service.getNextEvents(
      this.store.events.length,
      this.store.search,
      this.store.type,
      this.store.upcomingPreviousAll
    );
    this.store.events.push(...answer.events);
    event.target.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    if (this.store.events.length === answer.max) {
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
