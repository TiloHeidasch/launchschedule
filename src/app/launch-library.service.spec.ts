import { TestBed } from "@angular/core/testing";

import { LaunchLibraryService } from "./launch-library.service";
import { IonicModule } from "@ionic/angular";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { UpcomingPreviousAll } from "./types/upcoming-previous-all";
import { Active } from "./types/active";
import { Reusable } from "./types/reusable";
import { HumanRated } from "./types/human-rated";

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
  describe("Agency", () => {
    it("calls getAgencyById", () => {
      service.getAgencyById("225");
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/agencies/225?mode=detailed"
      );
      expect(res.request.method).toBe("GET");
    });
    it("calls getFirstAgencies", () => {
      service.getFirstAgencies();
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/agencies/?mode=detailed&limit=13&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });
    it("calls getFirstAgencies with search", () => {
      service.getFirstAgencies("search");
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/agencies/?mode=detailed&limit=13&search=search&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });
    it("calls getFirstAgencies with search and featured", () => {
      service.getFirstAgencies("search", true);
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/agencies/?mode=detailed&limit=13&search=search&featured=true&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });
    it("calls getFirstAgencies with search and not featured", () => {
      service.getFirstAgencies("search", false);
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/agencies/?mode=detailed&limit=13&search=search&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });
    it("calls getFirstAgencies with search and not featured and type", () => {
      service.getFirstAgencies("search", false, "type");
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/agencies/?mode=detailed&limit=13&search=search&agency_type=type&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });
    it("calls getFirstAgencies with search and featured and type", () => {
      service.getFirstAgencies("search", true, "type");
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/agencies/?mode=detailed&limit=13&search=search&featured=true&agency_type=type&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });
    it("calls getFirstAgencies with search and not featured and type and countryCode", () => {
      service.getFirstAgencies("search", false, "type", "countryCode");
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/agencies/?mode=detailed&limit=13&search=search&agency_type=type&country_code=countryCode&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });
    it("calls getFirstAgencies with search and featured and type and countryCode", () => {
      service.getFirstAgencies("search", true, "type", "countryCode");
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/agencies/?mode=detailed&limit=13&search=search&featured=true&agency_type=type&country_code=countryCode&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });
  });
  describe("Astronaut", () => {
    it("calls getAstronautById", () => {
      service.getAstronautById("123");
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/astronaut/123?mode=detailed"
      );
      expect(res.request.method).toBe("GET");
    });
    it("calls getFirstAstronauts", () => {
      service.getFirstAstronauts();
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/astronaut/?limit=20&offset=0&ordering=name"
      );
      expect(res.request.method).toBe("GET");
    });
    it("calls getFirstAstronauts with search", () => {
      service.getFirstAstronauts("search");
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/astronaut/?limit=20&search=search&offset=0&ordering=name"
      );
      expect(res.request.method).toBe("GET");
    });
    it("calls getFirstAstronauts with search and status", () => {
      service.getFirstAstronauts("search", 1);
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/astronaut/?limit=20&search=search&status=1&offset=0&ordering=name"
      );
      expect(res.request.method).toBe("GET");
    });
  });
  describe("Event", () => {
    it("calls getEventById", () => {
      service.getEventById("123");
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/event/123"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstEvents", () => {
      service.getFirstEvents();
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/event/?limit=10&offset=0&ordering=name"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstEvents with search", () => {
      service.getFirstEvents("search");
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/event/?limit=10&search=search&offset=0&ordering=name"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstEvents with search and type", () => {
      service.getFirstEvents("search", 1);
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/event/?limit=10&search=search&type=1&offset=0&ordering=name"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstEvents with search and type and upcoming", () => {
      service.getFirstEvents("search", 1, UpcomingPreviousAll.UPCOMING);
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/event/upcoming/?limit=10&search=search&type=1&offset=0&ordering=name"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstEvents with search and type and previous", () => {
      service.getFirstEvents("search", 1, UpcomingPreviousAll.PREVIOUS);
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/event/previous/?limit=10&search=search&type=1&offset=0&ordering=name"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstEvents with search and type and all", () => {
      service.getFirstEvents("search", 1, UpcomingPreviousAll.ALL);
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/event/?limit=10&search=search&type=1&offset=0&ordering=name"
      );
      expect(res.request.method).toBe("GET");
    });
  });
  describe("Launch", () => {
    it("calls getLaunchById", () => {
      service.getLaunchById("123");
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/launch/123"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstLaunches", () => {
      service.getFirstLaunches();
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/launch/?limit=10&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstLaunches with search", () => {
      service.getFirstLaunches("search");
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/launch/?limit=10&search=search&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstLaunches with search and startDate", () => {
      service.getFirstLaunches("search", new Date("2020-01-01"));
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/launch/?limit=10&search=search&net__gte=2020-1-1&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });
    it("calls getFirstLaunches with search and startDate and endDate", () => {
      service.getFirstLaunches(
        "search",
        new Date("2020-01-01"),
        new Date("2020-01-01")
      );
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/launch/?limit=10&search=search&net__gte=2020-1-1&net__lte=2020-1-1&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });
    it("calls getFirstLaunches with search and startDate and endDate and upcoming", () => {
      service.getFirstLaunches(
        "search",
        new Date("2020-01-01"),
        new Date("2020-01-01"),
        UpcomingPreviousAll.UPCOMING
      );
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/launch/upcoming/?limit=10&search=search&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });
    it("calls getFirstLaunches with search and startDate and endDate and previous", () => {
      service.getFirstLaunches(
        "search",
        new Date("2020-01-01"),
        new Date("2020-01-01"),
        UpcomingPreviousAll.PREVIOUS
      );
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/launch/previous/?limit=10&search=search&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });
    it("calls getFirstLaunches with search and startDate and endDate and all", () => {
      service.getFirstLaunches(
        "search",
        new Date("2020-01-01"),
        new Date("2020-01-01"),
        UpcomingPreviousAll.ALL
      );
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/launch/?limit=10&search=search&net__gte=2020-1-1&net__lte=2020-1-1&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });
  });
  describe("Location", () => {
    it("calls getLocationById", () => {
      service.getLocationById("123");
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/location/123"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstLocations", () => {
      service.getFirstLocations();
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/location/?limit=10&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstLocations with search", () => {
      service.getFirstLocations("search");
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/location/?limit=10&search=search&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstLocations with search and countryCode", () => {
      service.getFirstLocations("search", "countryCode");
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/location/?limit=10&search=search&country_code=countryCode&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });
  });
  describe("Pad", () => {
    it("calls getPadById", () => {
      service.getPadById("123");
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/pad/123"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstPads", () => {
      service.getFirstPads();
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/pad/?limit=10&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstPads with search", () => {
      service.getFirstPads("search");
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/pad/?limit=10&search=search&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });
  });
  describe("Rocket", () => {
    it("calls getRocketById", () => {
      service.getRocketById("123");
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/config/launcher/123"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstRockets", () => {
      service.getFirstRockets();
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/config/launcher/?limit=10&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstRockets with search", () => {
      service.getFirstRockets("search");
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/config/launcher/?limit=10&search=search&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstRockets with search and ACTIVE", () => {
      service.getFirstRockets("search", Active.ACTIVE);
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/config/launcher/?limit=10&search=search&active=true&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstRockets with search and DECOMISSIONED", () => {
      service.getFirstRockets("search", Active.DECOMISSIONED);
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/config/launcher/?limit=10&search=search&active=false&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstRockets with search and ALL", () => {
      service.getFirstRockets("search", Active.ALL);
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/config/launcher/?limit=10&search=search&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstRockets with search and ALL and ALL", () => {
      service.getFirstRockets("search", Active.ALL, Reusable.ALL);
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/config/launcher/?limit=10&search=search&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstRockets with search and ALL and EXPENDABLE", () => {
      service.getFirstRockets("search", Active.ALL, Reusable.EXPENDABLE);
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/config/launcher/?limit=10&search=search&reusable=false&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstRockets with search and ALL and REUSABLE", () => {
      service.getFirstRockets("search", Active.ALL, Reusable.REUSABLE);
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/config/launcher/?limit=10&search=search&reusable=true&offset=0"
      );
      expect(res.request.method).toBe("GET");
    });
  });
  describe("Spacecraft", () => {
    it("calls getSpacecraftById", () => {
      service.getSpacecraftById("123");
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/config/spacecraft/123"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstSpacecrafts", () => {
      service.getFirstSpacecrafts();
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/config/spacecraft/?limit=10&offset=0&ordering=name"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstSpacecrafts with search", () => {
      service.getFirstSpacecrafts("search");
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/config/spacecraft/?limit=10&search=search&offset=0&ordering=name"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstSpacecrafts with search and ALL", () => {
      service.getFirstSpacecrafts("search", Active.ALL);
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/config/spacecraft/?limit=10&search=search&offset=0&ordering=name"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstSpacecrafts with search and ACTIVE", () => {
      service.getFirstSpacecrafts("search", Active.ACTIVE);
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/config/spacecraft/?limit=10&search=search&in_use=true&offset=0&ordering=name"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstSpacecrafts with search and DECOMISSIONED", () => {
      service.getFirstSpacecrafts("search", Active.DECOMISSIONED);
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/config/spacecraft/?limit=10&search=search&in_use=false&offset=0&ordering=name"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstSpacecrafts with search and ALL and ALL", () => {
      service.getFirstSpacecrafts("search", Active.ALL, HumanRated.ALL);
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/config/spacecraft/?limit=10&search=search&offset=0&ordering=name"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstSpacecrafts with search and ALL and CARGO", () => {
      service.getFirstSpacecrafts("search", Active.ALL, HumanRated.CARGO);
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/config/spacecraft/?limit=10&search=search&human_rated=false&offset=0&ordering=name"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstSpacecrafts with search and ALL and HUMAN", () => {
      service.getFirstSpacecrafts("search", Active.ALL, HumanRated.HUMAN);
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/config/spacecraft/?limit=10&search=search&human_rated=true&offset=0&ordering=name"
      );
      expect(res.request.method).toBe("GET");
    });
  });
  describe("Spacestation", () => {
    it("calls getSpacestationById", () => {
      service.getSpacestationById("123");
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/spacestation/123"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstSpacestations", () => {
      service.getFirstSpacestations();
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/spacestation/?limit=10&offset=0&ordering=name"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstSpacestations with search", () => {
      service.getFirstSpacestations("search");
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/spacestation/?limit=10&search=search&offset=0&ordering=name"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstSpacestations with search and status", () => {
      service.getFirstSpacestations("search", 1);
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/spacestation/?limit=10&search=search&status=1&offset=0&ordering=name"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstSpacestations with search and status and orbit", () => {
      service.getFirstSpacestations("search", 1, 2);
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/spacestation/?limit=10&search=search&status=1&orbit=2&offset=0&ordering=name"
      );
      expect(res.request.method).toBe("GET");
    });

    it("calls getFirstSpacestations with search and status and orbit and type", () => {
      service.getFirstSpacestations("search", 1, 2, 3);
      const res = httpTestingController.expectOne(
        "https://lldev.thespacedevs.com/2.1.0/spacestation/?limit=10&search=search&status=1&orbit=2&type=3&offset=0&ordering=name"
      );
      expect(res.request.method).toBe("GET");
    });
  });
});
