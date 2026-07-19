import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { IonicModule } from "@ionic/angular";
import { AgencyOverviewPage } from "./agency-overview.page";
import { AgencyParamStoreService } from "./agency-param-store.service";
import { AgencyService } from "./agency.service";

describe("AgencyOverviewPage", () => {
  let component: AgencyOverviewPage;
  let fixture: ComponentFixture<AgencyOverviewPage>;
  let agencyServiceSpy: jasmine.SpyObj<AgencyService>;

  beforeEach(() => {
    agencyServiceSpy = jasmine.createSpyObj("AgencyService", [
      "getFirstAgencies",
      "getNextAgencies",
    ]);
    agencyServiceSpy.getFirstAgencies.and.returnValue(
      Promise.resolve({ agencies: [], max: 0 }),
    );
    agencyServiceSpy.getNextAgencies.and.returnValue(
      Promise.resolve({ agencies: [], max: 0 }),
    );

    TestBed.configureTestingModule({
      declarations: [AgencyOverviewPage],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        AgencyParamStoreService,
        { provide: AgencyService, useValue: agencyServiceSpy },
      ],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AgencyOverviewPage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it("should have title set to Agencies", () => {
    expect(component.title).toBe("Agencies");
  });

  it("ngOnInit should load first agencies when store is empty", () => {
    fixture.detectChanges();
    expect(agencyServiceSpy.getFirstAgencies).toHaveBeenCalled();
  });

  it("ngOnInit should not load when agencies already in store", () => {
    component.store.agencies = [{ id: 1 }] as any[];
    fixture.detectChanges();
    expect(agencyServiceSpy.getFirstAgencies).not.toHaveBeenCalled();
  });

  it("logScrolling should update scrollY in store", () => {
    component.logScrolling({ detail: { currentY: 150 } });
    expect(component.store.scrollY).toBe(150);
  });

  it("loadFirst should call service and populate agencies", async () => {
    const mockAgencies = [{ id: 1, name: "NASA" }];
    agencyServiceSpy.getFirstAgencies.and.returnValue(
      Promise.resolve({ agencies: mockAgencies, max: 1 }),
    );
    await component.loadFirst();
    expect(agencyServiceSpy.getFirstAgencies).toHaveBeenCalled();
    expect(component.store.agencies).toEqual(mockAgencies);
  });

  it("loadMore should append agencies and complete event", async () => {
    component.store.agencies = [{ id: 1 }] as any[];
    const mockEvent = jasmine.createSpyObj("event", ["target"]);
    mockEvent.target = jasmine.createSpyObj("target", ["complete"]);
    agencyServiceSpy.getNextAgencies.and.returnValue(
      Promise.resolve({ agencies: [{ id: 2 }], max: 2 }),
    );
    await component.loadMore(mockEvent);
    expect(agencyServiceSpy.getNextAgencies).toHaveBeenCalledWith(
      1,
      undefined,
      true,
      "",
      "",
    );
    expect(component.store.agencies.length).toBe(2);
    expect(mockEvent.target.complete).toHaveBeenCalled();
  });

  it("loadMore should disable infinite scroll when all loaded", async () => {
    component.store.agencies = [{ id: 1 }] as any[];
    const mockEvent = jasmine.createSpyObj("event", ["target"]);
    mockEvent.target = { complete: jasmine.createSpy(), disabled: false };
    agencyServiceSpy.getNextAgencies.and.returnValue(
      Promise.resolve({ agencies: [{ id: 2 }], max: 2 }),
    );
    await component.loadMore(mockEvent);
    expect(mockEvent.target.disabled).toBe(true);
  });

  it("toggleFilter should toggle showFilter", () => {
    expect(component.store.showFilter).toBe(false);
    component.toggleFilter();
    expect(component.store.showFilter).toBe(true);
    component.toggleFilter();
    expect(component.store.showFilter).toBe(false);
  });

  it("searchChange should update search and reload", () => {
    spyOn(component, "loadFirst");
    component.searchChange({ detail: { value: "NASA" } });
    expect(component.store.search).toBe("NASA");
    expect(component.loadFirst).toHaveBeenCalled();
  });
});
