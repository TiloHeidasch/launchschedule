import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewsListEntryComponent } from "./news-list-entry.component";
import { NewsRoutingModule } from "../news-routing.module";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [NewsListEntryComponent],
  imports: [NewsRoutingModule, CommonModule, IonicModule],
  exports: [NewsListEntryComponent],
})
export class NewsListEntryModule {}
