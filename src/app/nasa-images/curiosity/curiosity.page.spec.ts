import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { CuriosityPage } from "./curiosity.page";

describe("CuriosityPage", () => {
  let component: CuriosityPage;
  let fixture: ComponentFixture<CuriosityPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CuriosityPage],
        imports: [IonicModule.forRoot(), HttpClientTestingModule],
      }).compileComponents();

      fixture = TestBed.createComponent(CuriosityPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
