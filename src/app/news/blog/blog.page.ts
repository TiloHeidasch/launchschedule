import { Component, OnInit, ViewChild } from "@angular/core";
import {
  IonContent,
  IonInfiniteScroll,
  ViewDidEnter,
  ViewDidLeave,
} from "@ionic/angular";
import { SnapiService } from "src/app/snapi.service";
import { NewsParamStoreService } from "../news-param-store.service";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.page.html",
  styleUrls: ["./blog.page.scss"],
})
export class BlogPage implements OnInit, ViewDidEnter {
  @ViewChild("blogContent") content: IonContent;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(
    private service: SnapiService,
    public store: NewsParamStoreService
  ) {}
  ionViewDidEnter() {
    this.content.scrollToPoint(0, this.store.blogScrollY, 250);
  }
  logScrolling(event) {
    this.store.blogScrollY = event.detail.currentY;
  }

  ngOnInit() {
    console.log("Blog entered");
    if (this.store.blogs.length === 0) {
      this.loadFirst();
    }
    console.log(this.store.blogs);
  }
  async loadFirst(refreshEvent?) {
    try {
      this.infiniteScroll.disabled = false;
    } catch (error) {}
    this.store.blogs = [];
    const answerBlogs = await this.service.getFirstBlogs(this.store.search);
    this.store.readBlogs = answerBlogs.max;
    const newBlogs = answerBlogs.newsItems;
    this.store.blogs.push(...newBlogs);
    if (refreshEvent) {
      refreshEvent.target.complete();
    }
  }

  async loadMore(event) {
    const answerBlogs = await this.service.getNextBlogs(
      this.store.blogs.length,
      this.store.search
    );
    const newBlogs = answerBlogs.newsItems;
    this.store.blogs.push(...newBlogs);
    event.target.complete();
    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    if (this.store.blogs.length === answerBlogs.max) {
      event.target.disabled = true;
    }
  }
}
