import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { LocationListEntryComponent } from "./location-list-entry.component";

describe("LocationListEntryComponent", () => {
  let component: LocationListEntryComponent;
  let fixture: ComponentFixture<LocationListEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LocationListEntryComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(LocationListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
