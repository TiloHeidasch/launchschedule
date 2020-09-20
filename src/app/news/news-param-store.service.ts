import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class NewsParamStoreService {
  search: string;
  showFilter = false;
  newsItems: any[] = [];
  blogs: any[] = [];
  articles: any[] = [];
  scrollY = 0;
  constructor() {}
}
