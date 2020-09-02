import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { AgencyListEntryComponent } from "./agency-list-entry.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("AgencyListEntryComponent", () => {
  let component: AgencyListEntryComponent;
  let fixture: ComponentFixture<AgencyListEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AgencyListEntryComponent],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AgencyListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
