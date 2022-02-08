import { TestBed } from "@angular/core/testing";

import { IonicModule } from "@ionic/angular";
import { LaunchscheduleNotificationService } from "./launchschedule-notification.service";

describe("LaunchscheduleNotificationService", () => {
  let service: LaunchscheduleNotificationService;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot()],
      providers: [LaunchscheduleNotificationService],
    }).compileComponents();
    service = TestBed.inject(LaunchscheduleNotificationService);
    service.setRegistered();
    await service.removeInterest("type", "id");
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  describe("registered", () => {
    it("should markInterest", async () => {
      service.setRegistered();
      await service.markInterest("type", "id");

      const res = await service.isInterested("type", "id");
      expect(res).toBe(true);
    });
    it("should removeInterest", async () => {
      service.setRegistered();
      await service.markInterest("type", "id");

      const res1 = await service.isInterested("type", "id");
      expect(res1).toBe(true);
      await service.removeInterest("type", "id");

      const res2 = await service.isInterested("type", "id");
      expect(res2).toBe(false);
    });
  });
  describe("un-registered", () => {
    it("should not markInterest", async () => {
      service.setUnregistered();
      await service.markInterest("type", "id");
      const res = await service.isInterested("type", "id");
      expect(res).toBe(false);
    });
    it("should not removeInterest", async () => {
      service.setRegistered();
      await service.markInterest("type", "id");

      const res1 = await service.isInterested("type", "id");
      expect(res1).toBe(true);

      service.setUnregistered();
      await service.removeInterest("type", "id");
      const res2 = await service.isInterested("type", "id");
      expect(res2).toBe(true);
    });
  });
});
