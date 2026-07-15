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
    const limit = 24;
    const url = this.createArticlesUrl(offset, limit);
    const data = await this.http.get<any>(url).toPromise();
    return { newsItems: data.results.map((item) => this.mapItem(item)) };
  }
  createArticlesUrl(start?, limit?) {
    const url = this.baseUrl + "articles?limit=" + limit + "&offset=" + start;
    return url;
  }
  async getFirstBlogs() {
    return await this.getNextBlogs(0);
  }
  async getNextBlogs(offset) {
    const limit = 24;
    const url = this.createBlogsUrl(offset, limit);
    const data = await this.http.get<any>(url).toPromise();
    return { newsItems: data.results.map((item) => this.mapItem(item)) };
  }
  createBlogsUrl(start?, limit?) {
    const url = this.baseUrl + "blogs?limit=" + limit + "&offset=" + start;
    return url;
  }
  async getFirstReports() {
    return await this.getNextReports(0);
  }
  async getNextReports(offset) {
    const limit = 24;
    const url = this.createReportsUrl(offset, limit);
    const data = await this.http.get<any>(url).toPromise();
    return { newsItems: data.results.map((item) => this.mapItem(item)) };
  }
  createReportsUrl(start?, limit?) {
    const url = this.baseUrl + "reports?limit=" + limit + "&offset=" + start;
    return url;
  }
  private mapItem(item: any) {
    return {
      id: item.id,
      title: item.title,
      url: item.url,
      imageUrl: item.image_url,
      newsSite: item.news_site,
      summary: item.summary,
      publishedAt: item.published_at,
      updatedAt: item.updated_at,
      featured: item.featured,
      launches: item.launches,
      events: item.events,
    };
  }
}
