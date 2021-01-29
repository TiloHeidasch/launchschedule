import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root",
})
export class SnapiService {
  baseUrl: string = environment.snapi;
  constructor(private http: HttpClient) {}
  async getFirstArticles(search?) {
    return await this.getNextArticles(0, search);
  }
  async getNextArticles(offset, search?) {
    const limit = 5;
    const url = this.createArticlesUrl(search, offset, limit);
    const data = await this.http.get<any>(url).toPromise();
    return { newsItems: data };
  }
  createArticlesUrl(search?, start?, limit?) {
    let url = this.baseUrl + "articles?_limit=" + limit + "&_start=" + start;
    if (search && search !== "") {
      url += "&search=" + search;
    }
    console.log(url);

    return url;
  }
  async getFirstBlogs(search?) {
    return await this.getNextBlogs(0, search);
  }
  async getNextBlogs(offset, search?) {
    const limit = 5;
    const url = this.createBlogsUrl(search, offset, limit);
    const data = await this.http.get<any>(url).toPromise();
    return { newsItems: data };
  }
  createBlogsUrl(search?, start?, limit?) {
    let url = this.baseUrl + "blogs?_limit=" + limit + "&_start=" + start;
    if (search && search !== "") {
      url += "&search=" + search;
    }
    return url;
  }
  async getFirstReports(search?) {
    return await this.getNextReports(0, search);
  }
  async getNextReports(offset, search?) {
    const limit = 5;
    const url = this.createReportsUrl(search, offset, limit);
    const data = await this.http.get<any>(url).toPromise();
    return { newsItems: data };
  }
  createReportsUrl(search?, start?, limit?) {
    let url = this.baseUrl + "reports?_limit=" + limit + "&_start=" + start;
    if (search && search !== "") {
      url += "&search=" + search;
    }
    return url;
  }
}
