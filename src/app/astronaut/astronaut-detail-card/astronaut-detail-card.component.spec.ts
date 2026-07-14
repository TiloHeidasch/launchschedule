import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { AstronautDetailCardComponent } from "./astronaut-detail-card.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("AstronautDetailCardComponent", () => {
  let component: AstronautDetailCardComponent;
  let fixture: ComponentFixture<AstronautDetailCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AstronautDetailCardComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AstronautDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
