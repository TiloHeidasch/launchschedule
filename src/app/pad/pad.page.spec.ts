import { ModalController } from "@ionic/angular/standalone";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { PadPage } from "./pad.page";
import { PadService } from "./pad.service";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ActivatedRoute } from "@angular/router";

describe("PadPage", () => {
  let component: PadPage;
  let fixture: ComponentFixture<PadPage>;
  let service: PadService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PadPage],
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
    ).and.returnValue("93");
    service = TestBed.inject(PadService);
    fixture = TestBed.createComponent(PadPage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should load pad on init", async () => {
    spyOn(service, "getPadById").and.returnValue(
      Promise.resolve({ id: 93, name: "LC-39A" } as any)
    );
    component.ngOnInit();
    await new Promise(resolve => setTimeout(resolve));
    expect(component.id).toBe("93");
    expect(component.pad.name).toBe("LC-39A");
    expect(component.title).toBe("LC-39A");
  });

  it("should handle pull-to-refresh event", async () => {
    spyOn(service, "getPadById").and.returnValue(
      Promise.resolve({ id: 93, name: "LC-39A" } as any)
    );
    component.ngOnInit();
    await new Promise(resolve => setTimeout(resolve));

    const refreshEvent = { target: { complete: jasmine.createSpy("complete") } };
    await component.load(refreshEvent);
    expect(refreshEvent.target.complete).toHaveBeenCalled();
  });

  it("should set id from route params", () => {
    component.ngOnInit();
    expect(component.id).toBe("93");
  });
});
