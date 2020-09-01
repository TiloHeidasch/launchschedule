import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { AstronautListEntryComponent } from "./astronaut-list-entry.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("AstronautListEntryComponent", () => {
  let component: AstronautListEntryComponent;
  let fixture: ComponentFixture<AstronautListEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AstronautListEntryComponent],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AstronautListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
