import { Component, OnInit, ViewChild } from "@angular/core";
import { LaunchLibraryService } from "../launch-library.service";
import { SpacecraftParamStoreService } from "./spacecraft-param-store.service";
import { IonContent, ViewDidEnter, IonInfiniteScroll } from "@ionic/angular";

@Component({
  selector: "app-spacecraft-overview",
  templateUrl: "./spacecraft-overview.page.html",
  styleUrls: ["./spacecraft-overview.page.scss"],
})
export class SpacecraftOverviewPage implements OnInit, ViewDidEnter {
  title = "Spacecrafts";
  @ViewChild("spacecraftOverviewContent") content: IonContent;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(
    private service: LaunchLibraryService,
    public store: SpacecraftParamStoreService
  ) {}

  ngOnInit() {
    if (this.store.spacecrafts.length === 0) {
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
    this.store.spacecrafts = [];
    this.store.spacecrafts = (await this.service.getFirstSpacecrafts(
      this.store.search,
      this.store.inUse,
      this.store.humanRated
    )).spacecrafts;
    if (refreshEvent) {
      refreshEvent.target.complete();
    }
  }

  async loadMore(event) {
    const answer = await this.service.getNextSpacecrafts(
      this.store.spacecrafts.length,
      this.store.search,
      this.store.inUse,
      this.store.humanRated
    );
    this.store.spacecrafts.push(...answer.spacecrafts);
    event.target.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    if (this.store.spacecrafts.length === answer.max) {
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
