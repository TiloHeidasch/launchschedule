import { browser, by, element } from "protractor";
import { clickElement } from "./e2e-helper";

describe("Statistic", () => {
  beforeEach(() => {
    browser.driver.manage().window().maximize();
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
    clickElement(browser, element(by.id("randomize")));
    browser.sleep(10000);
    expect(
      element(by.css("p-chart:nth-of-type(1)>div:nth-of-type(1)>canvas"))
    ).toBeDefined();
  });
  it("should show table after step 1", () => {
    clickElement(browser, element(
      by.css("ion-radio-group>ion-item:nth-of-type(1)>ion-radio")
    ));
    clickElement(browser, element(by.id("step_1_complete_button")));
    browser.sleep(1000);
    expect(element(by.css("p-table"))).toBeDefined();
  });
});
