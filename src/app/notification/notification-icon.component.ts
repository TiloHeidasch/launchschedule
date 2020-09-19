import { Component, OnInit, Input, ChangeDetectorRef } from "@angular/core";
import {
  LaunchscheduleNotificationService,
  LaunchscheduleNotificationUpdate,
} from "../launchschedule-notification.service";

@Component({
  selector: "app-notification-icon",
  templateUrl: "./notification-icon.component.html",
  styleUrls: ["./notification-icon.component.scss"],
})
export class NotificationIconComponent
  implements OnInit, LaunchscheduleNotificationUpdate {
  @Input() type;
  @Input() id;
  @Input() relatedTypeIds?: { type; id }[] = [];
  notify = false;
  notifyRelated = "";
  amount = 0;
  constructor(
    private notificationService: LaunchscheduleNotificationService,
    private cdr: ChangeDetectorRef
  ) {
    notificationService.subscribeForUpdates(this);
  }
  onUpdate() {
    this.init();
  }

  ngOnInit() {
    this.init();
  }
  async init() {
    this.notify = this.notificationService.isInterested(this.type, this.id);
    this.amount = this.notificationService.getAmountForInterest(
      this.type,
      this.id
    );
    this.relatedTypeIds.forEach((relatedTypeId) => {
      this.amount += this.notificationService.getAmountForInterest(
        relatedTypeId.type,
        relatedTypeId.id
      );
    });
    if (!this.notify) {
      this.relatedTypeIds.forEach((relatedTypeId) => {
        if (
          this.notificationService.isInterested(
            relatedTypeId.type,
            relatedTypeId.id
          )
        ) {
          if (this.notifyRelated === "") {
            this.notifyRelated = relatedTypeId.type;
          }
        }
      });
    }
    this.cdr.markForCheck();
  }
  toggle() {
    if (this.notify) {
      this.notificationService.removeInterest(this.type, this.id);
    } else {
      this.notificationService.markInterest(this.type, this.id);
    }
    this.notify = !this.notify;
  }
}
