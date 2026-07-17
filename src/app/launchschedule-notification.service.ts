import { Injectable } from "@angular/core";
import { StorageService } from "./storage.service";

const notificationKey = "rcket.notification.";
const notificationEnabled = "enabled";
const notificationDisabled = "disabled";

@Injectable({
  providedIn: "root",
})
export class LaunchscheduleNotificationService {
  private notificationServiceUpdates: NotificationServiceUpdate[] = [];
  constructor(private storage: StorageService) {}

  async markInterest(type, id): Promise<void> {
    const key = notificationKey + type + "." + id;
    await this.storage.setItem(key, notificationEnabled);
    this.updateAll();
  }

  async removeInterest(type, id): Promise<void> {
    const key = notificationKey + type + "." + id;
    await this.storage.setItem(key, notificationDisabled);
    this.updateAll();
  }

  async isInterested(type, id): Promise<boolean> {
    const key = notificationKey + type + "." + id;
    return (await this.storage.getItem(key)) === notificationEnabled;
  }

  public registerForUpdates(
    notificationServiceUpdate: NotificationServiceUpdate
  ) {
    this.notificationServiceUpdates.push(notificationServiceUpdate);
  }

  private updateAll() {
    this.notificationServiceUpdates.forEach((notificationServiceUpdate) => {
      notificationServiceUpdate.onNotificationServiceUpdate();
    });
  }
}
export interface NotificationServiceUpdate {
  onNotificationServiceUpdate();
}
