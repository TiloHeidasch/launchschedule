import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { NewsTagsComponent } from "./news-tags.component";

@NgModule({
  declarations: [NewsTagsComponent],
  imports: [CommonModule, IonicModule],
  exports: [NewsTagsComponent],
})
export class NewsTagsModule {}
