import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LaunchLibraryService } from "../launch-library.service";

@Component({
  selector: "app-spacestation",
  templateUrl: "./spacestation.page.html",
  styleUrls: ["./spacestation.page.scss"],
})
export class SpacestationPage implements OnInit {
  public id: string;
  spacestation;
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
    this.spacestation = await this.service.getSpacestationById(
      this.id,
      refreshEvent
    );
    if (refreshEvent) {
      refreshEvent.target.complete();
    }
    this.title = this.spacestation.name;
    console.log("Spacestation", this.spacestation);
    
  }
}
