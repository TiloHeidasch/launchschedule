import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { RocketListEntryComponent } from "./rocket-list-entry.component";

describe("RocketListEntryComponent", () => {
  let component: RocketListEntryComponent;
  let fixture: ComponentFixture<RocketListEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RocketListEntryComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(RocketListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
