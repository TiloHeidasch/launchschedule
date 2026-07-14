import { ModalController } from "@ionic/angular/standalone";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { AstroImageOfTheDayPage } from "./astro-image-of-the-day.page";

describe("AstroImageOfTheDayPage", () => {
  let component: AstroImageOfTheDayPage;
  let fixture: ComponentFixture<AstroImageOfTheDayPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AstroImageOfTheDayPage],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ModalController],
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AstroImageOfTheDayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
