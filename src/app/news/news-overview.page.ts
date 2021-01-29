import { Component, OnInit, ViewChild } from "@angular/core";
import { NewsParamStoreService } from "./news-param-store.service";
import { IonInfiniteScroll, ViewWillLeave } from "@ionic/angular";

@Component({
  selector: "app-news-overview",
  templateUrl: "./news-overview.page.html",
  styleUrls: ["./news-overview.page.scss"],
})
export class NewsOverviewPage {
  title = "News";
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(public store: NewsParamStoreService) {}
}
