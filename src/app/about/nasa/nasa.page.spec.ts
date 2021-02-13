import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { NasaPage } from "./nasa.page";

describe("NasaPage", () => {
  let component: NasaPage;
  let fixture: ComponentFixture<NasaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NasaPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(NasaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
