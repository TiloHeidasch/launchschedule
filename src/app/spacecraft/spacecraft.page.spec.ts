import { ModalController } from "@ionic/angular/standalone";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { SpacecraftPage } from "./spacecraft.page";
import { SpacecraftService } from "./spacecraft.service";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ActivatedRoute } from "@angular/router";

describe("SpacecraftPage", () => {
  let component: SpacecraftPage;
  let fixture: ComponentFixture<SpacecraftPage>;
  let service: SpacecraftService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpacecraftPage],
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
    ).and.returnValue("10");
    service = TestBed.inject(SpacecraftService);
    fixture = TestBed.createComponent(SpacecraftPage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should load spacecraft on init", async () => {
    spyOn(service, "getSpacecraftById").and.returnValue(
      Promise.resolve({ id: 10, name: "Crew Dragon" } as any)
    );
    component.ngOnInit();
    await new Promise(resolve => setTimeout(resolve));
    expect(component.id).toBe("10");
    expect(component.spacecraft.name).toBe("Crew Dragon");
    expect(component.title).toBe("Crew Dragon");
  });

  it("should handle pull-to-refresh event", async () => {
    spyOn(service, "getSpacecraftById").and.returnValue(
      Promise.resolve({ id: 10, name: "Crew Dragon" } as any)
    );
    component.ngOnInit();
    await new Promise(resolve => setTimeout(resolve));

    const refreshEvent = { target: { complete: jasmine.createSpy("complete") } };
    await component.load(refreshEvent);
    expect(refreshEvent.target.complete).toHaveBeenCalled();
  });

  it("should set id from route params", () => {
    component.ngOnInit();
    expect(component.id).toBe("10");
  });
});
