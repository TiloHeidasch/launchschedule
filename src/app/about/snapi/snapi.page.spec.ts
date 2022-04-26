import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { AboutCardModule } from "../about-card/about-card.module";

import { SnapiPage } from "./snapi.page";

describe("SnapiPage", () => {
  let component: SnapiPage;
  let fixture: ComponentFixture<SnapiPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnapiPage],
      imports: [IonicModule.forRoot(), AboutCardModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SnapiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
