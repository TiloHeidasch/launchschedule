import { Component, OnInit, ViewChild } from "@angular/core";
import { IonContent, IonInfiniteScroll, ViewDidEnter } from "@ionic/angular";
import { SnapiService } from "src/app/snapi.service";
import { NewsParamStoreService } from "../news-param-store.service";

@Component({
  selector: "app-article",
  templateUrl: "./article.page.html",
  styleUrls: ["./article.page.scss"],
})
export class ArticlePage implements OnInit, ViewDidEnter {
  @ViewChild("articleContent") content: IonContent;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(
    private service: SnapiService,
    public store: NewsParamStoreService
  ) {}
  ionViewDidEnter() {
    this.content.scrollToPoint(0, this.store.articleScrollY, 250);
  }
  logScrolling(event) {
    this.store.articleScrollY = event.detail.currentY;
  }

  ngOnInit() {
    if (this.store.articles.length === 0) {
      this.loadFirst();
    }
  }
  async loadFirst(refreshEvent?) {
    try {
      this.infiniteScroll.disabled = false;
    } catch (error) {}
    this.store.articles = [];
    const answerArticles = await this.service.getFirstArticles();
    const newArticles = answerArticles.newsItems;
    this.store.articles.push(...newArticles);
    if (refreshEvent) {
      refreshEvent.target.complete();
    }
  }

  async loadMore(event) {
    const answerArticles = await this.service.getNextArticles(
      this.store.articles.length
    );
    const newArticles = answerArticles.newsItems;
    this.store.articles.push(...newArticles);
    event.target.complete();
  }
}
