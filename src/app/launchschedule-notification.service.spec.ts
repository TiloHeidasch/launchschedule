import { TestBed } from "@angular/core/testing";

import { IonicModule } from "@ionic/angular";
import { LaunchscheduleNotificationService } from "./launchschedule-notification.service";

describe("LaunchscheduleNotificationService", () => {
  let service: LaunchscheduleNotificationService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot()],
      providers: [LaunchscheduleNotificationService],
    }).compileComponents();
    service = TestBed.inject(LaunchscheduleNotificationService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  it("should markInterest", async () => {
    await service.markInterest("type", "id");

    const res = await service.isInterested("type", "id");
    expect(res).toBe(true);
  });
  it("should removeInterest", async () => {
    await service.markInterest("type", "id");

    const res1 = await service.isInterested("type", "id");
    expect(res1).toBe(true);
    await service.removeInterest("type", "id");

    const res2 = await service.isInterested("type", "id");
    expect(res2).toBe(false);
  });
});
