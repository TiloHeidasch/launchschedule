import { Component, OnInit } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  public selectedIndex = 1;
  public appPages = [
    {
      title: "Launch",
      url: "/launch",
      icon: "rocket",
    },
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
      title: "Event",
      url: "/event",
      icon: "alert-circle",
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
      title: "Statistic",
      url: "/statistic",
      icon: "stats-chart",
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
  public labels = ["Family", "Friends", "Notes", "Work", "Travel", "Reminders"];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
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
}
