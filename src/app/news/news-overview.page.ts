import { Component, ViewChild, ChangeDetectionStrategy } from "@angular/core";
import { NewsParamStoreService } from "./news-param-store.service";
import { IonInfiniteScroll } from "@ionic/angular";

@Component({
  selector: "app-news-overview",
  standalone: false,
  templateUrl: "./news-overview.page.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["./news-overview.page.scss"],
})
export class NewsOverviewPage {
  title = "News";
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(public store: NewsParamStoreService) {}
}
