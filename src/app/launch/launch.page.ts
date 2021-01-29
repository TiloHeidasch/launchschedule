import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LaunchLibraryService } from "../launch-library.service";

@Component({
  selector: "app-launch",
  templateUrl: "./launch.page.html",
  styleUrls: ["./launch.page.scss"],
})
export class LaunchPage implements OnInit {
  public id: string;
  launch = undefined;
  title: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: LaunchLibraryService
  ) {}

  async ngOnInit() {
    this.load();
  }
  private async load(refreshEvent?) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.launch = await this.service.getLaunchById(this.id, refreshEvent);
    if (refreshEvent) {
      refreshEvent.target.complete();
    }
    this.title = this.launch.name.split("|")[1].trim();
  }
}
