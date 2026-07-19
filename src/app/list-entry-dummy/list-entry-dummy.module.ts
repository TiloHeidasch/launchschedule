import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListEntryDummyComponent } from "./list-entry-dummy.component";
import { CountdownDummyModule } from "src/app/countdown-dummy/countdown-dummy.module";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [ListEntryDummyComponent],
  imports: [
    CommonModule,
    CountdownDummyModule,
    IonicModule,
  ],
  exports: [ListEntryDummyComponent],
})
export class ListEntryDummyModule {}
