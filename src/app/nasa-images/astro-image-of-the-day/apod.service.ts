import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
const url: string =
  "https://api.nasa.gov/planetary/apod?api_key=" + environment.nasaApiKey;

@Injectable({
  providedIn: "root",
})
export class ApodService {
  constructor(private http: HttpClient) {}
  async getAstronomyPictureOfTheDay(): Promise<AstronomyPictureOfTheDay> {
    const apod: AstronomyPictureOfTheDay = await this.http
      .get<AstronomyPictureOfTheDay>(url)
      .toPromise();
    return apod;
  }
}
export interface AstronomyPictureOfTheDay {
  copyright: string;
  date: string;
  explanation: string;
  hdurl?: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}
