import { TestBed } from "@angular/core/testing";

import { IonicModule } from "@ionic/angular";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { LaunchscheduleNotificationService } from "./launchschedule-notification.service";

describe("LaunchscheduleNotificationService", () => {
  let service: LaunchscheduleNotificationService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [LaunchscheduleNotificationService],
    }).compileComponents();
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(LaunchscheduleNotificationService);
    const token = "test";
    service.setToken(token);
  });
  afterEach(() => {
    httpTestingController.verify();
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  it("should markInterest", () => {
    service.markInterest("type", "id");
    const res = httpTestingController.expectOne(
      "https://launchschedule-notifications.th105.de/notification?token=test&id=id&type=type"
    );
    expect(res.request.method).toBe("POST");
  });
  it("should not markInterest without Token", () => {
    service.setToken(undefined);
    service.markInterest("type", "id");
    const res = httpTestingController.expectNone(
      "https://launchschedule-notifications.th105.de/notification?token=test&id=id&type=type"
    );
  });
  it("should removeInterest", () => {
    service.removeInterest("type", "id");
    const res = httpTestingController.expectOne(
      "https://launchschedule-notifications.th105.de/notification?token=test&id=id&type=type"
    );
    expect(res.request.method).toBe("DELETE");
  });
  it("should not removeInterest without Token", () => {
    service.setToken(undefined);
    service.removeInterest("type", "id");
    const res = httpTestingController.expectNone(
      "https://launchschedule-notifications.th105.de/notification?token=test&id=id&type=type"
    );
  });
  it("should not be interested in dummy", () => {
    expect(service.isInterested("type", "id")).toBeFalse();
  });
  it("should have no amount for dummy", () => {
    expect(service.getAmountForInterest("type", "id")).toBe(0);
  });
});
