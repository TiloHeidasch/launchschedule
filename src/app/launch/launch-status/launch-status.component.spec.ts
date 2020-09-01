import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { LaunchStatusComponent } from "./launch-status.component";

describe("LaunchStatusComponent", () => {
  let component: LaunchStatusComponent;
  let fixture: ComponentFixture<LaunchStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LaunchStatusComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(LaunchStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
