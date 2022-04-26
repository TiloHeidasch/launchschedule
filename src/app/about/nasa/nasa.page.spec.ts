import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { AboutCardModule } from "../about-card/about-card.module";

import { NasaPage } from "./nasa.page";

describe("NasaPage", () => {
  let component: NasaPage;
  let fixture: ComponentFixture<NasaPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NasaPage],
      imports: [IonicModule.forRoot(), AboutCardModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NasaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
