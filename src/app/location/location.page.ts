import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LocationService } from "./location.service";

@Component({
  selector: "app-location",
  templateUrl: "./location.page.html",
  styleUrls: ["./location.page.scss"],
})
export class LocationPage implements OnInit {
  public id: string;
  location;
  title: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: LocationService
  ) {}

  ngOnInit() {
    this.load();
  }
  load(refreshEvent?) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.location = this.service.getLocationById(this.id);
    if (refreshEvent) {
      refreshEvent.target.complete();
    }
    this.title = this.location.name;
  }
}
