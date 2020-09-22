import { Injectable } from "@angular/core";
import { Plugins } from "@capacitor/core";
import { StorageService } from "../storage.service";
const { Storage } = Plugins;
const key = "ClickedNewsItems";
@Injectable({
  providedIn: "root",
})
export class NewsStorageService {
  constructor(private storage: StorageService) {}

  async markClicked(newsItem) {
    let clickedNewsItemIds: any[] = await this.storage.getObject(key);
    if (!clickedNewsItemIds) {
      clickedNewsItemIds = [];
      await this.storage.setObject(key, clickedNewsItemIds);
    }
    const clickedNewsItem = clickedNewsItemIds.find(
      (clickedNewsItemId) => clickedNewsItemId === newsItem._id
    );
    if (clickedNewsItem) {
      return;
    }
    clickedNewsItemIds.push(newsItem._id);
    await this.storage.setObject(key, clickedNewsItemIds);
  }
  async isClicked(newsItem): Promise<boolean> {
    const clickedNewsItemIds: any[] = await this.storage.getObject(key);
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
}
