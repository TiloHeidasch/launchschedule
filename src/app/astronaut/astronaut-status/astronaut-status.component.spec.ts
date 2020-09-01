import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { AstronautStatusComponent } from "./astronaut-status.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("AstronautStatusComponent", () => {
  let component: AstronautStatusComponent;
  let fixture: ComponentFixture<AstronautStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AstronautStatusComponent],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AstronautStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
