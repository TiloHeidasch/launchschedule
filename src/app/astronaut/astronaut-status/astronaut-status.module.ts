import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AstronautRoutingModule } from "../astronaut-routing.module";
import { AstronautStatusComponent } from "./astronaut-status.component";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [AstronautStatusComponent],
  imports: [AstronautRoutingModule, CommonModule, IonicModule],
  exports: [AstronautStatusComponent],
})
export class AstronautStatusModule {}
