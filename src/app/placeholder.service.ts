import { Injectable } from "@angular/core";
import { PreferenceService } from "./preferences.service";

@Injectable({
  providedIn: "root",
})
export class PlaceholderService {
  constructor(private preferences: PreferenceService) {}
  getPlaceholder() {
    return this.preferences.isDark()
      ? "assets/placeholder/placeholderdark.png"
      : "assets/placeholder/placeholder.png";
  }
  resolveImage(image: any, legacyUrl?: string) {
    if (image && typeof image === "object" && image.image_url) {
      return image.image_url;
    }
    if (typeof image === "string" && image !== "") {
      return image;
    }
    if (legacyUrl) {
      return legacyUrl;
    }
    return this.getPlaceholder();
  }
  getVersion() {
    return this.preferences.isDark()
      ? "assets/placeholder/versiondark.png"
      : "assets/placeholder/version.jpg";
  }
  getCredits() {
    return this.preferences.isDark()
      ? "assets/placeholder/creditsdark.png"
      : "assets/placeholder/credits.jpg";
  }
}
