import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RocketListEntryComponent } from "./rocket-list-entry.component";
import { RocketRoutingModule } from "../rocket-routing.module";
import { IonicModule } from "@ionic/angular";
import { RocketService } from "../rocket.service";

@NgModule({
  declarations: [RocketListEntryComponent],
  imports: [RocketRoutingModule, CommonModule, IonicModule],
  exports: [RocketListEntryComponent],
  providers: [RocketService],
})
export class RocketListEntryModule {}
