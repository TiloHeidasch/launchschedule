import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RocketService } from "./rocket.service";

@Component({
  selector: "app-rocket",
  templateUrl: "./rocket.page.html",
  styleUrls: ["./rocket.page.scss"],
})
export class RocketPage implements OnInit {
  public id: string;
  rocket;
  title: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: RocketService
  ) {}

  async ngOnInit() {
    this.load();
  }
  async load(refreshEvent?) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.rocket = await this.service.getRocketById(this.id);
    if (refreshEvent) {
      refreshEvent.target.complete();
    }
    this.title = this.rocket.name;
  }
}
