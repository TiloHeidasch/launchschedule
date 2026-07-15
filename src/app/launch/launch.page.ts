import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LaunchLibraryService } from "../launch-library.service";

@Component({
  selector: "app-launch",
  standalone: false,
  templateUrl: "./launch.page.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["./launch.page.scss"],
})
export class LaunchPage implements OnInit {
  public id: string;
  launch = undefined;
  title: string;
  crew = [];
  videos = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: LaunchLibraryService
  ) {}

  async ngOnInit() {
    this.load();
  }
  async load(refreshEvent?) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.launch = await this.service.getLaunchById(this.id, refreshEvent);
    if (refreshEvent) {
      refreshEvent.target.complete();
    }
    this.title = this.launch.name.split("|")[1].trim();
    this.crew = this.resolveCrew(this.launch);
    this.videos = this.launch.vid_urls || this.launch.vidURLs || [];
  }
  private resolveCrew(launch): any[] {
    const stage = launch?.rocket?.spacecraft_stage;
    if (!stage) {
      return [];
    }
    if (Array.isArray(stage)) {
      return stage.reduce(
        (crew, flight) => crew.concat(flight.launch_crew || []),
        []
      );
    }
    return stage.launch_crew || [];
  }
}
