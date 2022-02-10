import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotificationIconDummyComponent } from "./notification-icon-dummy.component";
import { IonicModule } from "@ionic/angular";
import { PrimeNGModule } from "../prime-ng/prime-ng.module";

@NgModule({
  declarations: [NotificationIconDummyComponent],
  imports: [CommonModule, IonicModule, PrimeNGModule],
  exports: [NotificationIconDummyComponent],
})
export class NotificationDummyModule {}
