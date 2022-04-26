import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { SolarSystemPage } from "./solar-system.page";

describe("SolarSystemPage", () => {
  let component: SolarSystemPage;
  let fixture: ComponentFixture<SolarSystemPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolarSystemPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(SolarSystemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
