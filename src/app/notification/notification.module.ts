import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotificationIconComponent } from "./notification-icon.component";
import { IonicModule } from "@ionic/angular";
import { PrimeNGModule } from "../prime-ng/prime-ng.module";

@NgModule({
  declarations: [NotificationIconComponent],
  imports: [CommonModule, IonicModule, PrimeNGModule],
  exports: [NotificationIconComponent],
})
export class NotificationModule {}
