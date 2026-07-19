import { TestBed } from "@angular/core/testing";
import { PreferenceService } from "./preferences.service";
import { StorageService } from "./storage.service";

describe("PreferenceService", () => {
  let storageSpy: jasmine.SpyObj<StorageService>;

  beforeEach(() => {
    storageSpy = jasmine.createSpyObj("StorageService", ["getItem", "setItem"]);
    TestBed.configureTestingModule({
      providers: [
        PreferenceService,
        { provide: StorageService, useValue: storageSpy },
      ],
    });
  });

  it("should be created", () => {
    const service = TestBed.inject(PreferenceService);
    expect(service).toBeTruthy();
  });

  it("should default to light mode when no stored preference", async () => {
    storageSpy.getItem.and.callFake(async () => null);
    const service = TestBed.inject(PreferenceService);
    await service.init();
    expect(service.isDark()).toBe(false);
  });

  it("should read dark preference from storage", async () => {
    storageSpy.getItem.and.callFake(async () => "true");
    const service = TestBed.inject(PreferenceService);
    await service.init();
    expect(service.isDark()).toBe(true);
  });

  it("setDark should store and update preference to dark", () => {
    const service = TestBed.inject(PreferenceService);
    service.setDark(true);
    expect(service.isDark()).toBe(true);
    expect(storageSpy.setItem).toHaveBeenCalledWith("dark", "true");
  });

  it("setDark should toggle to light", () => {
    const service = TestBed.inject(PreferenceService);
    service.setDark(false);
    expect(service.isDark()).toBe(false);
    expect(storageSpy.setItem).toHaveBeenCalledWith("dark", "false");
  });

  it("init should toggle body class for dark mode", async () => {
    spyOn(document.body.classList, "toggle");
    storageSpy.getItem.and.callFake(async () => "true");
    const service = TestBed.inject(PreferenceService);
    await service.init();
    expect(document.body.classList.toggle).toHaveBeenCalledWith("dark", true);
  });

  it("init should toggle body class for light mode", async () => {
    spyOn(document.body.classList, "toggle");
    storageSpy.getItem.and.callFake(async () => "false");
    const service = TestBed.inject(PreferenceService);
    await service.init();
    expect(document.body.classList.toggle).toHaveBeenCalledWith("dark", false);
  });
});
