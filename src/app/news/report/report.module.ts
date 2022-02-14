import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ReportPageRoutingModule } from "./report-routing.module";

import { ReportPage } from "./report.page";
import { NewsListEntryModule } from "../news-list-entry/news-list-entry.module";
import { ListEntryDummyModule } from "src/app/list-entry-dummy/list-entry-dummy.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportPageRoutingModule,
    NewsListEntryModule,
    ListEntryDummyModule,
  ],
  declarations: [ReportPage],
})
export class ReportPageModule {}
