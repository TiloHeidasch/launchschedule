import { TestBed } from "@angular/core/testing";
import { NewsStorageService } from "./news-storage.service";
import { StorageService } from "../storage.service";

describe("NewsStorageService", () => {
  let service: NewsStorageService;
  let storageSpy: jasmine.SpyObj<StorageService>;

  beforeEach(() => {
    storageSpy = jasmine.createSpyObj("StorageService", [
      "getObject",
      "setObject",
    ]);
    TestBed.configureTestingModule({
      providers: [
        NewsStorageService,
        { provide: StorageService, useValue: storageSpy },
      ],
    });
    service = TestBed.inject(NewsStorageService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("markClicked should initialize array if not exists", async () => {
    storageSpy.getObject.and.callFake(async () => null);
    await service.markClicked({ id: 1 });
    expect(storageSpy.setObject).toHaveBeenCalledWith("ClickedNewsItems", [1]);
  });

  it("markClicked should add new id to existing array", async () => {
    storageSpy.getObject.and.callFake(async () => [1, 2]);
    await service.markClicked({ id: 3 });
    expect(storageSpy.setObject).toHaveBeenCalledWith("ClickedNewsItems", [
      1, 2, 3,
    ]);
  });

  it("markClicked should not add duplicate id", async () => {
    storageSpy.getObject.and.callFake(async () => [1, 2]);
    await service.markClicked({ id: 1 });
    expect(storageSpy.setObject).not.toHaveBeenCalled();
  });

  it("isClicked should return true for clicked item", async () => {
    storageSpy.getObject.and.callFake(async () => [1, 2, 3]);
    const result = await service.isClicked({ id: 2 });
    expect(result).toBe(true);
  });

  it("isClicked should return false for unclicked item", async () => {
    storageSpy.getObject.and.callFake(async () => [1, 2, 3]);
    const result = await service.isClicked({ id: 4 });
    expect(result).toBe(false);
  });

  it("isClicked should return false when no items stored", async () => {
    storageSpy.getObject.and.callFake(async () => null);
    const result = await service.isClicked({ id: 1 });
    expect(result).toBe(false);
  });
});
