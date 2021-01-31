import { Injectable } from "@angular/core";
import { StorageService } from "./storage.service";
const darkKey = "dark";

@Injectable({
  providedIn: "root",
})
export class PreferenceService {
  private dark = false;
  constructor(private storage: StorageService) {
    this.init();
  }
  async init() {
    this.dark = (await this.storage.getItem(darkKey)) === "true";
    document.body.classList.toggle("dark", this.dark);
  }

  public isDark(): boolean {
    return this.dark;
  }

  public setDark(dark: boolean) {
    this.dark = dark;
    this.storage.setItem(darkKey, "" + this.dark);
  }
}
