import { Component, OnInit, ViewChild } from "@angular/core";
import { AstronautParamStoreService } from "./astronaut-param-store.service";
import { IonContent, ViewDidEnter, IonInfiniteScroll } from "@ionic/angular";
import { AstronautService } from "../masterdata/astronaut.service";

@Component({
  selector: "app-astronaut-overview",
  templateUrl: "./astronaut-overview.page.html",
  styleUrls: ["./astronaut-overview.page.scss"],
})
export class AstronautOverviewPage implements OnInit, ViewDidEnter {
  title = "Astronauts";
  @ViewChild("astronautOverviewContent") content: IonContent;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(
    private service: AstronautService,
    public store: AstronautParamStoreService
  ) {}

  ngOnInit() {
    if (this.store.astronauts.length === 0) {
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
    this.store.astronauts = [];
    this.store.astronauts = (

      await this.service.getFirstAstronauts(
          this.store.search,
          this.store.status
        )

    ).astronauts;
    if (refreshEvent) {
      refreshEvent.target.complete();
    }
  }

  async loadMore(event) {
    const answer = await this.service.getNextAstronauts(
      this.store.astronauts.length,
      this.store.search,
      this.store.status
    );
    this.store.astronauts.push(...answer.astronauts);
    event.target.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    if (this.store.astronauts.length === answer.max) {
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
