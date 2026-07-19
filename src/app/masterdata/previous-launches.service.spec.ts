import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { PreviousLaunchService } from "./previous-launches.service";

const mockLaunches: any[] = [
  { id: "1", name: "Falcon 9 Block 5 | Starlink 4-1" },
  { id: "2", name: "Atlas V | USSF-8" },
  { id: "3", name: "Soyuz 2.1a | Progress MS-18" },
];

describe("PreviousLaunchService", () => {
  let service: PreviousLaunchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PreviousLaunchService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should cache data after first load", async () => {
    const p1 = service.getFirstPreviousLaunchs();
    httpMock.expectOne("assets/data/previouslaunches.json").flush(mockLaunches);
    await p1;

    const p2 = service.getFirstPreviousLaunchs();
    httpMock.expectNone("assets/data/previouslaunches.json");
    const result = await p2;
    expect(result.previousLaunches.length).toBe(3);
  });

  describe("getPreviousLaunchById", () => {
    it("should find launch by id", async () => {
      const promise = service.getPreviousLaunchById("1");
      httpMock.expectOne("assets/data/previouslaunches.json").flush(mockLaunches);
      const result = await promise;
      expect(result).toEqual(mockLaunches[0]);
    });

    it("should return undefined for missing id", async () => {
      const promise = service.getPreviousLaunchById("999");
      httpMock.expectOne("assets/data/previouslaunches.json").flush(mockLaunches);
      const result = await promise;
      expect(result).toBeUndefined();
    });
  });

  describe("getFirstPreviousLaunchs", () => {
    it("should return all launches without search", async () => {
      const promise = service.getFirstPreviousLaunchs();
      httpMock.expectOne("assets/data/previouslaunches.json").flush(mockLaunches);
      const result = await promise;
      expect(result.previousLaunches.length).toBe(3);
      expect(result.max).toBe(3);
    });

    it("should filter by search term", async () => {
      const promise = service.getFirstPreviousLaunchs("Starlink");
      httpMock.expectOne("assets/data/previouslaunches.json").flush(mockLaunches);
      const result = await promise;
      expect(result.previousLaunches.map((l: any) => l.name)).toEqual([
        "Falcon 9 Block 5 | Starlink 4-1",
      ]);
    });

    it("should return empty when no match", async () => {
      const promise = service.getFirstPreviousLaunchs("XXXXXXXX");
      httpMock.expectOne("assets/data/previouslaunches.json").flush(mockLaunches);
      const result = await promise;
      expect(result.previousLaunches.length).toBe(0);
    });

    it("should limit results to 24 per page", async () => {
      const manyLaunches = Array.from({ length: 30 }, (_, i) => ({
        id: `${i}`,
        name: `Launch ${i}`,
      }));
      const promise = service.getFirstPreviousLaunchs();
      httpMock.expectOne("assets/data/previouslaunches.json").flush(manyLaunches);
      const result = await promise;
      expect(result.previousLaunches.length).toBe(24);
      expect(result.max).toBe(30);
    });
  });

  describe("getNextPreviousLaunchs", () => {
    it("should return paginated results", async () => {
      const promise = service.getNextPreviousLaunchs(1);
      httpMock.expectOne("assets/data/previouslaunches.json").flush(mockLaunches);
      const result = await promise;
      expect(result.previousLaunches.length).toBe(2);
    });

    it("should return empty when offset exceeds data", async () => {
      const promise = service.getNextPreviousLaunchs(100);
      httpMock.expectOne("assets/data/previouslaunches.json").flush(mockLaunches);
      const result = await promise;
      expect(result.previousLaunches.length).toBe(0);
    });
  });
});
