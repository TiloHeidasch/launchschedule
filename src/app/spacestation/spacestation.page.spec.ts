import { ModalController } from "@ionic/angular/standalone";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { SpacestationPage } from "./spacestation.page";
import { SpacestationService } from "./spacestation.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { ActivatedRoute } from "@angular/router";

describe("SpacestationPage", () => {
  let component: SpacestationPage;
  let fixture: ComponentFixture<SpacestationPage>;
  let service: SpacestationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpacestationPage],
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
    ).and.returnValue("13");
    service = TestBed.inject(SpacestationService);
    fixture = TestBed.createComponent(SpacestationPage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should load spacestation on init", async () => {
    spyOn(service, "getSpacestationById").and.returnValue(
      Promise.resolve({ id: 13, name: "Salyut 5" } as any)
    );
    component.ngOnInit();
    await new Promise(resolve => setTimeout(resolve));
    expect(component.id).toBe("13");
    expect(component.spacestation.name).toBe("Salyut 5");
    expect(component.title).toBe("Salyut 5");
  });

  it("should handle pull-to-refresh event", async () => {
    spyOn(service, "getSpacestationById").and.returnValue(
      Promise.resolve({ id: 13, name: "Salyut 5" } as any)
    );
    component.ngOnInit();
    await new Promise(resolve => setTimeout(resolve));

    const refreshEvent = { target: { complete: jasmine.createSpy("complete") } };
    await component.load(refreshEvent);
    expect(refreshEvent.target.complete).toHaveBeenCalled();
  });

  it("should set id from route params", () => {
    component.ngOnInit();
    expect(component.id).toBe("13");
  });
});
