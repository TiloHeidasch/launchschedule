import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { AstroImageOfTheDayPage } from "./astro-image-of-the-day.page";

describe("AstroImageOfTheDayPage", () => {
  let component: AstroImageOfTheDayPage;
  let fixture: ComponentFixture<AstroImageOfTheDayPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AstroImageOfTheDayPage],
        imports: [IonicModule.forRoot(), HttpClientTestingModule],
      }).compileComponents();

      fixture = TestBed.createComponent(AstroImageOfTheDayPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
