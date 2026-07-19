import { TestBed } from "@angular/core/testing";
import { StorageService } from "./storage.service";

describe("StorageService", () => {
  let service: StorageService;
  let store: { [key: string]: string } = {};

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);

    spyOn(localStorage, "getItem").and.callFake(
      (key: string) => store[key] ?? null,
    );
    spyOn(localStorage, "setItem").and.callFake(
      (key: string, value: string) => {
        store[key] = value;
      },
    );
    spyOn(localStorage, "removeItem").and.callFake((key: string) => {
      delete store[key];
    });
    spyOn(localStorage, "clear").and.callFake(() => {
      store = {};
    });
    store = {};
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("getObject should parse JSON from localStorage", async () => {
    store["test"] = JSON.stringify({ foo: "bar" });
    const result = await service.getObject("test");
    expect(result).toEqual({ foo: "bar" });
  });

  it("getObject should return null for missing key", async () => {
    const result = await service.getObject("nonexistent");
    expect(result).toBeNull();
  });

  it("setObject should stringify and store in localStorage", async () => {
    await service.setObject("test", { foo: "bar" });
    expect(store["test"]).toBe(JSON.stringify({ foo: "bar" }));
  });

  it("setItem should store raw value in localStorage", async () => {
    await service.setItem("test", "rawvalue");
    expect(store["test"]).toBe("rawvalue");
  });

  it("getItem should return raw value from localStorage", async () => {
    store["test"] = "rawvalue";
    const result = await service.getItem("test");
    expect(result).toBe("rawvalue");
  });

  it("getItem should return null for missing key", async () => {
    const result = await service.getItem("nonexistent");
    expect(result).toBeNull();
  });

  it("removeItem should delete from localStorage", async () => {
    store["test"] = "value";
    await service.removeItem("test");
    expect(store["test"]).toBeUndefined();
  });

  it("clear should empty localStorage", async () => {
    store["a"] = "1";
    store["b"] = "2";
    await service.clear();
    expect(store).toEqual({});
  });
});
