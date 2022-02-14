import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { BlogPageRoutingModule } from "./blog-routing.module";

import { BlogPage } from "./blog.page";
import { NewsListEntryModule } from "../news-list-entry/news-list-entry.module";
import { ListEntryDummyModule } from "src/app/list-entry-dummy/list-entry-dummy.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogPageRoutingModule,
    NewsListEntryModule,
    ListEntryDummyModule,
  ],
  declarations: [BlogPage],
})
export class BlogPageModule {}
