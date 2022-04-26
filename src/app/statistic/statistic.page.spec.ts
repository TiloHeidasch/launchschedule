import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { StatisticPage } from "./statistic.page";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("StatisticPage", () => {
  let component: StatisticPage;
  let fixture: ComponentFixture<StatisticPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticPage],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StatisticPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should proceed after whatComplete", async () => {
    await component.whatComplete();
    expect(component.step).toBe(2);
  });
  it("should fall back after whatOpen", () => {
    component.whatOpen();
    expect(component.step).toBe(1);
  });
  it("should proceed after filterComplete", async () => {
    await component.whatComplete();
    await component.filterComplete();
    expect(component.step).toBe(3);
  });
  it("should fall back after filterOpen", () => {
    component.filterOpen();
    expect(component.step).toBe(2);
  });
  it("should proceed after axisComplete with Rocket", async () => {
    await component.whatComplete();
    await component.filterComplete();
    component.xAxis = "Rocket";
    await component.axisComplete();
    expect(component.step).toBe(4);
  });
  it("should proceed after axisComplete with RocketFamily", async () => {
    await component.whatComplete();
    await component.filterComplete();
    component.xAxis = "RocketFamily";
    await component.axisComplete();
    expect(component.step).toBe(4);
  });
  it("should proceed after axisComplete with Agency", async () => {
    await component.whatComplete();
    await component.filterComplete();
    component.xAxis = "Agency";
    await component.axisComplete();
    expect(component.step).toBe(4);
  });
  it("should proceed after axisComplete with AgencyType", async () => {
    await component.whatComplete();
    await component.filterComplete();
    component.xAxis = "AgencyType";
    await component.axisComplete();
    expect(component.step).toBe(4);
  });
  it("should proceed after axisComplete with Spacecraft", async () => {
    await component.whatComplete();
    await component.filterComplete();
    component.xAxis = "Spacecraft";
    await component.axisComplete();
    expect(component.step).toBe(4);
  });
  it("should fall back after axisOpen", () => {
    component.axisOpen();
    expect(component.step).toBe(3);
  });
  it("should Format Date Properly", () => {
    const dateString = "2020-01-01";
    const date = new Date(dateString);
    expect(component.formatDate(date)).toBe(dateString);
    const dateString2 = "2020-11-11";
    const date2 = new Date(dateString2);
    expect(component.formatDate(date2)).toBe(dateString2);
  });
});
