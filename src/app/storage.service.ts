import { Injectable } from "@angular/core";
import { Storage } from "@capacitor/storage";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  async getObject(key: string) {
    const ret = await Storage.get({ key });
    return JSON.parse(ret.value);
  }

  async setObject(key: string, object: any) {
    await Storage.set({
      key,
      value: JSON.stringify(object),
    });
  }
  async setItem(key: string, value: any) {
    await Storage.set({
      key,
      value,
    });
  }

  async getItem(key: string) {
    const { value } = await Storage.get({ key });
    return value;
  }

  async removeItem(key: string) {
    await Storage.remove({ key });
  }

  async clear() {
    await Storage.clear();
  }
}
