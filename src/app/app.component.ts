import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { SwUpdate, VersionEvent } from "@angular/service-worker";
import { NewsParamStoreService } from "./news/news-param-store.service";
import { PreferenceService } from "./preferences.service";
import { environment } from "../environments/environment";

@Component({
  selector: "app-root",
  standalone: false,
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class AppComponent implements OnInit {
  versionCode = environment.versionCode + 1000;
  versionName = environment.versionName;
  track = environment.track;
  public selectedIndex = 0;
  public highlightPages = [
    {
      title: "Launch",
      url: "/launch",
      icon: "rocket",
    },
    {
      title: "Event",
      url: "/event",
      icon: "alert-circle",
    },
    {
      title: "Statistic",
      url: "/statistic",
      icon: "stats-chart",
    },
    {
      title: "News",
      url: "/news",
      icon: "newspaper",
    },
    {
      title: "3D Solar System",
      url: "/solar-system",
      icon: "logo-electron",
    },
    {
      title: "NASA Images",
      url: "/nasa",
      icon: "images",
    },
    {
      title: "SpaceX Starship",
      url: "/dashboard/starship",
      icon: "paper-plane",
    },
  ];
  public deepDivePages = [
    {
      title: "Agency",
      url: "/agency",
      icon: "school",
    },
    {
      title: "Astronaut",
      url: "/astronaut",
      icon: "people",
    },
    {
      title: "Facility",
      url: "/location",
      icon: "business",
    },
    {
      title: "Pad",
      url: "/pad",
      icon: "locate",
    },
    {
      title: "Rocket",
      url: "/rocket",
      icon: "rocket",
    },
    {
      title: "Spacecraft",
      url: "/spacecraft",
      icon: "planet",
    },
    {
      title: "Spacestation",
      url: "/spacestation",
      icon: "earth",
    },
  ];
  public bottomPages = [
    {
      title: "About",
      url: "/about",
      icon: "information-circle",
    },
  ];
  private appPages = [
    ...this.highlightPages,
    ...this.deepDivePages,
    ...this.bottomPages,
  ];

  constructor(
    public newsParamStore: NewsParamStoreService,
    public preferences: PreferenceService,
    updates: SwUpdate,
  ) {
    updates.versionUpdates.subscribe((event: VersionEvent) => {
      if (event.type === "VERSION_READY") {
        updates.activateUpdate().then(() => document.location.reload());
      }
    });
  }

  ngOnInit() {
    const path = window.location.hash.split("/")[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.url.toLowerCase() === "/" + path.toLowerCase()
      );
    }
  }

  toggleDarkTheme() {
    this.preferences.setDark(!this.preferences.isDark());
    this.setTheme();
  }

  private setTheme() {
    document.body.classList.toggle("dark", this.preferences.isDark());
  }
}
