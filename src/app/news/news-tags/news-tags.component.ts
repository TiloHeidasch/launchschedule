import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-news-tags",
  templateUrl: "./news-tags.component.html",
  styleUrls: ["./news-tags.component.scss"],
})
export class NewsTagsComponent implements OnInit {
  @Input() tags: string[] = [];
  constructor() {}

  ngOnInit() {
    this.tags = this.tags
      .filter((tag) => tag.length > 4)
      .sort((tag1, tag2) => tag2.length - tag1.length)
      .slice(0, 5);
  }
}
