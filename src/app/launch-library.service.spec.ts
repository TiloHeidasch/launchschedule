import { TestBed } from "@angular/core/testing";

import { LaunchLibraryService } from "./launch-library.service";
import { IonicModule } from "@ionic/angular";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("LaunchLibraryService", () => {
  let service: LaunchLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [LaunchLibraryService],
    }).compileComponents();
    service = TestBed.inject(LaunchLibraryService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
