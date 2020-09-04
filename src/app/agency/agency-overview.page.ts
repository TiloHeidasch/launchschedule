import { Component, OnInit, ViewChild } from "@angular/core";
import { LaunchLibraryService } from "../launch-library.service";
import { AgencyParamStoreService } from "./agency-param-store.service";
import { CountryCode } from "../types/country-codes";
import { IonContent, ViewDidEnter, IonInfiniteScroll } from "@ionic/angular";

@Component({
  selector: "app-agency-overview",
  templateUrl: "./agency-overview.page.html",
  styleUrls: ["./agency-overview.page.scss"],
})
export class AgencyOverviewPage implements OnInit, ViewDidEnter {
  title = "Agencies";
  @ViewChild("agencyOverviewContent") content: IonContent;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  CountryCode = CountryCode;
  constructor(
    private service: LaunchLibraryService,
    public store: AgencyParamStoreService
  ) {}
  ngOnInit() {
    if (this.store.agencies.length === 0) {
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
    this.store.agencies = [];
    this.store.agencies = (await this.service.getFirstAgencies(
      this.store.search,
      this.store.featured,
      this.store.type,
      this.store.countryCode
    )).agencies;
    if (refreshEvent) {
      refreshEvent.target.complete();
    }
  }

  async loadMore(event) {
    const answer = await this.service.getNextAgencies(
      this.store.agencies.length,
      this.store.search,
      this.store.featured,
      this.store.type,
      this.store.countryCode
    );
    this.store.agencies.push(...answer.agencies);
    event.target.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    if (this.store.agencies.length === answer.max) {
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
