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
  private notificationServiceUpdates: NotificationServiceUpdate[] = [];
  constructor(private storage: StorageService) {}

  async markInterest(type, id): Promise<void> {
    if (this.registered) {
      const key = notificationKey + type + "." + id;
      const topic = type + id;
      FCM.subscribeTo({ topic }).catch((err) => {
        console.log(err);
      });
      await this.storage.setItem(key, notificationEnabled);
      this.updateAll();
    }
  }

  async removeInterest(type, id): Promise<void> {
    if (this.registered) {
      const key = notificationKey + type + "." + id;
      const topic = type + id;
      FCM.unsubscribeFrom({ topic }).catch((err) => {
        console.log(err);
      });
      await this.storage.setItem(key, notificationDisabled);
      this.updateAll();
    }
  }

  async isInterested(type, id): Promise<boolean> {
    const key = notificationKey + type + "." + id;
    return (await this.storage.getItem(key)) === notificationEnabled;
  }
  public setRegistered() {
    this.registered = true;
  }
  public setUnregistered() {
    this.registered = false;
  }
  private updateAll() {
    this.notificationServiceUpdates.forEach((notificationServiceUpdate) => {
      notificationServiceUpdate.onNotificationServiceUpdate();
    });
  }
  public registerForUpdates(
    notificationServiceUpdate: NotificationServiceUpdate
  ) {
    this.notificationServiceUpdates.push(notificationServiceUpdate);
  }
}
export interface NotificationServiceUpdate {
  onNotificationServiceUpdate();
}