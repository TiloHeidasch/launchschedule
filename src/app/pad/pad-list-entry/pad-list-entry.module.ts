import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PadListEntryComponent } from "./pad-list-entry.component";
import { PadRoutingModule } from "../pad-routing.module";
import { IonicModule } from "@ionic/angular";
import { PadService } from "../pad.service";

@NgModule({
  declarations: [PadListEntryComponent],
  imports: [PadRoutingModule, CommonModule, IonicModule],
  exports: [PadListEntryComponent],
  providers: [PadService],
})
export class PadListEntryModule {}
