import { Injectable } from "@angular/core";
import { Plugins } from "@capacitor/core";
const { Browser } = Plugins;
@Injectable({
  providedIn: "root",
})
export class BrowserService {
  async open(url) {
    await Browser.open({ url });
  }
}
