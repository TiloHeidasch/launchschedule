import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { MarsPhotosService } from "./mars-photos.service";

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
    it("should call getLatestCuriosityPhotos", () => {
      service.getLatestCuriosityPhotos();
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;
      const day = today.getDate();
      const res = httpTestingController.expectOne(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" +
          year +
          "-" +
          month +
          "-" +
          day +
          "&api_key=DEMO_KEY"
      );
      expect(res.request.method).toBe("GET");
    });
  });
});
