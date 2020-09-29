import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CountdownComponent } from "./countdown.component";

describe("CountdownComponent", () => {
  let component: CountdownComponent;
  let fixture: ComponentFixture<CountdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountdownComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownComponent);
    component = fixture.componentInstance;
    component.date = new Date();
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("Units for short time setup correctly", () => {
    const testDate = new Date();
    testDate.setDate(testDate.getDate() + 1);
    component.date = testDate;
    component.ngOnInit();
    expect(component.unit1).toBe("HOUR");
    expect(component.unit2).toBe("MINUTE");
    expect(component.unit3).toBe("SECOND");
  });

  it("Units for long time setup correctly", () => {
    component.date = new Date("2020-01-01");
    component.ngOnInit();
    expect(component.unit1).toBe("DAY");
    expect(component.unit2).toBe("MONTH");
    expect(component.unit3).toBe("YEAR");
  });
  it("Digits for in 24h setup correctly", () => {
    const testDate = new Date();
    testDate.setDate(testDate.getDate() + 1);
    component.date = testDate;
    component.ngOnInit();
    expect(component.prefix).toBe("-");
    expect(component.hours1).toBe("2");
    expect(component.hours2).toBe("4");
    expect(component.minutes1).toBe("0");
    expect(component.minutes2).toBe("0");
    expect(component.seconds1).toBe("0");
    expect(component.seconds2).toBe("0");
  });
  it("Digits for 24h ago setup correctly", () => {
    const testDate = new Date();
    testDate.setDate(testDate.getDate() - 1);
    component.date = testDate;
    component.ngOnInit();
    expect(component.prefix).toBe("+");
    expect(component.hours1).toBe("2");
    expect(component.hours2).toBe("4");
    expect(component.minutes1).toBe("0");
    expect(component.minutes2).toBe("0");
    expect(component.seconds1).toBe("0");
    expect(component.seconds2).toBe("0");
  });
  it("Digits for in 1h setup correctly", () => {
    const testDate = new Date();
    testDate.setHours(testDate.getHours() + 1);
    component.date = testDate;
    component.ngOnInit();
    expect(component.prefix).toBe("-");
    expect(component.hours1).toBe("0");
    expect(component.hours2).toBe("1");
    expect(component.minutes1).toBe("0");
    expect(component.minutes2).toBe("0");
    expect(component.seconds1).toBe("0");
    expect(component.seconds2).toBe("0");
  });
  it("Digits for 1h ago setup correctly", () => {
    const testDate = new Date();
    testDate.setHours(testDate.getHours() - 1);
    component.date = testDate;
    component.ngOnInit();
    expect(component.prefix).toBe("+");
    expect(component.hours1).toBe("0");
    expect(component.hours2).toBe("1");
    expect(component.minutes1).toBe("0");
    expect(component.minutes2).toBe("0");
    expect(component.seconds1).toBe("0");
    expect(component.seconds2).toBe("0");
  });
  it("Digits for 1s ago setup correctly", () => {
    const testDate = new Date();
    testDate.setSeconds(testDate.getSeconds() - 1);
    component.date = testDate;
    component.ngOnInit();
    expect(component.prefix).toBe("+");
    expect(component.hours1).toBe("0");
    expect(component.hours2).toBe("0");
    expect(component.minutes1).toBe("0");
    expect(component.minutes2).toBe("0");
    expect(component.seconds1).toBe("0");
    expect(component.seconds2).toBe("1");
  });
  it("Digits for in 1s setup correctly", () => {
    const testDate = new Date();
    testDate.setSeconds(testDate.getSeconds() + 1);
    component.date = testDate;
    component.ngOnInit();
    expect(component.prefix).toBe("-");
    expect(component.hours1).toBe("0");
    expect(component.hours2).toBe("0");
    expect(component.minutes1).toBe("0");
    expect(component.minutes2).toBe("0");
    expect(component.seconds1).toBe("0");
    expect(component.seconds2).toBe("1");
  });
  it("Digits for in 1m setup correctly", () => {
    const testDate = new Date();
    testDate.setMinutes(testDate.getMinutes() + 1);
    component.date = testDate;
    component.ngOnInit();
    expect(component.prefix).toBe("-");
    expect(component.hours1).toBe("0");
    expect(component.hours2).toBe("0");
    expect(component.minutes1).toBe("0");
    expect(component.minutes2).toBe("1");
    expect(component.seconds1).toBe("0");
    expect(component.seconds2).toBe("0");
  });
  it("Digits for 1m ago setup correctly", () => {
    const testDate = new Date();
    testDate.setMinutes(testDate.getMinutes() - 1);
    component.date = testDate;
    component.ngOnInit();
    expect(component.prefix).toBe("+");
    expect(component.hours1).toBe("0");
    expect(component.hours2).toBe("0");
    expect(component.minutes1).toBe("0");
    expect(component.minutes2).toBe("1");
    expect(component.seconds1).toBe("0");
    expect(component.seconds2).toBe("0");
  });
  it("Digits for long time setup correctly", () => {
    component.date = new Date("2020-01-01");
    component.ngOnInit();
    expect(component.hours1).toBe("0");
    expect(component.hours2).toBe("1");
    expect(component.minutes1).toBe("0");
    expect(component.minutes2).toBe("1");
    expect(component.seconds1).toBe("2");
    expect(component.seconds2).toBe("0");
  });
});
