import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root",
})
export class SnapiService {
  baseUrl: string = environment.snapi;
  calls = 0;
  constructor(private http: HttpClient) {}
  async getFirstArticles(search) {
    return await this.getNextArticles(0, search);
  }
  async getNextArticles(offset, search) {
    const limit = 5;
    const page = offset / limit + 1;
    const url = this.createArticlesUrl(search, page, limit);
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    return { newsItems: data.docs, max: data.totalDocs };
  }
  createArticlesUrl(search, page, limit) {
    let url = this.baseUrl + "articles?limit=" + limit + "&page=" + page;
    if (search && search !== "") {
      url += "&search=" + search;
    }
    return url;
  }
  async getFirstBlogs(search) {
    return await this.getNextBlogs(0, search);
  }
  async getNextBlogs(offset, search) {
    const limit = 5;
    const page = offset / limit + 1;
    const url = this.createBlogsUrl(search, page, limit);
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    return { newsItems: data.docs, max: data.totalDocs };
  }
  createBlogsUrl(search, page, limit) {
    let url = this.baseUrl + "blogs?limit=" + limit + "&page=" + page;
    if (search && search !== "") {
      url += "&search=" + search;
    }
    return url;
  }
}
