import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { ApodService } from "./apod.service";

describe("ApodService", () => {
  let service: ApodService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [ApodService],
    }).compileComponents();
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ApodService);
  });
  afterEach(() => {
    httpTestingController.verify();
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  describe("Astronomy Picture of the Day", () => {
    it("should call getAstronomyPictureOfTheDay", () => {
      service.getAstronomyPictureOfTheDay();
      const res = httpTestingController.expectOne(
        "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
      );
      expect(res.request.method).toBe("GET");
    });
  });
});
