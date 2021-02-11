import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
const archiveUrl = "https://epic.gsfc.nasa.gov/archive/natural/";
const metaDataUrl = "https://epic.gsfc.nasa.gov/api/natural";

@Injectable({
  providedIn: "root",
})
export class EpicService {
  constructor(private http: HttpClient) {}

  async getLatestPictures(): Promise<EpicPicture[]> {
    const metaDataList: MetaData[] = await this.getLatestMetaData();
    const pictures: EpicPicture[] = [];
    metaDataList.forEach((metaData) => {
      const year = new Date(metaData.date).getFullYear();
      const month =
        new Date(metaData.date).getMonth() + 1 < 10
          ? "0" + (new Date(metaData.date).getMonth() + 1)
          : new Date(metaData.date).getMonth() + 1;
      const day =
        new Date(metaData.date).getDate() < 10
          ? "0" + new Date(metaData.date).getDate()
          : new Date(metaData.date).getDate();
      const pictureUrl =
        archiveUrl +
        year +
        "/" +
        month +
        "/" +
        day +
        "/jpg/" +
        metaData.image +
        ".jpg";
      metaData.date = new Date(metaData.date);
      pictures.push({ metaData, pictureUrl });
    });
    return pictures;
  }
  private async getLatestMetaData(): Promise<MetaData[]> {
    const metaDataList = await this.http
      .get<MetaData[]>(metaDataUrl)
      .toPromise();
    return metaDataList;
  }
}
export interface EpicPicture {
  pictureUrl: string;
  metaData: MetaData;
}
interface MetaData {
  identifier: string;
  caption: string;
  image: string;
  version: string;
  centroid_coordinates: EpicCentroidCoordinates;
  dscovr_j2000_position: EpicPosition;
  lunar_j2000_position: EpicPosition;
  sun_j2000_position: EpicPosition;
  attitude_quaternions: EpicQuaternions;
  date: Date;
  coords: EpicCoords;
}
interface EpicCentroidCoordinates {
  lat: number;
  lon: number;
}
interface EpicPosition {
  x: number;
  y: number;
  z: number;
}
interface EpicQuaternions {
  q0: number;
  q1: number;
  q2: number;
  q3: number;
}
interface EpicCoords {
  centroid_coordinates: EpicCentroidCoordinates;
  dscovr_j2000_position: EpicPosition;
  lunar_j2000_position: EpicPosition;
  sun_j2000_position: EpicPosition;
  attitude_quaternions: EpicQuaternions;
}
