import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LaunchRoutingModule } from "../launch-routing.module";
import { LaunchStatusComponent } from "./launch-status.component";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [LaunchStatusComponent],
  imports: [LaunchRoutingModule, CommonModule, IonicModule],
  exports: [LaunchStatusComponent],
})
export class LaunchStatusModule {}
