import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { Ll2Page } from "./ll2.page";

describe("Ll2Page", () => {
  let component: Ll2Page;
  let fixture: ComponentFixture<Ll2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Ll2Page],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(Ll2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
