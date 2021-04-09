import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StarshipUpdateComponent } from "./starship-update.component";
import { IonicModule } from "@ionic/angular";
import { TwitterService } from "./twitter.service";

@NgModule({
  declarations: [StarshipUpdateComponent],
  providers: [TwitterService],
  imports: [CommonModule, IonicModule],
  exports: [StarshipUpdateComponent],
})
export class StarshipUpdateModule {}
