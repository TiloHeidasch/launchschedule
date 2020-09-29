import { browser, by, element } from "protractor";

describe("new App", () => {
  it("should have a title", () => {
    browser.get("/#/launch");
    browser.refresh();
    expect(browser.getTitle()).toEqual("Launchschedule");
  });
});
