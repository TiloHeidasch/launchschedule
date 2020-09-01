import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LaunchLibraryService } from "../launch-library.service";
import { PadParamStoreService } from "./pad-param-store.service";
import { IonContent, ViewDidEnter, IonInfiniteScroll } from "@ionic/angular";

@Component({
  selector: "app-pad-overview",
  templateUrl: "./pad-overview.page.html",
  styleUrls: ["./pad-overview.page.scss"],
})
export class PadOverviewPage implements OnInit, ViewDidEnter {
  title = "Pads";
  @ViewChild("padOverviewContent") content: IonContent;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: LaunchLibraryService,
    public store: PadParamStoreService
  ) {}

  ngOnInit() {
    if (this.store.pads.length === 0) {
      this.loadFirst();
    }
  }
  ionViewDidEnter() {
    this.content.scrollToPoint(0, this.store.scrollY, 250);
  }
  logScrolling(event) {
    this.store.scrollY = event.detail.currentY;
  }
  async loadFirst() {
    try {
      this.infiniteScroll.disabled = false;
    } catch (error) {}
    this.store.pads = [];
    this.store.pads = (await this.service.getFirstPads(this.store.search)).pads;
  }

  async loadMore(event) {
    const answer = await this.service.getNextPads(
      this.store.pads.length,
      this.store.search
    );
    this.store.pads.push(...answer.pads);
    event.target.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    if (this.store.pads.length === answer.max) {
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
