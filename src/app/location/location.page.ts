import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LaunchLibraryService } from "../launch-library.service";

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
    private service: LaunchLibraryService
  ) {}

  async ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.location = await this.service.getLocationById(this.id);
    this.title = this.location.name;
  }
}
