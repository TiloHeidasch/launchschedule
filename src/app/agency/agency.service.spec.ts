import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { AgencyService } from "./agency.service";

const mockAgencies: any[] = [
  {
    id: 1,
    name: "NASA",
    abbrev: "NASA",
    administrator: "Bill Nelson",
    description: "US space agency",
    featured: true,
    type: { id: 1, name: "Government" },
    country_code: "USA",
    country: [{ name: "United States", alpha_3_code: "USA", alpha_2_code: "US" }],
  },
  {
    id: 2,
    name: "ESA",
    abbrev: "ESA",
    administrator: "Josef Aschbacher",
    description: "European space agency",
    featured: true,
    type: { id: 2, name: "Multinational" },
    country_code: "FRA",
    country: [{ name: "France", alpha_3_code: "FRA", alpha_2_code: "FR" }],
  },
  {
    id: 3,
    name: "SpaceX",
    abbrev: "SPX",
    administrator: "Elon Musk",
    description: "Private space company",
    featured: false,
    type: { id: 3, name: "Commercial" },
    country_code: "USA",
    country: [{ name: "United States", alpha_3_code: "USA", alpha_2_code: "US" }],
  },
  {
    id: 4,
    name: "Rocket Lab",
    abbrev: "RKL",
    administrator: "Peter Beck",
    description: "Small sat launcher",
    featured: true,
    type: null,
    country_code: "NZL",
    country: [{ name: "New Zealand", alpha_3_code: "NZL", alpha_2_code: "NZ" }],
  },
];

describe("AgencyService", () => {
  let service: AgencyService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AgencyService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should cache data after first load", async () => {
    const p1 = service.getFirstAgencies();
    httpMock.expectOne("assets/data/agencies.json").flush(mockAgencies);
    await p1;

    const p2 = service.getFirstAgencies();
    httpMock.expectNone("assets/data/agencies.json");
    const result2 = await p2;
    expect(result2.agencies.length).toBeGreaterThan(0);
  });

  describe("getAgencyById", () => {
    it("should find agency by id", async () => {
      const promise = service.getAgencyById("1");
      httpMock.expectOne("assets/data/agencies.json").flush(mockAgencies);
      const result = await promise;
      expect(result).toEqual(mockAgencies[0]);
    });

    it("should return undefined for missing id", async () => {
      const promise = service.getAgencyById("999");
      httpMock.expectOne("assets/data/agencies.json").flush(mockAgencies);
      const result = await promise;
      expect(result).toBeUndefined();
    });
  });

  describe("getFirstAgencies", () => {
    it("should return only featured agencies by default", async () => {
      const promise = service.getFirstAgencies();
      httpMock.expectOne("assets/data/agencies.json").flush(mockAgencies);
      const result = await promise;
      expect(result.agencies.map((a: any) => a.name)).toEqual([
        "NASA",
        "ESA",
        "Rocket Lab",
      ]);
      expect(result.max).toBe(4);
    });

    it("should search by name", async () => {
      const promise = service.getFirstAgencies("ESA");
      httpMock.expectOne("assets/data/agencies.json").flush(mockAgencies);
      const result = await promise;
      expect(result.agencies.map((a: any) => a.name)).toEqual(["ESA"]);
    });

    it("should search by abbrev", async () => {
      const promise = service.getFirstAgencies("SPX", false);
      httpMock.expectOne("assets/data/agencies.json").flush(mockAgencies);
      const result = await promise;
      expect(result.agencies.map((a: any) => a.name)).toEqual(["SpaceX"]);
    });

    it("should search by administrator", async () => {
      const promise = service.getFirstAgencies("Musk", false);
      httpMock.expectOne("assets/data/agencies.json").flush(mockAgencies);
      const result = await promise;
      expect(result.agencies.map((a: any) => a.name)).toEqual(["SpaceX"]);
    });

    it("should include non-featured when featured=false", async () => {
      const promise = service.getFirstAgencies(undefined, false);
      httpMock.expectOne("assets/data/agencies.json").flush(mockAgencies);
      const result = await promise;
      expect(result.agencies.map((a: any) => a.name)).toEqual(["SpaceX"]);
    });

    it("should filter by type name", async () => {
      const promise = service.getFirstAgencies("", false, "Commercial");
      httpMock.expectOne("assets/data/agencies.json").flush(mockAgencies);
      const result = await promise;
      expect(result.agencies.map((a: any) => a.name)).toEqual(["SpaceX"]);
    });

    it("should filter by country code via alpha_3_code", async () => {
      const promise = service.getFirstAgencies("", true, "", "USA");
      httpMock.expectOne("assets/data/agencies.json").flush(mockAgencies);
      const result = await promise;
      expect(result.agencies.map((a: any) => a.name)).toEqual(["NASA"]);
    });

    it("should limit results to 24 per page", async () => {
      const manyAgencies = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        name: `Agency ${i}`,
        abbrev: `A${i}`,
        administrator: "",
        description: "",
        featured: true,
        type: null,
        country_code: "USA",
      }));
      const promise = service.getFirstAgencies();
      httpMock.expectOne("assets/data/agencies.json").flush(manyAgencies);
      const result = await promise;
      expect(result.agencies.length).toBe(24);
      expect(result.max).toBe(30);
    });

    it("should handle null type in filter", async () => {
      const promise = service.getFirstAgencies("", true, "");
      httpMock.expectOne("assets/data/agencies.json").flush(mockAgencies);
      const result = await promise;
      expect(result.agencies.length).toBe(3);
    });
  });

  describe("getNextAgencies", () => {
    it("should return paginated results with offset", async () => {
      const promise = service.getNextAgencies(1);
      httpMock.expectOne("assets/data/agencies.json").flush(mockAgencies);
      const result = await promise;
      expect(result.agencies.length).toBe(2);
    });

    it("should return empty when offset exceeds data", async () => {
      const promise = service.getNextAgencies(100, "", false);
      httpMock.expectOne("assets/data/agencies.json").flush(mockAgencies);
      const result = await promise;
      expect(result.agencies.length).toBe(0);
    });
  });
});
