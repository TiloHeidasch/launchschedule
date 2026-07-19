import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { EpicService } from "./epic.service";

describe("EpicService", () => {
  let service: EpicService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [EpicService],
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(EpicService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  describe("getLatestPictures", () => {
    it("should fetch metadata from the natural endpoint", () => {
      service.getLatestPictures();
      const req = httpMock.expectOne("https://epic.gsfc.nasa.gov/api/natural");
      expect(req.request.method).toBe("GET");
    });

    it("should build picture URLs from metadata dates", async () => {
      const metaDataList = [
        {
          identifier: "epic_1",
          image: "epic_1b",
          date: "2024-03-15 00:00:00",
          caption: "Test",
          version: "1.0",
          centroid_coordinates: { lat: 0, lon: 0 },
          dscovr_j2000_position: { x: 0, y: 0, z: 0 },
          lunar_j2000_position: { x: 0, y: 0, z: 0 },
          sun_j2000_position: { x: 0, y: 0, z: 0 },
          attitude_quaternions: { q0: 0, q1: 0, q2: 0, q3: 0 },
          coords: {
            centroid_coordinates: { lat: 0, lon: 0 },
            dscovr_j2000_position: { x: 0, y: 0, z: 0 },
            lunar_j2000_position: { x: 0, y: 0, z: 0 },
            sun_j2000_position: { x: 0, y: 0, z: 0 },
            attitude_quaternions: { q0: 0, q1: 0, q2: 0, q3: 0 },
          },
        },
      ];

      const promise = service.getLatestPictures();
      httpMock.expectOne("https://epic.gsfc.nasa.gov/api/natural").flush(metaDataList);
      const pictures = await promise;

      expect(pictures.length).toBe(1);
      expect(pictures[0].pictureUrl).toBe(
        "https://epic.gsfc.nasa.gov/archive/natural/2024/03/15/jpg/epic_1b.jpg"
      );
      expect(pictures[0].metaData.date instanceof Date).toBeTrue();
    });

    it("should pad single-digit month and day with leading zero", async () => {
      const metaDataList = [
        {
          identifier: "epic_2",
          image: "epic_2b",
          date: "2024-01-05 00:00:00",
          caption: "Test",
          version: "1.0",
          centroid_coordinates: { lat: 0, lon: 0 },
          dscovr_j2000_position: { x: 0, y: 0, z: 0 },
          lunar_j2000_position: { x: 0, y: 0, z: 0 },
          sun_j2000_position: { x: 0, y: 0, z: 0 },
          attitude_quaternions: { q0: 0, q1: 0, q2: 0, q3: 0 },
          coords: {
            centroid_coordinates: { lat: 0, lon: 0 },
            dscovr_j2000_position: { x: 0, y: 0, z: 0 },
            lunar_j2000_position: { x: 0, y: 0, z: 0 },
            sun_j2000_position: { x: 0, y: 0, z: 0 },
            attitude_quaternions: { q0: 0, q1: 0, q2: 0, q3: 0 },
          },
        },
      ];

      const promise = service.getLatestPictures();
      httpMock.expectOne("https://epic.gsfc.nasa.gov/api/natural").flush(metaDataList);
      const pictures = await promise;

      expect(pictures[0].pictureUrl).toContain("/2024/01/05/");
    });

    it("should handle double-digit month and day without extra padding", async () => {
      const metaDataList = [
        {
          identifier: "epic_3",
          image: "epic_3b",
          date: "2024-12-25 00:00:00",
          caption: "Test",
          version: "1.0",
          centroid_coordinates: { lat: 0, lon: 0 },
          dscovr_j2000_position: { x: 0, y: 0, z: 0 },
          lunar_j2000_position: { x: 0, y: 0, z: 0 },
          sun_j2000_position: { x: 0, y: 0, z: 0 },
          attitude_quaternions: { q0: 0, q1: 0, q2: 0, q3: 0 },
          coords: {
            centroid_coordinates: { lat: 0, lon: 0 },
            dscovr_j2000_position: { x: 0, y: 0, z: 0 },
            lunar_j2000_position: { x: 0, y: 0, z: 0 },
            sun_j2000_position: { x: 0, y: 0, z: 0 },
            attitude_quaternions: { q0: 0, q1: 0, q2: 0, q3: 0 },
          },
        },
      ];

      const promise = service.getLatestPictures();
      httpMock.expectOne("https://epic.gsfc.nasa.gov/api/natural").flush(metaDataList);
      const pictures = await promise;

      expect(pictures[0].pictureUrl).toContain("/2024/12/25/");
    });

    it("should process multiple metadata entries", async () => {
      const metaDataList = [
        {
          identifier: "a", image: "img_a", date: "2024-06-01 00:00:00",
          caption: "", version: "", centroid_coordinates: { lat: 0, lon: 0 },
          dscovr_j2000_position: { x: 0, y: 0, z: 0 },
          lunar_j2000_position: { x: 0, y: 0, z: 0 },
          sun_j2000_position: { x: 0, y: 0, z: 0 },
          attitude_quaternions: { q0: 0, q1: 0, q2: 0, q3: 0 },
          coords: {
            centroid_coordinates: { lat: 0, lon: 0 },
            dscovr_j2000_position: { x: 0, y: 0, z: 0 },
            lunar_j2000_position: { x: 0, y: 0, z: 0 },
            sun_j2000_position: { x: 0, y: 0, z: 0 },
            attitude_quaternions: { q0: 0, q1: 0, q2: 0, q3: 0 },
          },
        },
        {
          identifier: "b", image: "img_b", date: "2024-06-02 00:00:00",
          caption: "", version: "", centroid_coordinates: { lat: 0, lon: 0 },
          dscovr_j2000_position: { x: 0, y: 0, z: 0 },
          lunar_j2000_position: { x: 0, y: 0, z: 0 },
          sun_j2000_position: { x: 0, y: 0, z: 0 },
          attitude_quaternions: { q0: 0, q1: 0, q2: 0, q3: 0 },
          coords: {
            centroid_coordinates: { lat: 0, lon: 0 },
            dscovr_j2000_position: { x: 0, y: 0, z: 0 },
            lunar_j2000_position: { x: 0, y: 0, z: 0 },
            sun_j2000_position: { x: 0, y: 0, z: 0 },
            attitude_quaternions: { q0: 0, q1: 0, q2: 0, q3: 0 },
          },
        },
      ];

      const promise = service.getLatestPictures();
      httpMock.expectOne("https://epic.gsfc.nasa.gov/api/natural").flush(metaDataList);
      const pictures = await promise;

      expect(pictures.length).toBe(2);
      expect(pictures[0].pictureUrl).toContain("img_a");
      expect(pictures[1].pictureUrl).toContain("img_b");
    });
  });

  it("should handle HTTP error gracefully", async () => {
    const promise = service.getLatestPictures();
    httpMock.expectOne("https://epic.gsfc.nasa.gov/api/natural").error(
      new ProgressEvent("Network error")
    );
    await expectAsync(promise).toBeRejected();
  });
});
