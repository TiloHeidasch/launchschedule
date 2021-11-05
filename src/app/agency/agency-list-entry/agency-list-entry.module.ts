import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AgencyListEntryComponent } from "./agency-list-entry.component";
import { AgencyRoutingModule } from "../agency-routing.module";
import { IonicModule } from "@ionic/angular";
import { NotificationModule } from "src/app/notification/notification.module";
import { AgencyService } from "../agency.service";

@NgModule({
  declarations: [AgencyListEntryComponent],
  imports: [AgencyRoutingModule, CommonModule, IonicModule, NotificationModule],
  exports: [AgencyListEntryComponent],
  providers: [AgencyService],
})
export class AgencyListEntryModule {}
