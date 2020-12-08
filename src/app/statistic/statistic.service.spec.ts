import { TestBed } from "@angular/core/testing";

import { StatisticService } from "./statistic.service";

describe("StatisticService", () => {
  let service: StatisticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatisticService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  it("should provide more than 1800 launches", () => {
    expect(service.getLaunches().length).toBeGreaterThan(1800);
  });
});
