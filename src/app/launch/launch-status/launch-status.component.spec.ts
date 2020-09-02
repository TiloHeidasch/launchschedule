import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { LaunchStatusComponent } from "./launch-status.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("LaunchStatusComponent", () => {
  let component: LaunchStatusComponent;
  let fixture: ComponentFixture<LaunchStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LaunchStatusComponent],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LaunchStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
