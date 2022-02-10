import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CountdownDummyComponent } from "./countdown-dummy.component";

@NgModule({
  declarations: [CountdownDummyComponent],
  imports: [CommonModule],
  exports: [CountdownDummyComponent],
})
export class CountdownDummyModule {}
