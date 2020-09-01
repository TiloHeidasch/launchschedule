import { TestBed } from "@angular/core/testing";

import { SpacecraftParamStoreService } from "./spacecraft-param-store.service";

describe("SpacecraftParamStoreService", () => {
  let service: SpacecraftParamStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpacecraftParamStoreService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
