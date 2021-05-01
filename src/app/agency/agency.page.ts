import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AgencyService } from "../masterdata/agency.service";

@Component({
  selector: "app-agency",
  templateUrl: "./agency.page.html",
  styleUrls: ["./agency.page.scss"],
})
export class AgencyPage implements OnInit {
  public id: string;
  agency;
  title: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: AgencyService
  ) {}

  async ngOnInit() {
    this.load();
  }
  async load(refreshEvent?) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.agency = await this.service.getAgencyById(this.id);
    if (refreshEvent) {
      refreshEvent.target.complete();
    }
    this.title = this.agency.name;
  }
}
