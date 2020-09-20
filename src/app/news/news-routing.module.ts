import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NewsOverviewPage } from "./news-overview.page";

const routes: Routes = [
  {
    path: "",
    component: NewsOverviewPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
