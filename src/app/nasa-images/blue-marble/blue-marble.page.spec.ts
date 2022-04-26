import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { BlueMarblePage } from "./blue-marble.page";

describe("BlueMarblePage", () => {
  let component: BlueMarblePage;
  let fixture: ComponentFixture<BlueMarblePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlueMarblePage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(BlueMarblePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
