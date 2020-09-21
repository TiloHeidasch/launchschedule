import { Component, OnInit, ViewChild } from "@angular/core";
import { NewsParamStoreService } from "./news-param-store.service";
import { CountryCode } from "../types/country-codes";
import { IonContent, ViewDidEnter, IonInfiniteScroll } from "@ionic/angular";
import { SnapiService } from "../snapi.service";

@Component({
  selector: "app-news-overview",
  templateUrl: "./news-overview.page.html",
  styleUrls: ["./news-overview.page.scss"],
})
export class NewsOverviewPage implements OnInit {
  title = "News";
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(
    private service: SnapiService,
    public store: NewsParamStoreService
  ) {}
  ngOnInit() {}
  toggleFilter() {
    this.store.showFilter = !this.store.showFilter;
  }
  searchChange(event) {
    this.store.search = event.detail.value;
  }
}
