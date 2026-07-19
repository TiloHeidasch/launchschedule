import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { LocationService } from "./location.service";

const mockData: any[] = [
  { id: 1, name: "Kennedy Space Center", country_code: "USA", country: [{ name: "United States", alpha_3_code: "USA", alpha_2_code: "US" }] },
  { id: 2, name: "Baikonur Cosmodrome", country_code: "KAZ", country: [{ name: "Kazakhstan", alpha_3_code: "KAZ", alpha_2_code: "KZ" }] },
  { id: 3, name: "Guiana Space Centre", country_code: "FRA", country: [{ name: "France", alpha_3_code: "FRA", alpha_2_code: "FR" }] },
];

describe("LocationService", () => {
  let service: LocationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(LocationService);
    httpMock = TestBed.inject(HttpTestingController);
    (service as any).data = undefined;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should cache data after first load", async () => {
    const p1 = service.getFirstLocations();
    httpMock.expectOne("assets/data/locations.json").flush(mockData);
    await p1;
    const p2 = service.getFirstLocations();
    httpMock.expectNone("assets/data/locations.json");
    await p2;
    expect(true).toBeTrue();
  });

  it("getLocationById should find by id", async () => {
    const promise = service.getLocationById("1");
    httpMock.expectOne("assets/data/locations.json").flush(mockData);
    const result = await promise;
    expect(result!.id).toBe(1);
    expect(result!.name).toBe("Kennedy Space Center");
  });

  it("getLocationById should return undefined for missing id", async () => {
    const promise = service.getLocationById("999");
    httpMock.expectOne("assets/data/locations.json").flush(mockData);
    const result = await promise;
    expect(result).toBeUndefined();
  });

  it("getFirstLocations should sort by name", async () => {
    const promise = service.getFirstLocations();
    httpMock.expectOne("assets/data/locations.json").flush(mockData);
    const result = await promise;
    expect(result.locations.map((l: any) => l.name)).toEqual([
      "Baikonur Cosmodrome",
      "Guiana Space Centre",
      "Kennedy Space Center",
    ]);
  });

  it("getFirstLocations should filter by search", async () => {
    const promise = service.getFirstLocations("Kennedy");
    httpMock.expectOne("assets/data/locations.json").flush(mockData);
    const result = await promise;
    expect(result.locations.length).toBe(1);
    expect(result.locations[0].name).toBe("Kennedy Space Center");
  });

  it("getFirstLocations should filter by country code", async () => {
    const promise = service.getFirstLocations("", "FRA");
    httpMock.expectOne("assets/data/locations.json").flush(mockData);
    const result = await promise;
    expect(result.locations.length).toBe(1);
    expect(result.locations[0].name).toBe("Guiana Space Centre");
  });

  it("getFirstLocations should filter by country_code fallback", async () => {
    const promise = service.getFirstLocations("", "KAZ");
    httpMock.expectOne("assets/data/locations.json").flush(mockData);
    const result = await promise;
    expect(result.locations.length).toBe(1);
    expect(result.locations[0].name).toBe("Baikonur Cosmodrome");
  });

  it("getFirstLocations should return all when no country filter", async () => {
    const promise = service.getFirstLocations();
    httpMock.expectOne("assets/data/locations.json").flush(mockData);
    const result = await promise;
    expect(result.locations.length).toBe(3);
  });

  it("getNextLocations should paginate", async () => {
    const promise = service.getNextLocations(1);
    httpMock.expectOne("assets/data/locations.json").flush(mockData);
    const result = await promise;
    expect(result.locations.length).toBe(2);
  });
});
