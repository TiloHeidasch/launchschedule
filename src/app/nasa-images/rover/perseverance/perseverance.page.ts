import { Component, OnInit, ViewChild } from "@angular/core";
import { IonContent, IonInfiniteScroll } from "@ionic/angular";
import { MarsPhoto, MarsPhotosService, Rover } from "../mars-photos.service";
import { RoverParamStoreService } from "../rover-param-store.service";

@Component({
  selector: "app-perseverance",
  templateUrl: "./perseverance.page.html",
  styleUrls: ["./perseverance.page.scss"],
})
export class PerseverancePage implements OnInit {
  @ViewChild("perseveranceContent") content: IonContent;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  marsPhotos: MarsPhoto[] = [];
  private availableSols: number[] = [];
  constructor(
    private service: MarsPhotosService,
    public store: RoverParamStoreService
  ) {}

  ionViewDidEnter() {
    this.content.scrollToPoint(0, this.store.perseveranceScrollY, 250);
  }
  logScrolling(event) {
    this.store.perseveranceScrollY = event.detail.currentY;
  }
  async ngOnInit() {
    this.availableSols = (
      await this.service.getAvailableSols(Rover.PERSEVERANCE)
    ).sort((sol1, sol2) => sol2 - sol1);
    this.loadFirst();
  }

  async loadFirst(refreshEvent?) {
    try {
      this.infiniteScroll.disabled = false;
    } catch (error) {}
    this.store.perseveranceImages = [];
    this.store.perseveranceLastRequestedSolIterator = 0;
    this.store.perseveranceImages = await this.service.getPhotosForSol(
      Rover.PERSEVERANCE,
      this.availableSols[this.store.perseveranceLastRequestedSolIterator]
    );
    this.store.perseveranceLastRequestedSolIterator++;
    if (refreshEvent) {
      refreshEvent.target.complete();
    }
  }

  async loadMore(event) {
    this.store.perseveranceImages.push(
      ...(await this.service.getPhotosForSol(
        Rover.PERSEVERANCE,
        this.availableSols[this.store.perseveranceLastRequestedSolIterator]
      ))
    );
    this.store.perseveranceLastRequestedSolIterator++;
    event.target.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    if (
      this.store.perseveranceLastRequestedSolIterator ===
      this.availableSols.length
    ) {
      event.target.disabled = true;
    }
  }
}
