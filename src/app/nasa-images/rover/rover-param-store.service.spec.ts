import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { RoverParamStoreService } from "./rover-param-store.service";

describe("RoverParamStoreService", () => {
  let service: RoverParamStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [RoverParamStoreService],
    }).compileComponents();
    service = TestBed.inject(RoverParamStoreService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
