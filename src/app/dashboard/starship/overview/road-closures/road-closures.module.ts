import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RoadClosuresComponent } from "./road-closures.component";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [RoadClosuresComponent],
  imports: [CommonModule, IonicModule],
  exports: [RoadClosuresComponent],
})
export class RoadClosuresModule {}
