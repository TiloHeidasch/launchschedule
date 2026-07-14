import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RocketService } from "./rocket.service";

@Component({
  selector: "app-rocket",
  standalone: false,
  templateUrl: "./rocket.page.html",
  changeDetection: ChangeDetectionStrategy.Eager,
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

   ngOnInit() {
    this.load();
  }
   load(refreshEvent?) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.rocket =  this.service.getRocketById(this.id);
    if (refreshEvent) {
      refreshEvent.target.complete();
    }
    this.title = this.rocket.name;
  }
}
