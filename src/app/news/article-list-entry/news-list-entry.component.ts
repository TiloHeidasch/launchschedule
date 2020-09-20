import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";
import { SnapiService } from "src/app/snapi.service";

@Component({
  selector: "app-news-list-entry",
  templateUrl: "./news-list-entry.component.html",
  styleUrls: ["./news-list-entry.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsListEntryComponent implements OnInit {
  @Input() newsItem;
  title: string;
  subtitle: string;
  constructor(private service: SnapiService) {}

  async ngOnInit() {
    this.title = this.newsItem.title;
    this.subtitle = this.newsItem.news_site_long;
  }
}
