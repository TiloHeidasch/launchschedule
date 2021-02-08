import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { EpicService } from "./epic.service";

describe("EpicService", () => {
  let service: EpicService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [EpicService],
    }).compileComponents();
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(EpicService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  
  describe("EPIC Blue Marble Photos", () => {
    it("should call for Metadata", () => {
      service.getLatestPictures();
      const res = httpTestingController.expectOne(
        "https://epic.gsfc.nasa.gov/api/natural"
      );
      expect(res.request.method).toBe("GET");
    });
  });
});
