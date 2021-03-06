import { browser, by, element } from "protractor";
import { clickElement } from "./e2e-helper";
describe("News", () => {
  beforeEach(() => {
    browser.driver.manage().window().maximize();
    browser.get("/#/news");
    browser.refresh();
    browser.sleep(2000);
    browser.ignoreSynchronization = true;
  });
  it("should have a page title", () => {
    expect(element(by.id("title")).getText()).toBe("News");
  });
});
