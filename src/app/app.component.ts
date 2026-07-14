import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@capacitor/splash-screen";
import { StatusBar, Style } from "@capacitor/status-bar";

import { Router } from "@angular/router";
import { environment } from "../environments/environment";
import { NewsParamStoreService } from "./news/news-param-store.service";
import { PreferenceService } from "./preferences.service";
import { SwUpdate, VersionEvent } from "@angular/service-worker";
import {
  PushNotifications,
  PushNotificationSchema,
  ActionPerformed,
} from "@capacitor/push-notifications";
import { LaunchscheduleNotificationService } from "./launchschedule-notification.service";

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
    private platform: Platform,
    private router: Router,
    public newsParamStore: NewsParamStoreService,
    public preferences: PreferenceService,
    updates: SwUpdate,
    private notificationService: LaunchscheduleNotificationService
  ) {
    this.initializeApp();
    updates.versionUpdates.subscribe((event: VersionEvent) => {
      if (event.type === "VERSION_READY") {
        updates.activateUpdate().then(() => document.location.reload());
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.setStyle({ style: Style.Default });
      SplashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.hash.split("/")[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.url.toLowerCase() === "/" + path.toLowerCase()
      );
    }
    setTimeout(() => {
      this.initNotifications();
    }, 5000);
  }

  private initNotifications() {
    // Register with Apple / Google to receive push via APNS/FCM
    PushNotifications.register()
      .then(() => {
        this.notificationService.setRegistered();
        // Show us the notification payload if the app is open on our device
        PushNotifications.addListener(
          "pushNotificationReceived",
          (notification: PushNotificationSchema) => {
            console.log('Notification:', notification.title, notification.body);
          }
        ).catch((err) => {
          console.log(err);
        });
        // Method called when tapping on a notification
        PushNotifications.addListener(
          "pushNotificationActionPerformed",
          (notification: ActionPerformed) => {
            switch (notification.notification.data.type) {
              case "launch":
                this.jumpToLaunch(notification.notification.data.id);
                break;
              case "event":
                this.jumpToEvent(notification.notification.data.id);
                break;
              default:
                break;
            }
          }
        ).catch((err) => {
          console.log(err);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  jumpToLaunch(id) {
    this.router.navigateByUrl("/launch/" + id);
  }
  jumpToEvent(id) {
    this.router.navigateByUrl("/event/" + id);
  }
  toggleDarkTheme() {
    this.preferences.setDark(!this.preferences.isDark());
    this.setTheme();
  }
  private setTheme() {
    document.body.classList.toggle("dark", this.preferences.isDark());
  }
}
