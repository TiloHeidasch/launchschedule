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
  it("Variables should be initialized", () => {
    expect(service.agencies).toEqual([]);
    expect(service.featured).toBe(true);
    expect(service.countryCode).toBe("");
    expect(service.type).toBe("");
    expect(service.showFilter).toBe(false);
    expect(service.scrollY).toBe(0);
    expect(service.search).toBe(undefined);
  });
});
