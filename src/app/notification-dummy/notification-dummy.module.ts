import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotificationIconDummyComponent } from "./notification-icon-dummy.component";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [NotificationIconDummyComponent],
  imports: [CommonModule, IonicModule],
  exports: [NotificationIconDummyComponent],
})
export class NotificationDummyModule {}
