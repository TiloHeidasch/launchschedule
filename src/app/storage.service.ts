import { Injectable } from "@angular/core";
import { Preferences } from "@capacitor/preferences";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  async getObject(key: string) {
    const ret = await Preferences.get({ key });
    return JSON.parse(ret.value);
  }

  async setObject(key: string, object: any) {
    await Preferences.set({
      key,
      value: JSON.stringify(object),
    });
  }
  async setItem(key: string, value: any) {
    await Preferences.set({
      key,
      value,
    });
  }

  async getItem(key: string) {
    const { value } = await Preferences.get({ key });
    return value;
  }

  async removeItem(key: string) {
    await Preferences.remove({ key });
  }

  async clear() {
    await Preferences.clear();
  }
}
