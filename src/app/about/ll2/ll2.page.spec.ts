import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { AboutCardModule } from "../about-card/about-card.module";

import { Ll2Page } from "./ll2.page";

describe("Ll2Page", () => {
  let component: Ll2Page;
  let fixture: ComponentFixture<Ll2Page>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ll2Page],
      imports: [IonicModule.forRoot(), AboutCardModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Ll2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
