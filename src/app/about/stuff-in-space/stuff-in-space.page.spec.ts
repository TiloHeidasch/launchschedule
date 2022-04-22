import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { AboutCardModule } from "../about-card/about-card.module";

import { StuffInSpacePage } from "./stuff-in-space.page";

describe("StuffInSpacePage", () => {
  let component: StuffInSpacePage;
  let fixture: ComponentFixture<StuffInSpacePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [StuffInSpacePage],
      imports: [IonicModule.forRoot(), AboutCardModule],
    }).compileComponents();

    fixture = TestBed.createComponent(StuffInSpacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
