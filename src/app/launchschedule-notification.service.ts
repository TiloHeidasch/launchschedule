import { Injectable } from "@angular/core";
import { StorageService } from "./storage.service";

import { FCM } from "@capacitor-community/fcm";

const notificationKey = "rcket.notification.";
const notificationEnabled = "enabled";
const notificationDisabled = "disabled";

@Injectable({
  providedIn: "root",
})
export class LaunchscheduleNotificationService {
  private registered = false;
  constructor(private storage: StorageService) {}
  async markInterest(type, id): Promise<void> {
    if (this.registered) {
      const key = notificationKey + type + "." + id;
      const topic = type + id;
      await this.storage.setItem(key, notificationEnabled);
      FCM.subscribeTo({ topic }).catch((err) => {
        console.log(err);
      });
    }
  }

  async removeInterest(type, id): Promise<void> {
    const key = notificationKey + type + "." + id;
    await this.storage.setItem(key, notificationDisabled);
  }

  async isInterested(type, id): Promise<boolean> {
    const key = notificationKey + type + "." + id;
    return (await this.storage.getItem(key)) === notificationEnabled;
  }
  public setRegistered(registered: boolean) {
    this.registered = registered;
  }
}
