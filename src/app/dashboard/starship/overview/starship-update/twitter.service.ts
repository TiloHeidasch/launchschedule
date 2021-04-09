import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class TwitterService {
  private baseUrl: string = environment.twitter;
  constructor(private http: HttpClient) {}

  async extractTwitterContent(twitterUrl) {
    return this.extractBlockquote(await this.getEmbedded(twitterUrl));
  }
  private async getEmbedded(twitterUrl) {
    const url =
      // This CORS Proxy is only in there because Twitter for some reason
      // doesn't allow Cross Origin requests to their API
      environment.cors +
      this.baseUrl +
      "?url=" +
      twitterUrl +
      "&omit_script=true&hide_thread=false";
    const data = await this.http.get(url).toPromise();
    return data;
  }
  private extractBlockquote(twitterEmbeddedData) {
    const html = twitterEmbeddedData.html;
    return html;
  }
}
