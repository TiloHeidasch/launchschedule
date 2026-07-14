import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { AboutCardModule } from "../about-card/about-card.module";

import { RcketPage } from "./rcket.page";

describe("RcketPage", () => {
  let component: RcketPage;
  let fixture: ComponentFixture<RcketPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RcketPage],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [IonicModule.forRoot(), AboutCardModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RcketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
