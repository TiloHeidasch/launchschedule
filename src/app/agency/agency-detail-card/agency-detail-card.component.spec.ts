import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { AgencyDetailCardComponent } from "./agency-detail-card.component";

describe("AgencyDetailCardComponent", () => {
  let component: AgencyDetailCardComponent;
  let fixture: ComponentFixture<AgencyDetailCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AgencyDetailCardComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AgencyDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
