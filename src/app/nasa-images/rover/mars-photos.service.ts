import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
const baseUrl = "https://api.nasa.gov/mars-photos/api/v1/";
const apiKey = environment.nasaApiKey;
@Injectable({
  providedIn: "root",
})
export class MarsPhotosService {
  constructor(private http: HttpClient) {}
  async getAvailableSols(rover: Rover): Promise<number[]> {
    const manifest = await this.getManifest(rover);
    const sols: number[] = [];
    sols.push(...manifest.photos.map((photo) => photo.sol));
    return sols;
  }
  private async getManifest(rover: Rover): Promise<MarsPhotoManifest> {
    let response = await this.http
      .get<MarsPhotoManifestResponse>(
        baseUrl + "manifests/" + rover + "?api_key=" + apiKey
      )
      .toPromise();
    return response.photo_manifest;
  }
  async getPhotosForSol(rover: Rover, sol: number): Promise<MarsPhoto[]> {
    const response: MarsPhotoResponse = await this.http
      .get<MarsPhotoResponse>(
        baseUrl +
          "rovers/" +
          rover +
          "/photos?sol=" +
          sol +
          "&api_key=" +
          apiKey
      )
      .toPromise();
      console.log({rover,sol,response});
      
      return response.photos;
  }
}
interface MarsPhotoManifestResponse {
  photo_manifest: MarsPhotoManifest;
}
interface MarsPhotoManifest {
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
  max_sol: number;
  max_date: string;
  total_photos: number;
  photos: MarsPhotoManifestPhoto[];
}
interface MarsPhotoManifestPhoto {
  sol: number;
  earth_date: string;
  total_photos: number;
  cameras: string[];
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
export enum Rover {
  CURIOSITY = "curiosity",
  PERSEVERANCE = "perseverance",
}
