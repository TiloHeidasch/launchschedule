import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { IonicModule } from "@ionic/angular";
import { NewsOverviewPage } from "./news-overview.page";
import { NewsParamStoreService } from "./news-param-store.service";
import { SnapiService } from "../snapi.service";
import { NewsStorageService } from "./news-storage.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("NewsOverviewPage", () => {
  let component: NewsOverviewPage;
  let fixture: ComponentFixture<NewsOverviewPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsOverviewPage],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        NewsParamStoreService,
        NewsStorageService,
        { provide: SnapiService, useValue: {} },
      ],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have title set to News", () => {
    expect(component.title).toBe("News");
  });

  it("should have a store instance", () => {
    expect(component.store).toBeTruthy();
    expect(component.store instanceof NewsParamStoreService).toBe(true);
  });
});
