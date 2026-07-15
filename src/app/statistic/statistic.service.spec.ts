import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

import { StatisticService } from "./statistic.service";

describe("StatisticService", () => {
  let service: StatisticService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(StatisticService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  it("should provide launches", async () => {
    const promise = service.getLaunches();
    const req = httpMock.expectOne("assets/data/launches.json");
    req.flush([]);
    const launches = await promise;
    expect(launches.length).toBeGreaterThanOrEqual(0);
  });
});
