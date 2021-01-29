import { browser, by, element } from "protractor";

describe("News", () => {
  beforeEach(() => {
    browser.get("/#/news");
    browser.refresh();
    browser.sleep(2000);
    browser.ignoreSynchronization = true;
  });
  it("should have a page title", () => {
    expect(element(by.id("title")).getText()).toBe("News");
  });
});
