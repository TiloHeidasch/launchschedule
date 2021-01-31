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
      (clickedNewsItemId) => clickedNewsItemId === newsItem.id
    );
    if (clickedNewsItem) {
      return;
    }
    clickedNewsItemIds.push(newsItem.id);
    await this.storage.setObject(keyClicked, clickedNewsItemIds);
  }
  async isClicked(newsItem): Promise<boolean> {
    const clickedNewsItemIds: any[] = await this.storage.getObject(keyClicked);
    if (!clickedNewsItemIds) {
      return false;
    }
    const clickedNewsItem = clickedNewsItemIds.find(
      (clickedNewsItemId) => clickedNewsItemId === newsItem.id
    );
    if (clickedNewsItem) {
      return true;
    }
    return false;
  }
}
