import { Component, OnInit, ViewChild } from "@angular/core";
import { PadParamStoreService } from "./pad-param-store.service";
import { IonContent, ViewDidEnter, IonInfiniteScroll } from "@ionic/angular";
import { PadService } from "../masterdata/pad.service";

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
    private service: PadService,
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
  async loadFirst(refreshEvent?) {
    try {
      this.infiniteScroll.disabled = false;
    } catch (error) {}
    this.store.pads = [];
    this.store.pads = (await this.service.getFirstPads(this.store.search)).pads;
    if (refreshEvent) {
      refreshEvent.target.complete();
    }
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
