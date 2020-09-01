import { TestBed } from "@angular/core/testing";

import { AgencyParamStoreService } from "./agency-param-store.service";

describe("AgencyParamStoreService", () => {
  let service: AgencyParamStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgencyParamStoreService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
