import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  async getObject(key: string) {
    const ret = localStorage.getItem(key);
    return JSON.parse(ret);
  }

  async setObject(key: string, object: any) {
    localStorage.setItem(key, JSON.stringify(object));
  }

  async setItem(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  async getItem(key: string) {
    return localStorage.getItem(key);
  }

  async removeItem(key: string) {
    localStorage.removeItem(key);
  }

  async clear() {
    localStorage.clear();
  }
}
