import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListEntryDummyComponent } from "./list-entry-dummy.component";
import { CountdownDummyModule } from "src/app/countdown-dummy/countdown-dummy.module";
import { IonicModule } from "@ionic/angular";
import { NotificationDummyModule } from "src/app/notification-dummy/notification-dummy.module";

@NgModule({
  declarations: [ListEntryDummyComponent],
  imports: [
    CommonModule,
    CountdownDummyModule,
    IonicModule,
    NotificationDummyModule,
  ],
  exports: [ListEntryDummyComponent],
})
export class ListEntryDummyModule {}
