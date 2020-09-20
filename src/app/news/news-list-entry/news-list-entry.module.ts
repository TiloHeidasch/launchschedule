import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewsListEntryComponent } from "./news-list-entry.component";
import { NewsRoutingModule } from "../news-routing.module";
import { AnimationModule } from "src/app/animation/animation.module";
import { IonicModule } from "@ionic/angular";
import { NewsTagsModule } from "../news-tags/news-tags.module";

@NgModule({
  declarations: [NewsListEntryComponent],
  imports: [
    NewsRoutingModule,
    AnimationModule,
    CommonModule,
    IonicModule,
    NewsTagsModule,
  ],
  exports: [NewsListEntryComponent],
})
export class NewsListEntryModule {}
