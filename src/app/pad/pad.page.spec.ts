import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { PadPage } from "./pad.page";

describe("PadPage", () => {
  let component: PadPage;
  let fixture: ComponentFixture<PadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PadPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(PadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
