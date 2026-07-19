import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { AstronautService } from "./astronaut.service";

const mockData: any[] = [
  { id: 1, name: "Neil Armstrong" },
  { id: 2, name: "Buzz Aldrin" },
  { id: 3, name: "Michael Collins" },
];

describe("AstronautService", () => {
  let service: AstronautService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AstronautService);
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
    const p1 = service.getFirstAstronauts();
    httpMock.expectOne("assets/data/astronauts.json").flush(mockData);
    await p1;
    const p2 = service.getFirstAstronauts();
    httpMock.expectNone("assets/data/astronauts.json");
    await p2;
    expect(true).toBeTrue();
  });

  it("getAstronautById should find by id", async () => {
    const promise = service.getAstronautById("1");
    httpMock.expectOne("assets/data/astronauts.json").flush(mockData);
    const result = await promise;
    expect(result!.id).toBe(1);
    expect(result!.name).toBe("Neil Armstrong");
  });

  it("getAstronautById should return undefined for missing id", async () => {
    const promise = service.getAstronautById("999");
    httpMock.expectOne("assets/data/astronauts.json").flush(mockData);
    const result = await promise;
    expect(result).toBeUndefined();
  });

  it("getFirstAstronauts should sort by name", async () => {
    const promise = service.getFirstAstronauts();
    httpMock.expectOne("assets/data/astronauts.json").flush(mockData);
    const result = await promise;
    expect(result.astronauts.map((a: any) => a.name)).toEqual([
      "Buzz Aldrin",
      "Michael Collins",
      "Neil Armstrong",
    ]);
  });

  it("getFirstAstronauts should filter by search", async () => {
    const promise = service.getFirstAstronauts("Armstrong");
    httpMock.expectOne("assets/data/astronauts.json").flush(mockData);
    const result = await promise;
    expect(result.astronauts.length).toBe(1);
    expect(result.astronauts[0].name).toBe("Neil Armstrong");
  });

  it("getFirstAstronauts should return empty when no match", async () => {
    const promise = service.getFirstAstronauts("XXXXXXXX");
    httpMock.expectOne("assets/data/astronauts.json").flush(mockData);
    const result = await promise;
    expect(result.astronauts.length).toBe(0);
  });

  it("getNextAstronauts should paginate", async () => {
    const many = Array.from({ length: 30 }, (_, i) => ({ id: i, name: `Astr ${i}` }));
    const promise = service.getNextAstronauts(0);
    httpMock.expectOne("assets/data/astronauts.json").flush(many);
    const result = await promise;
    expect(result.astronauts.length).toBe(24);
    expect(result.max).toBe(30);
  });

  it("getNextAstronauts should offset correctly", async () => {
    const promise = service.getNextAstronauts(2);
    httpMock.expectOne("assets/data/astronauts.json").flush(mockData);
    const result = await promise;
    expect(result.astronauts.length).toBe(1);
  });
});
