import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { DashboardRoutingModule } from "./dashboard-routing.module";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, DashboardRoutingModule],
  declarations: [],
  exports: [],
})
export class DashboardModule {}
