import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { RcketPage } from "./rcket.page";

describe("RcketPage", () => {
  let component: RcketPage;
  let fixture: ComponentFixture<RcketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RcketPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(RcketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
