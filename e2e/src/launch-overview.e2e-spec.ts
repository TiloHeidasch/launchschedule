import { browser, by, element } from "protractor";

describe("Launch", () => {
  beforeEach(() => {
    browser.get("/#/launch");
    browser.refresh();
    browser.sleep(2000);
  });
  it("should have a page title", () => {
    expect(element(by.id("title")).getText()).toBe("Launches");
  });
  it("should have a filter button", () => {
    expect(element(by.id("filter"))).toBeDefined();
  });
  it("should show search when clicking filter", () => {
    element(by.id("filter")).click();
    expect(element(by.tagName("ion-searchbar"))).toBeDefined();
  });
  it("should open Detail Page on click", () => {
    element(by.tagName("app-launch-list-entry")).click();
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toContain("/#/launch/");
  });
});
