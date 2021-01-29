import { Injectable } from "@angular/core";
import { SnapiService } from "../snapi.service";
import { NewsStorageService } from "./news-storage.service";

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
  constructor(
    private storage: NewsStorageService,
    private snapi: SnapiService
  ) {}
}
