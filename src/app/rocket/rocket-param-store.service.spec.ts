import { TestBed } from "@angular/core/testing";

import { RocketParamStoreService } from "./rocket-param-store.service";

describe("RocketParamStoreService", () => {
  let service: RocketParamStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RocketParamStoreService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
