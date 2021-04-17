import { Component, OnInit, ViewChild } from "@angular/core";
import { IonContent, IonInfiniteScroll, ViewDidEnter } from "@ionic/angular";
import { StarshipParamStoreService } from "../starship-param-store.service";

@Component({
  selector: "app-previous",
  templateUrl: "./previous.page.html",
  styleUrls: ["./previous.page.scss"],
})
export class PreviousPage implements OnInit, ViewDidEnter {
  @ViewChild("previousContent") content: IonContent;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(public store: StarshipParamStoreService) {}

  ionViewDidEnter() {
    this.content.scrollToPoint(0, this.store.previousScrollY, 250);
  }
  logScrolling(event) {
    this.store.previousScrollY = event.detail.currentY;
  }

  ngOnInit() {}
}
