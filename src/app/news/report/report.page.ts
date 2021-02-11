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
  selector: "app-report",
  templateUrl: "./report.page.html",
  styleUrls: ["./report.page.scss"],
})
export class ReportPage implements OnInit, ViewDidEnter {
  @ViewChild("reportContent") content: IonContent;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(
    private service: SnapiService,
    public store: NewsParamStoreService
  ) {}
  ionViewDidEnter() {
    this.content.scrollToPoint(0, this.store.reportScrollY, 250);
  }
  logScrolling(event) {
    this.store.reportScrollY = event.detail.currentY;
  }

  ngOnInit() {
    if (this.store.reports.length === 0) {
      this.loadFirst();
    }
  }
  async loadFirst(refreshEvent?) {
    try {
      this.infiniteScroll.disabled = false;
    } catch (error) {}
    this.store.reports = [];
    const answerReports = await this.service.getFirstReports();
    const newReports = answerReports.newsItems;
    this.store.reports.push(...newReports);
    if (refreshEvent) {
      refreshEvent.target.complete();
    }
  }

  async loadMore(event) {
    const answerReports = await this.service.getNextReports(
      this.store.reports.length
    );
    const newReports = answerReports.newsItems;
    this.store.reports.push(...newReports);
    event.target.complete();
  }
}
