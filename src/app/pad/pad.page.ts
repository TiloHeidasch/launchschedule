import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LaunchLibraryService } from "../launch-library.service";

@Component({
  selector: "app-pad",
  templateUrl: "./pad.page.html",
  styleUrls: ["./pad.page.scss"],
})
export class PadPage implements OnInit {
  public id: string;
  pad;
  title: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: LaunchLibraryService
  ) {}

  async ngOnInit() {
    this.load();
  }
  async load(refreshEvent?) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.pad = await this.service.getPadById(this.id, refreshEvent);
    if (refreshEvent) {
      refreshEvent.target.complete();
    }
    this.title = this.pad.name;
  }
}
