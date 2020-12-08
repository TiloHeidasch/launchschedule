import { browser, by, element } from "protractor";

describe("Statistic", () => {
  beforeEach(() => {
    browser.get("/#/statistic");
    browser.refresh();
    browser.sleep(2000);
    browser.ignoreSynchronization = true;
  });
  it("should have a page title", () => {
    expect(element(by.id("title")).getText()).toBe("Statistics");
  });
  it("should have a randomize button", () => {
    expect(element(by.id("randomize"))).toBeDefined();
  });
  it("should start randomization when clicking random", () => {
    element(by.id("randomize")).click();
    browser.sleep(10000);
    expect(
      element(by.css("p-chart:nth-of-type(1)>div:nth-of-type(1)>canvas"))
    ).toBeDefined();
  });
  it("should show table after step 1", () => {
    element(
      by.css("ion-radio-group>ion-item:nth-of-type(1)>ion-radio")
    ).click();
    element(by.id("step_1_complete_button")).click();
    browser.sleep(1000);
    expect(element(by.css("p-table"))).toBeDefined();
  });
  it("should not show table after step 1 is reopened", () => {
    element(
      by.css("ion-radio-group>ion-item:nth-of-type(1)>ion-radio")
    ).click();
    element(by.id("step_1_complete_button")).click();
    browser.sleep(1000);
    element(by.id("step_1_open_button")).click();
    expect(element(by.css("p-table"))).toBeUndefined();
  });
});
