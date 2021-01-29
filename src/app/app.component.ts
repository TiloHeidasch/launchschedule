import { Component, OnInit } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import {
  Capacitor,
  Plugins,
  PushNotification,
  PushNotificationActionPerformed,
  PushNotificationToken,
} from "@capacitor/core";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { environment } from "../environments/environment";
import { LaunchscheduleNotificationService } from "./launchschedule-notification.service";
import { NewsParamStoreService } from "./news/news-param-store.service";

const { PushNotifications } = Plugins;

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
  providers: [MessageService],
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
  private appPages = [...this.highlightPages, ...this.deepDivePages];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private messageService: MessageService,
    private launchscheduleNotificationService: LaunchscheduleNotificationService,
    public newsParamStore: NewsParamStoreService
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
    if (Capacitor.isPluginAvailable("PushNotifications")) {
      this.initNotifications();
    } else {
      this.launchscheduleNotificationService.prepare();
    }
  }

  initNotifications() {
    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    PushNotifications.requestPermission().then((result) => {
      if (result.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });
    // On success, we should be able to receive notifications
    PushNotifications.addListener(
      "registration",
      (token: PushNotificationToken) => {
        this.launchscheduleNotificationService.setToken(token.value);
        this.launchscheduleNotificationService.prepare();
      }
    );
    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener(
      "pushNotificationReceived",
      (notification: PushNotification) => {
        this.messageService.add({
          severity: "info",
          summary: notification.title,
          detail: notification.body,
          sticky: true,
          data: notification.data,
        });
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener(
      "pushNotificationActionPerformed",
      (notification: PushNotificationActionPerformed) => {
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
    );
  }
  jumpToLaunch(id) {
    this.router.navigateByUrl("/launch/" + id);
  }
  jumpToEvent(id) {
    this.router.navigateByUrl("/event/" + id);
  }
}
