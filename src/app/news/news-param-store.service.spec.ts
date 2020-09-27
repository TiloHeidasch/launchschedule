import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { NewsParamStoreService } from "./news-param-store.service";

describe("NewsParamStoreService", () => {
  let service: NewsParamStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [NewsParamStoreService],
    }).compileComponents();
    service = TestBed.inject(NewsParamStoreService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
