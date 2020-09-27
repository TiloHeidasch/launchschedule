import { Injectable } from "@angular/core";
import { SnapiService } from "../snapi.service";
import { NewsStorageService } from "./news-storage.service";

@Injectable({
  providedIn: "root",
})
export class NewsParamStoreService {
  search: string;
  showFilter = false;
  blogs: any[] = [];
  articles: any[] = [];
  blogScrollY = 0;
  articleScrollY = 0;
  unreadBlogs = 0;
  readBlogs = 0;
  unreadArticles = 0;
  readArticles = 0;
  constructor(
    private storage: NewsStorageService,
    private snapi: SnapiService
  ) {}
  async getUnreadBlogs() {
    const readBlogs = await this.storage.getBlogReadNumber();
    const currentBlogNumber: number = await (await this.snapi.getFirstBlogs(""))
      .max;
    this.unreadBlogs = currentBlogNumber - readBlogs;
  }
  async getUnreadArticles() {
    const readArticles = await this.storage.getArticleReadNumber();
    const currentArticleNumber: number = await (await this.snapi.getFirstArticles(
      ""
    )).max;
    this.unreadArticles = currentArticleNumber - readArticles;
  }
  persistBlogReadNumbers() {
    if (this.readBlogs > 0) {
      this.storage.setBlogReadNumber(this.readBlogs);
      this.unreadBlogs = 0;
    }
  }
  persistArticleReadNumbers() {
    if (this.readArticles > 0) {
      this.storage.setArticleReadNumber(this.readArticles);
      this.unreadArticles = 0;
    }
  }
}
