import { browser, by, element } from "protractor";
import { clickElement } from "./e2e-helper";
describe("Dashboard", () => {
  beforeEach(() => {
    browser.driver.manage().window().maximize();
    browser.get("/#/dashboard");
    browser.refresh();
    browser.sleep(2000);
    browser.ignoreSynchronization = true;
  });
  describe("Starship", () => {
    it("should have a page title", () => {
      expect(element(by.id("title")).getText()).toBe("Starship");
    });
  });
});
