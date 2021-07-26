import { Injectable } from "@angular/core";
import { Browser } from "@capacitor/browser";
@Injectable({
  providedIn: "root",
})
export class BrowserService {
  async open(url) {
    await Browser.open({ url });
  }
}
