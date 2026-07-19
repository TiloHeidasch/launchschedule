import { ModalController } from "@ionic/angular/standalone";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { LocationPage } from "./location.page";
import { LocationService } from "./location.service";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ActivatedRoute } from "@angular/router";

describe("LocationPage", () => {
  let component: LocationPage;
  let fixture: ComponentFixture<LocationPage>;
  let service: LocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationPage],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ModalController],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    spyOn(
      TestBed.inject(ActivatedRoute).snapshot.paramMap,
      "get"
    ).and.returnValue("151");
    service = TestBed.inject(LocationService);
    fixture = TestBed.createComponent(LocationPage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should load location on init", async () => {
    spyOn(service, "getLocationById").and.returnValue(
      Promise.resolve({ id: 151, name: "Kennedy Space Center" } as any)
    );
    component.ngOnInit();
    await new Promise(resolve => setTimeout(resolve));
    expect(component.id).toBe("151");
    expect(component.location.name).toBe("Kennedy Space Center");
    expect(component.title).toBe("Kennedy Space Center");
  });

  it("should handle pull-to-refresh event", async () => {
    spyOn(service, "getLocationById").and.returnValue(
      Promise.resolve({ id: 151, name: "KSC" } as any)
    );
    component.ngOnInit();
    await new Promise(resolve => setTimeout(resolve));

    const refreshEvent = { target: { complete: jasmine.createSpy("complete") } };
    await component.load(refreshEvent);
    expect(refreshEvent.target.complete).toHaveBeenCalled();
  });

  it("should set id from route params", () => {
    component.ngOnInit();
    expect(component.id).toBe("151");
  });
});
