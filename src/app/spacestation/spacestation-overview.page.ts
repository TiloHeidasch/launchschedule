import { Component, OnInit, ViewChild } from "@angular/core";
import { SpacestationParamStoreService } from "./spacestation-param-store.service";
import { IonContent, ViewDidEnter, IonInfiniteScroll } from "@ionic/angular";
import { SpacestationService } from "./spacestation.service";

@Component({
  selector: "app-spacestation-overview",
  templateUrl: "./spacestation-overview.page.html",
  styleUrls: ["./spacestation-overview.page.scss"],
})
export class SpacestationOverviewPage implements OnInit, ViewDidEnter {
  title = "Spacestations";
  @ViewChild("spacestationOverviewContent") content: IonContent;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(
    private service: SpacestationService,
    public store: SpacestationParamStoreService
  ) {}

  ngOnInit() {
    if (this.store.spacestations.length === 0) {
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
    this.store.spacestations = [];
    this.store.spacestations = (

      await this.service.getFirstSpacestations(
          this.store.search,
          this.store.status,
          this.store.orbit,
          this.store.type
        )

    ).spacestations;
    if (refreshEvent) {
      refreshEvent.target.complete();
    }
  }

  async loadMore(event) {
    const answer = await this.service.getNextSpacestations(
      this.store.spacestations.length,
      this.store.search,
      this.store.status,
      this.store.orbit,
      this.store.type
    );
    this.store.spacestations.push(...answer.spacestations);
    event.target.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    if (this.store.spacestations.length === answer.max) {
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
