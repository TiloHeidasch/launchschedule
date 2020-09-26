import { Injectable } from "@angular/core";
import { Plugins } from "@capacitor/core";
import { StorageService } from "../storage.service";
const { Storage } = Plugins;
const keyClicked = "ClickedNewsItems";
const keyBlogReadNumber = "BlogReadNumber";
const keyArticleReadNumber = "ArticleReadNumber";
@Injectable({
  providedIn: "root",
})
export class NewsStorageService {
  constructor(private storage: StorageService) {}

  async markClicked(newsItem) {
    let clickedNewsItemIds: any[] = await this.storage.getObject(keyClicked);
    if (!clickedNewsItemIds) {
      clickedNewsItemIds = [];
      await this.storage.setObject(keyClicked, clickedNewsItemIds);
    }
    const clickedNewsItem = clickedNewsItemIds.find(
      (clickedNewsItemId) => clickedNewsItemId === newsItem._id
    );
    if (clickedNewsItem) {
      return;
    }
    clickedNewsItemIds.push(newsItem._id);
    await this.storage.setObject(keyClicked, clickedNewsItemIds);
  }
  async isClicked(newsItem): Promise<boolean> {
    const clickedNewsItemIds: any[] = await this.storage.getObject(keyClicked);
    if (!clickedNewsItemIds) {
      return false;
    }
    const clickedNewsItem = clickedNewsItemIds.find(
      (clickedNewsItemId) => clickedNewsItemId === newsItem._id
    );
    if (clickedNewsItem) {
      return true;
    }
    return false;
  }
  async getBlogReadNumber(): Promise<number> {
    return +(await this.storage.getItem(keyBlogReadNumber));
  }
  async setBlogReadNumber(n: number) {
    await this.storage.setItem(keyBlogReadNumber, n + "");
  }
  async getArticleReadNumber(): Promise<number> {
    return +(await this.storage.getItem(keyArticleReadNumber));
  }
  async setArticleReadNumber(n: number) {
    await this.storage.setItem(keyArticleReadNumber, n + "");
  }
}
