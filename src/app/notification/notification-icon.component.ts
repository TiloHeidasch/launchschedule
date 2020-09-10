import { Component, OnInit, Input } from "@angular/core";
import { LaunchscheduleNotificationService } from "../launchschedule-notification.service";

@Component({
  selector: "app-notification-icon",
  templateUrl: "./notification-icon.component.html",
  styleUrls: ["./notification-icon.component.scss"],
})
export class NotificationIconComponent implements OnInit {
  @Input() type;
  @Input() id;
  notify = false;
  amount = 0;
  constructor(private notificationService: LaunchscheduleNotificationService) {}

  ngOnInit() {
    setInterval(() => {
      this.notify = this.notificationService.isInterested(
        this.type + "" + this.id
      );
      this.amount = this.notificationService.getAmountForInterest(
        this.type + "" + this.id
      );
    }, 1000);
  }
  toggle() {
    if (this.notify) {
      this.notificationService.removeInterest(this.type + "" + this.id);
    } else {
      this.notificationService.markInterest(this.type + "" + this.id);
    }
    this.notify = !this.notify;
  }
}
