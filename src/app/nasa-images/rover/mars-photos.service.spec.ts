import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { MarsPhotosService, Rover } from "./mars-photos.service";

describe("MarsPhotosService", () => {
  let service: MarsPhotosService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [MarsPhotosService],
    }).compileComponents();
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(MarsPhotosService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  describe("Curiosity Mars Photos", () => {
    it("should call getPhotosForSol", () => {
      service.getPhotosForSol(Rover.CURIOSITY, 1);
      const res = httpTestingController.expectOne(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1&api_key=DEMO_KEY"
      );
      expect(res.request.method).toBe("GET");
    });
  });
  describe("Perseverance Mars Photos", () => {
    it("should call getPhotosForSol", () => {
      service.getPhotosForSol(Rover.PERSEVERANCE, 1);
      const res = httpTestingController.expectOne(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=1&api_key=DEMO_KEY"
      );
      expect(res.request.method).toBe("GET");
    });
  });
});
