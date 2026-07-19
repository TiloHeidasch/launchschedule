import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { RocketService } from "./rocket.service";

const mockData: any[] = [
  { id: 1, name: "Falcon 9", full_name: "Falcon 9 Block 5", alias: "F9", families: [{ name: "Falcon" }], family: "" },
  { id: 2, name: "Atlas V", full_name: "Atlas V 401", alias: "AV", families: [{ name: "Atlas" }], family: "" },
  { id: 3, name: "Soyuz", full_name: "Soyuz 2.1a", alias: "SOZ", families: [], family: "Soyuz" },
];

describe("RocketService", () => {
  let service: RocketService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RocketService);
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
    const p1 = service.getFirstRockets();
    httpMock.expectOne("assets/data/rockets.json").flush(mockData);
    await p1;
    const p2 = service.getFirstRockets();
    httpMock.expectNone("assets/data/rockets.json");
    await p2;
    expect(true).toBeTrue();
  });

  it("getRocketById should find by id", async () => {
    const promise = service.getRocketById("1");
    httpMock.expectOne("assets/data/rockets.json").flush(mockData);
    const result = await promise;
    expect(result!.id).toBe(1);
    expect(result!.name).toBe("Falcon 9");
  });

  it("getRocketById should return undefined for missing id", async () => {
    const promise = service.getRocketById("999");
    httpMock.expectOne("assets/data/rockets.json").flush(mockData);
    const result = await promise;
    expect(result).toBeUndefined();
  });

  it("getFirstRockets should filter by name", async () => {
    const promise = service.getFirstRockets("Falcon 9");
    httpMock.expectOne("assets/data/rockets.json").flush(mockData);
    const result = await promise;
    expect(result.rockets.length).toBe(1);
    expect(result.rockets[0].name).toBe("Falcon 9");
  });

  it("getFirstRockets should filter by full_name", async () => {
    const promise = service.getFirstRockets("Block 5");
    httpMock.expectOne("assets/data/rockets.json").flush(mockData);
    const result = await promise;
    expect(result.rockets.length).toBe(1);
  });

  it("getFirstRockets should filter by family array name", async () => {
    const promise = service.getFirstRockets("Falcon");
    httpMock.expectOne("assets/data/rockets.json").flush(mockData);
    const result = await promise;
    expect(result.rockets.length).toBe(1);
    expect(result.rockets[0].name).toBe("Falcon 9");
  });

  it("getFirstRockets should filter by family string", async () => {
    const promise = service.getFirstRockets("Soyuz");
    httpMock.expectOne("assets/data/rockets.json").flush(mockData);
    const result = await promise;
    expect(result.rockets.length).toBe(1);
    expect(result.rockets[0].name).toBe("Soyuz");
  });

  it("getFirstRockets should filter by alias", async () => {
    const promise = service.getFirstRockets("AV");
    httpMock.expectOne("assets/data/rockets.json").flush(mockData);
    const result = await promise;
    expect(result.rockets.length).toBe(1);
  });

  it("getNextRockets should paginate", async () => {
    const many = Array.from({ length: 30 }, (_, i) => ({ id: i, name: `Rocket ${i}`, full_name: `Rocket ${i}`, alias: `R${i}`, families: [], family: "" }));
    const promise = service.getNextRockets(0);
    httpMock.expectOne("assets/data/rockets.json").flush(many);
    const result = await promise;
    expect(result.rockets.length).toBe(24);
    expect(result.max).toBe(30);
  });

  it("getNextRockets should offset correctly", async () => {
    const promise = service.getNextRockets(2);
    httpMock.expectOne("assets/data/rockets.json").flush(mockData);
    const result = await promise;
    expect(result.rockets.length).toBe(1);
  });
});
