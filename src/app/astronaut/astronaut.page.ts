import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AstronautService } from "./astronaut.service";

@Component({
  selector: "app-astronaut",
  templateUrl: "./astronaut.page.html",
  styleUrls: ["./astronaut.page.scss"],
})
export class AstronautPage implements OnInit {
  public id: string;
  astronaut;
  title: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: AstronautService
  ) {}

  ngOnInit() {
    this.load();
  }
  load(refreshEvent?) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.astronaut = this.service.getAstronautById(this.id);
    if (refreshEvent) {
      refreshEvent.target.complete();
    }
    this.title = this.astronaut.name;
    console.log("AstronautPage",    this.id,    this.astronaut,    this.title);
  }
}
