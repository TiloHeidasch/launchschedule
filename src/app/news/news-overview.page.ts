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
export class NewsOverviewPage implements OnInit, ViewDidEnter {
  title = "News";
  @ViewChild("agencyOverviewContent") content: IonContent;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  CountryCode = CountryCode;
  constructor(
    private service: SnapiService,
    public store: NewsParamStoreService
  ) {}
  ngOnInit() {
    if (this.store.newsItems.length === 0) {
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
    this.store.articles = [];
    this.store.blogs = [];
    this.store.newsItems = [];
    const answerArticles = await this.service.getFirstArticles(
      this.store.search
    );
    const newArticles = answerArticles.newsItems;
    this.store.articles.push(...newArticles);
    const answerBlogs = await this.service.getFirstBlogs(this.store.search);
    const newBlogs = answerBlogs.newsItems;
    this.store.blogs.push(...newBlogs);
    this.mergeNewsItems(newArticles, newBlogs);
    if (refreshEvent) {
      refreshEvent.target.complete();
    }
  }

  async loadMore(event) {
    const answerArticles = await this.service.getNextArticles(
      this.store.articles.length,
      this.store.search
    );
    const newArticles = answerArticles.newsItems;
    this.store.articles.push(...newArticles);
    const answerBlogs = await this.service.getNextBlogs(
      this.store.blogs.length,
      this.store.search
    );
    const newBlogs = answerBlogs.newsItems;
    this.store.blogs.push(...newBlogs);
    this.mergeNewsItems(newArticles, newBlogs);
    event.target.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    if (
      this.store.articles.length === answerArticles.max &&
      this.store.blogs.length === answerBlogs.max
    ) {
      event.target.disabled = true;
    }
  }
  mergeNewsItems(articles, blogs) {
    let newsItems = [];
    const blogNewsItems = this.mapToNewsEntry(blogs, "Blog");
    const articleNewsItems = this.mapToNewsEntry(articles, "Article");
    newsItems.push(...blogNewsItems, ...articleNewsItems);
    newsItems = newsItems.sort(
      (newsItem1, newsItem2) =>
        newsItem2.date_published - newsItem1.date_published
    );
    this.store.newsItems.push(...newsItems);
    console.log({ articles, blogs, newsItems: this.store.newsItems });
  }
  mapToNewsEntry(entries, type) {
    return entries.map((entry) => ({
      title: entry.title,
      news_site_long: entry.news_site_long,
      featured_image: entry.featured_image,
      url: entry.url,
      date_published: entry.date_published,
      tags: entry.tags,
      type,
    }));
  }
  toggleFilter() {
    this.store.showFilter = !this.store.showFilter;
  }
  searchChange(event) {
    this.store.search = event.detail.value;
    this.loadFirst();
  }
}
