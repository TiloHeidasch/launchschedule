import { Component, OnInit, ViewChild } from "@angular/core";
import { NewsParamStoreService } from "./news-param-store.service";
import { IonInfiniteScroll, ViewWillLeave } from "@ionic/angular";

@Component({
  selector: "app-news-overview",
  templateUrl: "./news-overview.page.html",
  styleUrls: ["./news-overview.page.scss"],
})
export class NewsOverviewPage implements OnInit, ViewWillLeave {
  title = "News";
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(public store: NewsParamStoreService) {}
  ngOnInit() {
    this.store.getUnreadArticles();
    this.store.getUnreadBlogs();
  }
  ionViewWillLeave() {
    this.store.persistArticleReadNumbers();
    this.store.persistBlogReadNumbers();
  }
  toggleFilter() {
    this.store.showFilter = !this.store.showFilter;
  }
  searchChange(event) {
    this.store.search = event.detail.value;
  }
  tabChange(event) {
    switch (event.tab) {
      case "article":
        this.store.persistBlogReadNumbers();
        break;
      case "blog":
        this.store.persistArticleReadNumbers();
        break;
      default:
        break;
    }
  }
}
