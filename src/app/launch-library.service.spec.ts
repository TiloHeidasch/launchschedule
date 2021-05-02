import { TestBed } from "@angular/core/testing";

import { LaunchLibraryService } from "./launch-library.service";
import { IonicModule } from "@ionic/angular";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { UpcomingPreviousAll } from "./types/upcoming-previous-all";

describe("LaunchLibraryService", () => {
  let service: LaunchLibraryService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [LaunchLibraryService],
    }).compileComponents();
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(LaunchLibraryService);
  });
  afterEach(() => {
    httpTestingController.verify();
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  describe("Dashboard", () => {
    describe("Starship", () => {
      it("calls getStarshipDashboard", () => {
        service.getStarshipDashboard();
        const res = httpTestingController.expectOne(
          "https://spacelaunchnow.me/api/ll/2.2.0/dashboard/starship"
        );
        expect(res.request.method).toBe("GET");
      });
    });
  });
  describe("Event", () => {
    it("calls getEventById", () => {
      service.getEventById("123");
      const res = httpTestingController.expectOne(
        "https://spacelaunchnow.me/api/ll/2.2.0/event/123"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstEvents", () => {
      service.getFirstEvents();
      const res = httpTestingController.expectOne(
        "https://spacelaunchnow.me/api/ll/2.2.0/event/?limit=25&offset=0&ordering=name"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstEvents with search", () => {
      service.getFirstEvents("search");
      const res = httpTestingController.expectOne(
        "https://spacelaunchnow.me/api/ll/2.2.0/event/?limit=25&search=search&offset=0&ordering=name"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstEvents with search and type", () => {
      service.getFirstEvents("search", 1);
      const res = httpTestingController.expectOne(
        "https://spacelaunchnow.me/api/ll/2.2.0/event/?limit=25&search=search&type=1&offset=0&ordering=name"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstEvents with search and type and upcoming", () => {
      service.getFirstEvents("search", 1, UpcomingPreviousAll.UPCOMING);
      const res = httpTestingController.expectOne(
        "https://spacelaunchnow.me/api/ll/2.2.0/event/upcoming/?limit=25&search=search&type=1&offset=0&ordering=name"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstEvents with search and type and previous", () => {
      service.getFirstEvents("search", 1, UpcomingPreviousAll.PREVIOUS);
      const res = httpTestingController.expectOne(
        "https://spacelaunchnow.me/api/ll/2.2.0/event/previous/?limit=25&search=search&type=1&offset=0&ordering=name"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstEvents with search and type and all", () => {
      service.getFirstEvents("search", 1, UpcomingPreviousAll.ALL);
      const res = httpTestingController.expectOne(
        "https://spacelaunchnow.me/api/ll/2.2.0/event/?limit=25&search=search&type=1&offset=0&ordering=name"
      );
      expect(res.request.method).toBe("GET");
    });
  });
  describe("Launch", () => {
    it("calls getLaunchById", () => {
      service.getLaunchById("123");
      const res = httpTestingController.expectOne(
        "https://spacelaunchnow.me/api/ll/2.2.0/launch/123"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstLaunches", () => {
      service.getFirstLaunches();
      const res = httpTestingController.expectOne(
        "https://spacelaunchnow.me/api/ll/2.2.0/launch/?limit=25&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstLaunches with search", () => {
      service.getFirstLaunches("search");
      const res = httpTestingController.expectOne(
        "https://spacelaunchnow.me/api/ll/2.2.0/launch/?limit=25&search=search&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstLaunches with search and startDate", () => {
      service.getFirstLaunches("search", new Date("2021-01-01"));
      const res = httpTestingController.expectOne(
        "https://spacelaunchnow.me/api/ll/2.2.0/launch/?limit=25&search=search&net__gte=2021-01-01T00:00:00.000Z&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });
    it("calls getFirstLaunches with search and startDate and endDate", () => {
      service.getFirstLaunches(
        "search",
        new Date("2021-01-01"),
        new Date("2021-01-01")
      );
      const res = httpTestingController.expectOne(
        "https://spacelaunchnow.me/api/ll/2.2.0/launch/?limit=25&search=search&net__gte=2021-01-01T00:00:00.000Z&net__lte=2021-01-01T00:00:00.000Z&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });
    it("calls getFirstLaunches with search and startDate and endDate and upcoming", () => {
      service.getFirstLaunches(
        "search",
        new Date("2021-01-01"),
        new Date("2021-01-01"),
        UpcomingPreviousAll.UPCOMING
      );
      const res = httpTestingController.expectOne(
        "https://spacelaunchnow.me/api/ll/2.2.0/launch/upcoming/?limit=25&search=search&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });
    it("calls getFirstLaunches with search and startDate and endDate and previous", () => {
      service.getFirstLaunches(
        "search",
        new Date("2021-01-01"),
        new Date("2021-01-01"),
        UpcomingPreviousAll.PREVIOUS
      );
      const res = httpTestingController.expectOne(
        "https://spacelaunchnow.me/api/ll/2.2.0/launch/previous/?limit=25&search=search&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });
    it("calls getFirstLaunches with search and startDate and endDate and all", () => {
      service.getFirstLaunches(
        "search",
        new Date("2021-01-01"),
        new Date("2021-01-01"),
        UpcomingPreviousAll.ALL
      );
      const res = httpTestingController.expectOne(
        "https://spacelaunchnow.me/api/ll/2.2.0/launch/?limit=25&search=search&net__gte=2021-01-01T00:00:00.000Z&net__lte=2021-01-01T00:00:00.000Z&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });
  });
});
