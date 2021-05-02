import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SpacecraftService } from "./spacecraft.service";

@Component({
  selector: "app-spacecraft",
  templateUrl: "./spacecraft.page.html",
  styleUrls: ["./spacecraft.page.scss"],
})
export class SpacecraftPage implements OnInit {
  public id: string;
  spacecraft;
  title: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: SpacecraftService
  ) {}

   ngOnInit() {
    this.load();
  }
   load(refreshEvent?) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.spacecraft =  this.service.getSpacecraftById(
      this.id
    );
    if (refreshEvent) {
      refreshEvent.target.complete();
    }
    this.title = this.spacecraft.name;
  }
}
