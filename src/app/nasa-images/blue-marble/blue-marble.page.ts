import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { PlaceholderService } from "src/app/placeholder.service";
import { EpicPicture, EpicService } from "./epic.service";

@Component({
  selector: "app-blue-marble",
  standalone: false,
  templateUrl: "./blue-marble.page.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["./blue-marble.page.scss"],
})
export class BlueMarblePage implements OnInit {
  epicPictures: EpicPicture[] = [];
  constructor(
    private service: EpicService,
    public placeholderService: PlaceholderService
  ) {}

  ngOnInit() {
    this.getEpicPictures();
  }
  async getEpicPictures(refreshEvent?) {
    this.epicPictures = await this.service.getLatestPictures();
    if (refreshEvent) {
      refreshEvent.target.complete();
    }
  }
}
