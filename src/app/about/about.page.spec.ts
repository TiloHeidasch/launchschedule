import { ModalController } from "@ionic/angular/standalone";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { IonicModule } from "@ionic/angular";

import { AboutPage } from "./about.page";

describe("AboutPage", () => {
  let component: AboutPage;
  let fixture: ComponentFixture<AboutPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPage],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ModalController],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
