import { Component, OnInit, Input, ChangeDetectorRef } from "@angular/core";
import {
  LaunchscheduleNotificationService,
  NotificationServiceUpdate,
} from "../launchschedule-notification.service";

@Component({
  selector: "app-notification-icon",
  templateUrl: "./notification-icon.component.html",
  styleUrls: ["./notification-icon.component.scss"],
})
export class NotificationIconComponent
  implements OnInit, NotificationServiceUpdate
{
  @Input() type;
  @Input() id;
  @Input() relatedTypeIds?: { type; id }[] = [];
  notify = false;
  notifyRelated = "";
  constructor(
    private notificationService: LaunchscheduleNotificationService,
    private cdr: ChangeDetectorRef
  ) {
    notificationService.registerForUpdates(this);
  }
  onNotificationServiceUpdate() {
    this.init();
  }

  ngOnInit() {
    this.init();
  }
  init() {
    this.notify = false;
    this.notifyRelated = "";
    this.notificationService
      .isInterested(this.type, this.id)
      .then((isInterested) => {
        this.notify = isInterested;
        this.cdr.markForCheck();
        if (!this.notify) {
          this.relatedTypeIds.forEach((relatedTypeId) => {
            this.notificationService
              .isInterested(relatedTypeId.type, relatedTypeId.id)
              .then((isRelatedTypeInterested) => {
                if (isRelatedTypeInterested && this.notifyRelated === "") {
                  this.notifyRelated = relatedTypeId.type;
                  this.cdr.markForCheck();
                }
              });
          });
        }
      });
  }
  toggle() {
    if (this.notify) {
      this.notificationService.removeInterest(this.type, this.id);
    } else {
      this.notificationService.markInterest(this.type, this.id);
    }
    this.notify = !this.notify;
    this.init();
  }
}
