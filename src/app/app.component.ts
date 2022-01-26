import { Component, OnInit } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { environment } from "../environments/environment";
import { NewsParamStoreService } from "./news/news-param-store.service";
import { PreferenceService } from "./preferences.service";
import { SwUpdate } from "@angular/service-worker";
import {
  PushNotifications,
  PushNotificationSchema,
  ActionPerformed,
} from "@capacitor/push-notifications";
import { FCM } from "@capacitor-community/fcm";

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
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private messageService: MessageService,
    public newsParamStore: NewsParamStoreService,
    public preferences: PreferenceService,
    updates: SwUpdate
  ) {
    this.initializeApp();
    updates.available.subscribe(() => {
      updates.activateUpdate().then(() => document.location.reload());
    });
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
    setTimeout(() => {
      this.initNotifications();
    }, 5000);
  }

  private initNotifications() {
    setTimeout(
      () =>
        this.messageService.add({
          severity: "info",
          sticky: true,
          summary: "initNotifications",
        }),
      5000
    );
    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting

    // Register with Apple / Google to receive push via APNS/FCM
    PushNotifications.register()
      .then(() => {
        setTimeout(
          () =>
            this.messageService.add({
              severity: "info",
              sticky: true,
              summary: "PushNotification Registered",
            }),
          5000
        );

        // Show us the notification payload if the app is open on our device
        PushNotifications.addListener(
          "pushNotificationReceived",
          (notification: PushNotificationSchema) => {
            this.messageService.add({
              severity: "info",
              summary: notification.title,
              detail: notification.body,
              sticky: true,
              data: notification.data,
            });
          }
        )
          .then((res) => {
            setTimeout(
              () =>
                this.messageService.add({
                  severity: "info",
                  sticky: true,
                  summary: "pushNotificationReceived Listener Added " + res,
                }),
              5000
            );
          })
          .catch((err) =>
            setTimeout(
              () =>
                this.messageService.add({
                  severity: "error",
                  sticky: true,
                  summary: err,
                }),
              5000
            )
          );
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
        )
          .then((res) =>
            setTimeout(
              () =>
                this.messageService.add({
                  severity: "info",
                  sticky: true,
                  summary:
                    "pushNotificationActionPerformed Listener Added " + res,
                }),
              5000
            )
          )
          .catch((err) =>
            setTimeout(
              () =>
                this.messageService.add({
                  severity: "error",
                  sticky: true,
                  summary: err,
                }),
              5000
            )
          );

        // now you can subscribe to a specific topic
        FCM.subscribeTo({ topic: "test" })
          .then((r) =>
            setTimeout(
              () =>
                this.messageService.add({
                  severity: "info",
                  sticky: true,
                  summary: "subscribed to topic" + r,
                }),
              5000
            )
          )
          .catch((err) =>
            setTimeout(
              () =>
                this.messageService.add({
                  severity: "error",
                  sticky: true,
                  summary: err,
                }),
              5000
            )
          );
      })
      .catch((err) =>
        setTimeout(() =>
          this.messageService.add({
            severity: "error",
            sticky: true,
            summary: err,
          })
        )
      );
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
