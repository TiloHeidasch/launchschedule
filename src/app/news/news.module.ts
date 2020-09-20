import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { NewsRoutingModule } from "./news-routing.module";

import { NewsOverviewPage } from "./news-overview.page";
import { AnimationModule } from "../animation/animation.module";
import { NewsListEntryModule } from "./article-list-entry/news-list-entry.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsRoutingModule,
    AnimationModule,
    NewsListEntryModule,
  ],
  declarations: [NewsOverviewPage],
  exports: [],
})
export class NewsModule {}
