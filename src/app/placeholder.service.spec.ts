import { TestBed } from "@angular/core/testing";
import { PlaceholderService } from "./placeholder.service";
import { PreferenceService } from "./preferences.service";

describe("PlaceholderService", () => {
  let service: PlaceholderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PlaceholderService,
        {
          provide: PreferenceService,
          useValue: { isDark: () => false },
        },
      ],
    });
    service = TestBed.inject(PlaceholderService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("getPlaceholder should return light image when not dark", () => {
    expect(service.getPlaceholder()).toBe(
      "assets/placeholder/placeholder.png",
    );
  });

  it("getPlaceholder should return dark image when dark", () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        PlaceholderService,
        { provide: PreferenceService, useValue: { isDark: () => true } },
      ],
    });
    service = TestBed.inject(PlaceholderService);
    expect(service.getPlaceholder()).toBe(
      "assets/placeholder/placeholderdark.png",
    );
  });

  it("resolveImage should return image_url from object", () => {
    expect(
      service.resolveImage({ image_url: "http://example.com/img.jpg" }),
    ).toBe("http://example.com/img.jpg");
  });

  it("resolveImage should return string image directly", () => {
    expect(service.resolveImage("http://example.com/str.jpg")).toBe(
      "http://example.com/str.jpg",
    );
  });

  it("resolveImage should return legacyUrl when image is empty string", () => {
    expect(service.resolveImage("", "http://example.com/legacy.jpg")).toBe(
      "http://example.com/legacy.jpg",
    );
  });

  it("resolveImage should return placeholder when image is null and no legacyUrl", () => {
    expect(service.resolveImage(null)).toBe(
      "assets/placeholder/placeholder.png",
    );
  });

  it("resolveImage should return placeholder when image is empty object", () => {
    expect(service.resolveImage({})).toBe(
      "assets/placeholder/placeholder.png",
    );
  });

  it("getVersion should return light version image when not dark", () => {
    expect(service.getVersion()).toBe("assets/placeholder/version.jpg");
  });

  it("getVersion should return dark version image when dark", () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        PlaceholderService,
        { provide: PreferenceService, useValue: { isDark: () => true } },
      ],
    });
    service = TestBed.inject(PlaceholderService);
    expect(service.getVersion()).toBe("assets/placeholder/versiondark.png");
  });

  it("getCredits should return light credits image when not dark", () => {
    expect(service.getCredits()).toBe("assets/placeholder/credits.jpg");
  });

  it("getCredits should return dark credits image when dark", () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        PlaceholderService,
        { provide: PreferenceService, useValue: { isDark: () => true } },
      ],
    });
    service = TestBed.inject(PlaceholderService);
    expect(service.getCredits()).toBe("assets/placeholder/creditsdark.png");
  });
});
