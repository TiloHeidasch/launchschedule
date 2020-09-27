import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NewsOverviewPage } from "./news-overview.page";

const routes: Routes = [
  {
    path: "",
    component: NewsOverviewPage,
    children: [
      {
        path: "article",
        loadChildren: () =>
          import("./article/article.module").then((m) => m.ArticlePageModule),
      },
      {
        path: "blog",
        loadChildren: () =>
          import("./blog/blog.module").then((m) => m.BlogPageModule),
      },
      {
        path: "",
        redirectTo: "/news/article",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
