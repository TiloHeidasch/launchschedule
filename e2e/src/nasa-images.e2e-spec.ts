import { browser, by, element } from "protractor";

describe("NASA Images", () => {
  beforeEach(() => {
    browser.driver.manage().window().maximize();
    browser.get("/#/nasa");
    browser.refresh();
    browser.sleep(2000);
    browser.ignoreSynchronization = true;
  });
  it("should have a page title", () => {
    expect(element(by.id("title")).getText()).toBe("NASA Images");
  });
});
