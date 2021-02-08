import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
const baseUrl =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos";
const apiKey = environment.nasaApiKey;
@Injectable({
  providedIn: "root",
})
export class MarsPhotosService {
  constructor(private http: HttpClient) {}
  async getLatestCuriosityPhotos(): Promise<MarsPhoto[]> {
    const today = new Date();
    let response = await this.getCuriosityPhoto(this.getYearMonthDay(today));
    if (response.photos && response.photos.length > 0) {
      return response.photos;
    } else if (response.photos && response.photos.length === 0) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      response = await this.getCuriosityPhoto(this.getYearMonthDay(yesterday));
      return response.photos;
    }
    return [];
  }

  private getYearMonthDay(date: Date): YearMonthDay {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return { year, month, day };
  }

  private async getCuriosityPhoto(
    yearMonthDay: YearMonthDay
  ): Promise<MarsPhotoResponse> {
    const url =
      baseUrl +
      "?earth_date=" +
      yearMonthDay.year +
      "-" +
      yearMonthDay.month +
      "-" +
      yearMonthDay.day +
      "&api_key=" +
      apiKey;
    const result = await this.http.get<MarsPhotoResponse>(url).toPromise();
    return result;
  }
}
interface YearMonthDay {
  year: number;
  month: number;
  day: number;
}
interface MarsPhotoResponse {
  photos: MarsPhoto[];
}
export interface MarsPhoto {
  id: number;
  sol: number;
  camera: MarsCamera;
  img_src: string;
  earth_date: string;
  rover: MarsRover;
}
export interface MarsCamera {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
}
export interface MarsRover {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
}
