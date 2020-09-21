import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class NewsParamStoreService {
  search: string;
  showFilter = false;
  blogs: any[] = [];
  articles: any[] = [];
  blogScrollY = 0;
  articleScrollY = 0;
  constructor() {}
}
