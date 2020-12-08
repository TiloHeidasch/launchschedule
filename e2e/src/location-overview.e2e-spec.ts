import { browser, by, element } from "protractor";

describe("Facility", () => {
  beforeEach(() => {
    browser.get("/#/location");
    browser.refresh();
    browser.sleep(2000);
    browser.ignoreSynchronization = true;
  });
  it("should have a page title", () => {
    expect(element(by.id("title")).getText()).toBe("Facilities");
  });
  it("should have a filter button", () => {
    expect(element(by.id("filter"))).toBeDefined();
  });
  it("should show search when clicking filter", () => {
    element(by.id("filter")).click();
    expect(element(by.tagName("ion-searchbar"))).toBeDefined();
  });
  it("should open Detail Page on click", () => {
    browser.sleep(2000);
    element(by.tagName("app-location-list-entry")).click();
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toContain("/#/location/");
  });
});
