import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { PerseverancePage } from "./perseverance.page";

describe("PerseverancePage", () => {
  let component: PerseverancePage;
  let fixture: ComponentFixture<PerseverancePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerseverancePage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PerseverancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
