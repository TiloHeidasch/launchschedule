import { Injectable } from "@angular/core";
import { PreferenceService } from "./preferences.service";

@Injectable({
  providedIn: "root",
})
export class PlaceholderService {
  constructor(private preferences: PreferenceService) {}
  getPlaceholder() {
    return this.preferences.isDark()
      ? "assets/placeholderdark.png"
      : "assets/placeholder.png";
  }
}
