import { ModalController } from "@ionic/angular/standalone";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { AstronautPage } from "./astronaut.page";
import { AstronautService } from "./astronaut.service";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ActivatedRoute } from "@angular/router";

const mockAstronaut = { id: 276, name: "Neil Armstrong", agency: { id: 1 } } as any;

describe("AstronautPage", () => {
  let component: AstronautPage;
  let fixture: ComponentFixture<AstronautPage>;
  let service: AstronautService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AstronautPage],
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
    ).and.returnValue("276");
    service = TestBed.inject(AstronautService);
    fixture = TestBed.createComponent(AstronautPage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should load astronaut on init", async () => {
    spyOn(service, "getAstronautById").and.returnValue(
      Promise.resolve(mockAstronaut)
    );
    component.ngOnInit();
    await new Promise(resolve => setTimeout(resolve));
    expect(component.id).toBe("276");
    expect(component.astronaut.name).toBe("Neil Armstrong");
    expect(component.title).toBe("Neil Armstrong");
  });

  it("should handle pull-to-refresh event", async () => {
    spyOn(service, "getAstronautById").and.returnValue(
      Promise.resolve(mockAstronaut)
    );
    component.ngOnInit();
    await new Promise(resolve => setTimeout(resolve));

    const refreshEvent = { target: { complete: jasmine.createSpy("complete") } };
    await component.load(refreshEvent);
    expect(refreshEvent.target.complete).toHaveBeenCalled();
  });

  it("should set id from route params", () => {
    component.ngOnInit();
    expect(component.id).toBe("276");
  });
});
