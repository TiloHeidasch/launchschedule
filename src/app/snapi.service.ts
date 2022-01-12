import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root",
})
export class SnapiService {
  private baseUrl: string = environment.snapi;
  constructor(private http: HttpClient) {}
  async getFirstArticles() {
    return await this.getNextArticles(0);
  }
  async getNextArticles(offset) {
    const limit = 15;
    const url = this.createArticlesUrl(offset, limit);
    const data = await this.http.get<any>(url).toPromise();
    return { newsItems: data };
  }
  createArticlesUrl(start?, limit?) {
    const url = this.baseUrl + "articles?_limit=" + limit + "&_start=" + start;
    return url;
  }
  async getFirstBlogs() {
    return await this.getNextBlogs(0);
  }
  async getNextBlogs(offset) {
    const limit = 15;
    const url = this.createBlogsUrl(offset, limit);
    const data = await this.http.get<any>(url).toPromise();
    return { newsItems: data };
  }
  createBlogsUrl(start?, limit?) {
    const url = this.baseUrl + "blogs?_limit=" + limit + "&_start=" + start;
    return url;
  }
  async getFirstReports() {
    return await this.getNextReports(0);
  }
  async getNextReports(offset) {
    const limit = 15;
    const url = this.createReportsUrl(offset, limit);
    const data = await this.http.get<any>(url).toPromise();
    return { newsItems: data };
  }
  createReportsUrl(start?, limit?) {
    const url = this.baseUrl + "reports?_limit=" + limit + "&_start=" + start;
    return url;
  }
}
