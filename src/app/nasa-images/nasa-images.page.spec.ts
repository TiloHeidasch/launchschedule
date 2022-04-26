import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { IonicModule } from "@ionic/angular";

import { NasaImagesPage } from "./nasa-images.page";

describe("NasaImagesPage", () => {
  let component: NasaImagesPage;
  let fixture: ComponentFixture<NasaImagesPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NasaImagesPage],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NasaImagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
