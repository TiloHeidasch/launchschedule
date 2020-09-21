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
        children: [
          {
            path: "",
            loadChildren: "./article/article.module#ArticlePageModule",
          },
        ],
      },
      {
        path: "blog",
        children: [
          {
            path: "",
            loadChildren: "./blog/blog.module#BlogPageModule",
          },
        ],
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
