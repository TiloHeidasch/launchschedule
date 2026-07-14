import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PadService } from "./pad.service";

@Component({
  selector: "app-pad",
  standalone: false,
  templateUrl: "./pad.page.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["./pad.page.scss"],
})
export class PadPage implements OnInit {
  public id: string;
  pad;
  title: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: PadService
  ) {}

   ngOnInit() {
    this.load();
  }
  load(refreshEvent?) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.pad = this.service.getPadById(this.id);
    if (refreshEvent) {
      refreshEvent.target.complete();
    }
    this.title = this.pad.name;
  }
}
