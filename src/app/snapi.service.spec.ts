import { TestBed } from "@angular/core/testing";

import { IonicModule } from "@ionic/angular";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { SnapiService } from "./snapi.service";

describe("SnapiService", () => {
  let service: SnapiService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [SnapiService],
    }).compileComponents();
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(SnapiService);
  });
  afterEach(() => {
    httpTestingController.verify();
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  describe("Articles", () => {
    it("should call getFirstArticles", () => {
      service.getFirstArticles();
      const res = httpTestingController.expectOne(
        "https://spaceflightnewsapi.net/api/v1/articles?limit=5&page=1"
      );
      expect(res.request.method).toBe("GET");
    });
    it("should call getFirstArticles with search", () => {
      service.getFirstArticles("search");
      const res = httpTestingController.expectOne(
        "https://spaceflightnewsapi.net/api/v1/articles?limit=5&page=1&search=search"
      );
      expect(res.request.method).toBe("GET");
    });
  });
  describe("Blogs", () => {
    it("should call getFirstBlogs", () => {
      service.getFirstBlogs();
      const res = httpTestingController.expectOne(
        "https://spaceflightnewsapi.net/api/v1/blogs?limit=5&page=1"
      );
      expect(res.request.method).toBe("GET");
    });
    it("should call getFirstBlogs with search", () => {
      service.getFirstBlogs("search");
      const res = httpTestingController.expectOne(
        "https://spaceflightnewsapi.net/api/v1/blogs?limit=5&page=1&search=search"
      );
      expect(res.request.method).toBe("GET");
    });
  });
});
