import { Injectable } from "@angular/core";
import { SnapiService } from "../snapi.service";
import { NewsStorageService } from "./news-storage.service";

@Injectable({
  providedIn: "root",
})
export class NewsParamStoreService {
  blogs: any[] = [];
  articles: any[] = [];
  reports: any[] = [];
  blogScrollY = 0;
  articleScrollY = 0;
  reportScrollY = 0;
  constructor(
    private storage: NewsStorageService,
    private snapi: SnapiService
  ) {}
}
