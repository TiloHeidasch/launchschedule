import { TestBed } from "@angular/core/testing";

import { PadParamStoreService } from "./pad-param-store.service";

describe("PadParamStoreService", () => {
  let service: PadParamStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PadParamStoreService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
