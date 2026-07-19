import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { PadService } from "./pad.service";

const mockData: any[] = [
  { id: 1, name: "LC-39A", location: { name: "Kennedy Space Center" } },
  { id: 2, name: "SLC-40", location: { name: "Cape Canaveral SFS" } },
  { id: 3, name: "Baikonur LC-1", location: { name: "Baikonur Cosmodrome" } },
];

describe("PadService", () => {
  let service: PadService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PadService);
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
    const p1 = service.getFirstPads();
    httpMock.expectOne("assets/data/pads.json").flush(mockData);
    await p1;
    const p2 = service.getFirstPads();
    httpMock.expectNone("assets/data/pads.json");
    await p2;
    expect(true).toBeTrue();
  });

  it("getPadById should find by id", async () => {
    const promise = service.getPadById("1");
    httpMock.expectOne("assets/data/pads.json").flush(mockData);
    const result = await promise;
    expect(result!.id).toBe(1);
    expect(result!.name).toBe("LC-39A");
  });

  it("getPadById should return undefined for missing id", async () => {
    const promise = service.getPadById("999");
    httpMock.expectOne("assets/data/pads.json").flush(mockData);
    const result = await promise;
    expect(result).toBeUndefined();
  });

  it("getFirstPads should sort by location name", async () => {
    const promise = service.getFirstPads();
    httpMock.expectOne("assets/data/pads.json").flush(mockData);
    const result = await promise;
    expect(result.pads.map((p: any) => p.name)).toEqual([
      "Baikonur LC-1",
      "SLC-40",
      "LC-39A",
    ]);
  });

  it("getFirstPads should filter by search", async () => {
    const promise = service.getFirstPads("LC-39");
    httpMock.expectOne("assets/data/pads.json").flush(mockData);
    const result = await promise;
    expect(result.pads.length).toBe(1);
    expect(result.pads[0].name).toBe("LC-39A");
  });

  it("getFirstPads should return empty when no match", async () => {
    const promise = service.getFirstPads("XXXXXXXX");
    httpMock.expectOne("assets/data/pads.json").flush(mockData);
    const result = await promise;
    expect(result.pads.length).toBe(0);
  });

  it("getNextPads should paginate", async () => {
    const many = Array.from({ length: 30 }, (_, i) => ({ id: i, name: `Pad ${i}`, location: { name: `Loc ${i}` } }));
    const promise = service.getNextPads(0);
    httpMock.expectOne("assets/data/pads.json").flush(many);
    const result = await promise;
    expect(result.pads.length).toBe(24);
    expect(result.max).toBe(30);
  });

  it("getNextPads should offset correctly", async () => {
    const promise = service.getNextPads(2);
    httpMock.expectOne("assets/data/pads.json").flush(mockData);
    const result = await promise;
    expect(result.pads.length).toBe(1);
  });
});
