import { Component, OnInit, Input } from "@angular/core";
import { BrowserService } from "src/app/browser.service";
import { PlaceholderService } from "src/app/placeholder.service";
import { NewsStorageService } from "../news-storage.service";

@Component({
  selector: "app-news-list-entry",
  templateUrl: "./news-list-entry.component.html",
  styleUrls: ["./news-list-entry.component.scss"],
})
export class NewsListEntryComponent implements OnInit {
  @Input() newsItem;
  @Input() type;
  title: string;
  subtitle: string;
  content: string;
  clicked = false;
  constructor(
    private browser: BrowserService,
    private storage: NewsStorageService,
    public placeholderService: PlaceholderService
  ) {}

  async ngOnInit() {
    this.title = this.newsItem.title;
    this.subtitle = this.newsItem.newsSite;
    this.content = this.newsItem.summary;
    this.clicked = await this.storage.isClicked(this.newsItem);
  }
  click() {
    this.browser.open(this.newsItem.url);
    this.storage.markClicked(this.newsItem);
    setTimeout(() => {
      this.clicked = true;
    }, 2000);
  }
}
