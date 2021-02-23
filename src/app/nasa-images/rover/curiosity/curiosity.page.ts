import { Component, OnInit } from "@angular/core";
import { MarsPhoto, MarsPhotosService } from "../mars-photos.service";

@Component({
  selector: "app-curiosity",
  templateUrl: "./curiosity.page.html",
  styleUrls: ["./curiosity.page.scss"],
})
export class CuriosityPage implements OnInit {
  marsPhotos: MarsPhoto[] = [];
  constructor(private service: MarsPhotosService) {}

  async ngOnInit() {
    this.getMarsPhotos();
  }
  async getMarsPhotos(refreshEvent?) {
    this.marsPhotos = await this.service.getLatestCuriosityPhotos();
    if (refreshEvent) {
      refreshEvent.target.complete();
    }
  }
}
