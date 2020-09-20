import { TestBed } from "@angular/core/testing";

import { NewsParamStoreService } from "./news-param-store.service";

describe("NewsParamStoreService", () => {
  let service: NewsParamStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsParamStoreService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
