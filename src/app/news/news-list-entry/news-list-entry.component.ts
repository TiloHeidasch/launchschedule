import { Component, OnInit, Input, ChangeDetectionStrategy } from "@angular/core";
import { PlaceholderService } from "src/app/placeholder.service";
import { NewsStorageService } from "../news-storage.service";

@Component({
  selector: "app-news-list-entry",
  standalone: false,
  templateUrl: "./news-list-entry.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
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
    window.location.href = this.newsItem.url;
    this.storage.markClicked(this.newsItem);
    setTimeout(() => {
      this.clicked = true;
    }, 2000);
  }
}
