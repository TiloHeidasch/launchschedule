import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { SnapiPage } from "./snapi.page";

describe("SnapiPage", () => {
  let component: SnapiPage;
  let fixture: ComponentFixture<SnapiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SnapiPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(SnapiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
