import { ModalController } from "@ionic/angular/standalone";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { RocketPage } from "./rocket.page";
import { RocketService } from "./rocket.service";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ActivatedRoute } from "@angular/router";

describe("RocketPage", () => {
  let component: RocketPage;
  let fixture: ComponentFixture<RocketPage>;
  let service: RocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RocketPage],
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
    ).and.returnValue("136");
    service = TestBed.inject(RocketService);
    fixture = TestBed.createComponent(RocketPage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should load rocket on init", async () => {
    spyOn(service, "getRocketById").and.returnValue(
      Promise.resolve({ id: 136, name: "Falcon 9" } as any)
    );
    component.ngOnInit();
    await new Promise(resolve => setTimeout(resolve));
    expect(component.id).toBe("136");
    expect(component.rocket.name).toBe("Falcon 9");
    expect(component.title).toBe("Falcon 9");
  });

  it("should handle pull-to-refresh event", async () => {
    spyOn(service, "getRocketById").and.returnValue(
      Promise.resolve({ id: 136, name: "Falcon 9" } as any)
    );
    component.ngOnInit();
    await new Promise(resolve => setTimeout(resolve));

    const refreshEvent = { target: { complete: jasmine.createSpy("complete") } };
    await component.load(refreshEvent);
    expect(refreshEvent.target.complete).toHaveBeenCalled();
  });

  it("should set id from route params", () => {
    component.ngOnInit();
    expect(component.id).toBe("136");
  });
});
