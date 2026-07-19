import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { PreviousEventService } from "./previous-events.service";

const mockEvents: any[] = [
  { id: "1", name: "SpaceX Starship IFT-1" },
  { id: "2", name: "JWST Launch" },
  { id: "3", name: "Artemis I Launch" },
];

describe("PreviousEventService", () => {
  let service: PreviousEventService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PreviousEventService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should cache data after first load", async () => {
    const p1 = service.getFirstPreviousEvents();
    httpMock.expectOne("assets/data/previouslaunches.json").flush(mockEvents);
    await p1;

    const p2 = service.getFirstPreviousEvents();
    httpMock.expectNone("assets/data/previouslaunches.json");
    const result = await p2;
    expect(result.events.length).toBe(3);
  });

  describe("getPreviousEventById", () => {
    it("should find event by id", async () => {
      const promise = service.getPreviousEventById("1");
      httpMock.expectOne("assets/data/previouslaunches.json").flush(mockEvents);
      const result = await promise;
      expect(result).toEqual(mockEvents[0]);
    });

    it("should return undefined for missing id", async () => {
      const promise = service.getPreviousEventById("999");
      httpMock.expectOne("assets/data/previouslaunches.json").flush(mockEvents);
      const result = await promise;
      expect(result).toBeUndefined();
    });
  });

  describe("getFirstPreviousEvents", () => {
    it("should return all events without search", async () => {
      const promise = service.getFirstPreviousEvents();
      httpMock.expectOne("assets/data/previouslaunches.json").flush(mockEvents);
      const result = await promise;
      expect(result.events.length).toBe(3);
      expect(result.max).toBe(3);
    });

    it("should filter by search term", async () => {
      const promise = service.getFirstPreviousEvents("Starship");
      httpMock.expectOne("assets/data/previouslaunches.json").flush(mockEvents);
      const result = await promise;
      expect(result.events.map((e: any) => e.name)).toEqual([
        "SpaceX Starship IFT-1",
      ]);
    });

    it("should return empty when no match", async () => {
      const promise = service.getFirstPreviousEvents("XXXXXXXX");
      httpMock.expectOne("assets/data/previouslaunches.json").flush(mockEvents);
      const result = await promise;
      expect(result.events.length).toBe(0);
    });

    it("should limit results to 24 per page", async () => {
      const manyEvents = Array.from({ length: 30 }, (_, i) => ({
        id: `${i}`,
        name: `Event ${i}`,
      }));
      const promise = service.getFirstPreviousEvents();
      httpMock.expectOne("assets/data/previouslaunches.json").flush(manyEvents);
      const result = await promise;
      expect(result.events.length).toBe(24);
      expect(result.max).toBe(30);
    });
  });

  describe("getNextPreviousEvents", () => {
    it("should return paginated results", async () => {
      const promise = service.getNextPreviousEvents(1);
      httpMock.expectOne("assets/data/previouslaunches.json").flush(mockEvents);
      const result = await promise;
      expect(result.events.length).toBe(2);
    });

    it("should return empty when offset exceeds data", async () => {
      const promise = service.getNextPreviousEvents(100);
      httpMock.expectOne("assets/data/previouslaunches.json").flush(mockEvents);
      const result = await promise;
      expect(result.events.length).toBe(0);
    });
  });
});
