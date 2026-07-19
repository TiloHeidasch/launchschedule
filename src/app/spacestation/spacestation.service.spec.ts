import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { SpacestationService } from "./spacestation.service";

const mockData: any[] = [
  { id: 1, name: "ISS", status: { id: 1 }, founded: "1998", orbit: "LEO", type: { id: 1 } },
  { id: 2, name: "Mir", status: { id: 2 }, founded: "1986", orbit: "LEO", type: { id: 1 } },
  { id: 3, name: "Tiangong", status: { id: 1 }, founded: "2021", orbit: "LEO", type: { id: 1 } },
];

describe("SpacestationService", () => {
  let service: SpacestationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SpacestationService);
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
    const p1 = service.getFirstSpacestations();
    httpMock.expectOne("assets/data/spacestations.json").flush(mockData);
    await p1;
    const p2 = service.getFirstSpacestations();
    httpMock.expectNone("assets/data/spacestations.json");
    await p2;
    expect(true).toBeTrue();
  });

  it("getSpacestationById should find by id", async () => {
    const promise = service.getSpacestationById("1");
    httpMock.expectOne("assets/data/spacestations.json").flush(mockData);
    const result = await promise;
    expect(result!.id).toBe(1);
    expect(result!.name).toBe("ISS");
  });

  it("getSpacestationById should return undefined for missing id", async () => {
    const promise = service.getSpacestationById("999");
    httpMock.expectOne("assets/data/spacestations.json").flush(mockData);
    const result = await promise;
    expect(result).toBeUndefined();
  });

  it("getFirstSpacestations should sort by status then founded desc", async () => {
    const promise = service.getFirstSpacestations();
    httpMock.expectOne("assets/data/spacestations.json").flush(mockData);
    const result = await promise;
    expect(result.spacestations.map((s: any) => s.name)).toEqual([
      "Tiangong",
      "ISS",
      "Mir",
    ]);
  });

  it("getFirstSpacestations should filter by search", async () => {
    const promise = service.getFirstSpacestations("ISS");
    httpMock.expectOne("assets/data/spacestations.json").flush(mockData);
    const result = await promise;
    expect(result.spacestations.length).toBe(1);
    expect(result.spacestations[0].name).toBe("ISS");
  });

  it("getFirstSpacestations should filter by status", async () => {
    const promise = service.getFirstSpacestations("", 2);
    httpMock.expectOne("assets/data/spacestations.json").flush(mockData);
    const result = await promise;
    expect(result.spacestations.length).toBe(1);
    expect(result.spacestations[0].name).toBe("Mir");
  });

  it("getFirstSpacestations should filter by orbit", async () => {
    const promise = service.getFirstSpacestations("", undefined, "LEO");
    httpMock.expectOne("assets/data/spacestations.json").flush(mockData);
    const result = await promise;
    expect(result.spacestations.length).toBe(3);
  });

  it("getNextSpacestations should paginate", async () => {
    const promise = service.getNextSpacestations(1);
    httpMock.expectOne("assets/data/spacestations.json").flush(mockData);
    const result = await promise;
    expect(result.spacestations.length).toBe(2);
  });

  it("getNextSpacestations should return empty beyond data", async () => {
    const promise = service.getNextSpacestations(100);
    httpMock.expectOne("assets/data/spacestations.json").flush(mockData);
    const result = await promise;
    expect(result.spacestations.length).toBe(0);
  });
});
