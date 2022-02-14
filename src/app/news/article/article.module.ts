import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ArticlePageRoutingModule } from "./article-routing.module";

import { ArticlePage } from "./article.page";
import { NewsListEntryModule } from "../news-list-entry/news-list-entry.module";
import { ListEntryDummyModule } from "src/app/list-entry-dummy/list-entry-dummy.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticlePageRoutingModule,
    NewsListEntryModule,
    ListEntryDummyModule,
  ],
  declarations: [ArticlePage],
})
export class ArticlePageModule {}
