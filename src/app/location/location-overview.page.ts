import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LaunchLibraryService } from "../launch-library.service";
import { LocationParamStoreService } from "./location-param-store.service";
import { IonContent, ViewDidEnter, IonInfiniteScroll } from "@ionic/angular";
import { CountryCode } from "../types/country-codes";

@Component({
  selector: "app-location-overview",
  templateUrl: "./location-overview.page.html",
  styleUrls: ["./location-overview.page.scss"],
})
export class LocationOverviewPage implements OnInit, ViewDidEnter {
  title = "Facilities";
  @ViewChild("locationOverviewContent") content: IonContent;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  CountryCode = CountryCode;
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: LaunchLibraryService,
    public store: LocationParamStoreService
  ) {}

  ngOnInit() {
    if (this.store.locations.length === 0) {
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
    this.store.locations = [];
    this.store.locations = (await this.service.getFirstLocations(
      this.store.search,
      this.store.countryCode
    )).locations;
  }

  async loadMore(event) {
    const answer = await this.service.getNextLocations(
      this.store.locations.length,
      this.store.search,
      this.store.countryCode
    );
    this.store.locations.push(...answer.locations);
    event.target.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    if (this.store.locations.length === answer.max) {
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
