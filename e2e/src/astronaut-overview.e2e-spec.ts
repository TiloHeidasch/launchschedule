import { browser, by, element } from "protractor";
import { clickElement } from "./e2e-helper";
describe("Astronaut", () => {
  beforeEach(() => {
    browser.driver.manage().window().maximize();
    browser.get("/#/astronaut");
    browser.refresh();
    browser.sleep(2000);
    browser.ignoreSynchronization = true;
  });
  it("should have a page title", () => {
    expect(element(by.id("title")).getText()).toBe("Astronauts");
  });
  it("should have a filter button", () => {
    expect(element(by.id("filter"))).toBeDefined();
  });
  it("should show search when clicking filter", () => {
    clickElement(browser, element(by.id("filter")));
    expect(element(by.tagName("ion-searchbar"))).toBeDefined();
  });
});
