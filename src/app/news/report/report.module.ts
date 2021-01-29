import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ReportPageRoutingModule } from "./report-routing.module";

import { ReportPage } from "./report.page";
import { NewsListEntryModule } from "../news-list-entry/news-list-entry.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportPageRoutingModule,
    NewsListEntryModule,
  ],
  declarations: [ReportPage],
})
export class ReportPageModule {}
