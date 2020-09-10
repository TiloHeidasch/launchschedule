import { TestBed } from "@angular/core/testing";

import { LaunchscheduleNotificationService } from "./launchschedule-notification.service";
import { IonicModule } from "@ionic/angular";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("LaunchscheduleNotificationServiceService", () => {
  let service: LaunchscheduleNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [LaunchscheduleNotificationService],
    }).compileComponents();
    service = TestBed.inject(LaunchscheduleNotificationService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
