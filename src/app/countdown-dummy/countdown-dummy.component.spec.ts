import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { CountdownDummyComponent } from "./countdown-dummy.component";

describe("CountdownComponent", () => {
  let component: CountdownDummyComponent;
  let fixture: ComponentFixture<CountdownDummyComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CountdownDummyComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
