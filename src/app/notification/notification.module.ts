import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotificationIconComponent } from "./notification-icon.component";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [NotificationIconComponent],
  imports: [CommonModule, IonicModule],
  exports: [NotificationIconComponent],
})
export class NotificationModule {}
