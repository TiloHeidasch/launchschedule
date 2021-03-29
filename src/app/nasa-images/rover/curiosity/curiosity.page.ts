import { Component, OnInit, ViewChild } from "@angular/core";
import { IonContent, IonInfiniteScroll } from "@ionic/angular";
import { MarsPhoto, MarsPhotosService, Rover } from "../mars-photos.service";
import { RoverParamStoreService } from "../rover-param-store.service";

@Component({
  selector: "app-curiosity",
  templateUrl: "./curiosity.page.html",
  styleUrls: ["./curiosity.page.scss"],
})
export class CuriosityPage implements OnInit {
  @ViewChild("curiosityContent") content: IonContent;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  marsPhotos: MarsPhoto[] = [];
  private availableSols: number[] = [];
  constructor(
    private service: MarsPhotosService,
    public store: RoverParamStoreService
  ) {}

  ionViewDidEnter() {
    this.content.scrollToPoint(0, this.store.curiosityScrollY, 250);
  }
  logScrolling(event) {
    this.store.curiosityScrollY = event.detail.currentY;
  }
  async ngOnInit() {
    this.availableSols = (
      await this.service.getAvailableSols(Rover.CURIOSITY)
    ).sort((sol1, sol2) => sol2 - sol1);
    this.loadFirst();
  }

  async loadFirst(refreshEvent?) {
    try {
      this.infiniteScroll.disabled = false;
    } catch (error) {}
    this.store.curiosityImages = [];
    this.store.curiosityLastRequestedSolIterator = 0;
    this.store.curiosityImages = await this.service.getPhotosForSol(
      Rover.CURIOSITY,
      this.availableSols[this.store.curiosityLastRequestedSolIterator]
    );
    this.store.curiosityLastRequestedSolIterator++;
    if (refreshEvent) {
      refreshEvent.target.complete();
    }
  }

  async loadMore(event) {
    this.store.curiosityImages.push(
      ...(await this.service.getPhotosForSol(
        Rover.CURIOSITY,
        this.availableSols[this.store.curiosityLastRequestedSolIterator]
      ))
    );
    this.store.curiosityLastRequestedSolIterator++;
    event.target.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    if (
      this.store.curiosityLastRequestedSolIterator ===
      this.availableSols.length
    ) {
      event.target.disabled = true;
    }
  }
}
