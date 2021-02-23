import { Component, OnInit } from "@angular/core";
import { MarsPhoto, MarsPhotosService } from "../mars-photos.service";

@Component({
  selector: "app-perseverance",
  templateUrl: "./perseverance.page.html",
  styleUrls: ["./perseverance.page.scss"],
})
export class PerseverancePage implements OnInit {
  marsPhotos: MarsPhoto[] = [];
  constructor(private service: MarsPhotosService) {}

  async ngOnInit() {
    this.getMarsPhotos();
  }
  async getMarsPhotos(refreshEvent?) {
    this.marsPhotos = await this.service.getLatestPerseverancePhotos();
    if (refreshEvent) {
      refreshEvent.target.complete();
    }
  }
}
