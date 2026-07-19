import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule, ToastController, ActionSheetController } from "@ionic/angular";

import { SpacestationDetailCardComponent } from "./spacestation-detail-card.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

function makeSs(overrides: Record<string, any> = {}): any {
  return {
    id: 13,
    name: "Salyut 5",
    status: { id: 2, name: "De-Orbited" },
    type: { id: 2, name: "Government" },
    founded: "1976-06-22",
    deorbited: "1988-08-08",
    height: 13.55,
    width: 4.15,
    mass: 19.0,
    volume: 100,
    description: "Test description",
    orbit: "Low Earth Orbit",
    onboard_crew: 0,
    owners: [{ id: 63, name: "ROSCOSMOS" }],
    active_expeditions: [],
    docking_location: [{ id: 22, name: "Forward", docked: null }],
    image_url: "https://example.com/image.png",
    ...overrides,
  };
}

describe("SpacestationDetailCardComponent", () => {
  let component: SpacestationDetailCardComponent;
  let fixture: ComponentFixture<SpacestationDetailCardComponent>;
  let toastController: ToastController;
  let actionSheetController: ActionSheetController;

  function create(input: any) {
    fixture = TestBed.createComponent(SpacestationDetailCardComponent);
    component = fixture.componentInstance;
    component.spacestation = input;
    toastController = TestBed.inject(ToastController);
    actionSheetController = TestBed.inject(ActionSheetController);
    fixture.detectChanges();
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpacestationDetailCardComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();
  });

  it("should create", () => {
    create(makeSs());
    expect(component).toBeTruthy();
  });

  it("should render spacestation name", () => {
    create(makeSs());
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain("Salyut 5");
  });

  it("should render spacestation type", () => {
    create(makeSs());
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain("Government");
  });

  it("should render description", () => {
    create(makeSs());
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain("Test description");
  });

  it("should render orbit", () => {
    create(makeSs());
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain("Low Earth Orbit");
  });

  it("should render docking ports section", () => {
    create(makeSs());
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("#docking_port")).toBeTruthy();
    expect(compiled.textContent).toContain("Forward");
  });

  it("should show unoccupied chip for null docked", () => {
    create(makeSs());
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("#unoccupied")).toBeTruthy();
    expect(compiled.textContent).toContain("unoccupied");
  });

  it("should show docked vehicle chip when docked is not null", () => {
    create(makeSs({
      docking_location: [{
        id: 23, name: "Aft",
        docked: {
          flight_vehicle: {
            launch: { id: 1 },
            spacecraft: { spacecraft_config: { id: 5, name: "Soyuz MS" } },
          },
        },
      }],
    }));
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("#vehicle")).toBeTruthy();
    expect(compiled.textContent).toContain("Soyuz MS");
  });

  it("should show specification chips when values are present", () => {
    create(makeSs());
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("#volume")).toBeTruthy();
    expect(compiled.querySelector("#width")).toBeTruthy();
    expect(compiled.querySelector("#height")).toBeTruthy();
    expect(compiled.querySelector("#mass")).toBeTruthy();
    expect(compiled.querySelector("#deorbited")).toBeTruthy();
    expect(compiled.querySelector("#founded")).toBeTruthy();
  });

  it("should not show onboard_crew chip when zero", () => {
    create(makeSs({ onboard_crew: 0 }));
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("#onboard_crew")).toBeFalsy();
  });

  it("should show onboard_crew chip when non-zero", () => {
    create(makeSs({ onboard_crew: 3 }));
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("#onboard_crew")).toBeTruthy();
  });

  it("should show active status chip for status.id 1", () => {
    create(makeSs({ status: { id: 1, name: "Active" } }));
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("#in_use")).toBeTruthy();
    expect(compiled.textContent).toContain("Active");
  });

  it("should show deorbited status chip for status.id 2", () => {
    create(makeSs({ status: { id: 2, name: "De-Orbited" } }));
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("#deorbited")).toBeTruthy();
    expect(compiled.textContent).toContain("De-Orbited");
  });

  it("should show abandoned status chip for status.id 3", () => {
    create(makeSs({ status: { id: 3, name: "Abandoned" } }));
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("#abandoned")).toBeTruthy();
    expect(compiled.textContent).toContain("Abandoned");
  });

  it("showSpecification should present a toast", async () => {
    create(makeSs());
    const spy = spyOn(toastController, "create").and.callThrough();
    await component.showSpecification("Test", "42", "Units");
    expect(spy).toHaveBeenCalledWith(jasmine.objectContaining({
      message: "Test: 42 Units",
      duration: 2000,
    }));
  });

  it("presentUnoccupiedToast should present a toast", async () => {
    create(makeSs());
    const spy = spyOn(toastController, "create").and.callThrough();
    await component.presentUnoccupiedToast({ name: "Port A" });
    expect(spy).toHaveBeenCalledWith(jasmine.objectContaining({
      message: "Port A is not occupied.",
      duration: 2000,
    }));
  });

  it("presentDockingLocationActionSheet should create an action sheet", async () => {
    create(makeSs({
      docking_location: [{
        id: 23, name: "Aft",
        docked: {
          flight_vehicle: {
            launch: { id: 1 },
            spacecraft: { spacecraft_config: { id: 5, name: "Soyuz MS" } },
          },
        },
      }],
    }));
    const spy = spyOn(actionSheetController, "create").and.callThrough();
    await component.presentDockingLocationActionSheet(
      component.spacestation.docking_location[0]
    );
    expect(spy).toHaveBeenCalledWith(jasmine.objectContaining({
      header: "Aft - Soyuz MS",
    }));
  });

  it("should not render any content when spacestation is undefined", () => {
    create(undefined);
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toBe("");
  });
});
