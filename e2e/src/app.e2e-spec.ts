import { browser, by, element } from "protractor";
import { clickElement } from "./e2e-helper";

describe("App", () => {
  beforeEach(() => {
    browser.driver.manage().window().maximize();
    browser.get("/");
    browser.refresh();
    browser.sleep(2000);
    browser.ignoreSynchronization = true;
  });
  it("should have a title", () => {
    expect(browser.getTitle()).toEqual("RCKET");
  });
  describe("Menu", () => {
    beforeEach(() => {
    clickElement(browser,element(by.css("ion-menu-button")));
      browser.sleep(1000);
    });

    it("should have a menu", () => {
      const menu = element(by.tagName("ion-menu"));
      expect(menu).toBeDefined();
    });
    it("should have menu items", () => {
      const menuItems = element.all(by.tagName("ion-menu-toggle"));
      expect(menuItems).toBeDefined();
      expect(menuItems.count()).toBe(13);
    });
    it("should default to Launch", () => {
      expect(browser.getCurrentUrl()).toContain("/#/launch");
    });
    it("should default to Launch on unknown path", () => {
      browser.get("/#/unknown");
      browser.refresh();
      browser.sleep(2000);
      expect(browser.getCurrentUrl()).toContain("/#/launch");
    });
    it("should navigate to Event", () => {
      clickElement(browser,element(
        by.css("ion-menu-toggle:nth-of-type(2)>ion-item>ion-label")
      ));
      browser.sleep(2000);
      expect(browser.getCurrentUrl()).toContain("/#/event");
    });
    it("should navigate to Statistic", () => {
      clickElement(browser,element(
        by.css("ion-menu-toggle:nth-of-type(3)>ion-item>ion-label")
      ));
      browser.sleep(2000);
      expect(browser.getCurrentUrl()).toContain("/#/statistic");
    });
    it("should navigate to News", () => {
      clickElement(browser,element(
        by.css("ion-menu-toggle:nth-of-type(4)>ion-item>ion-label")
      ));
      browser.sleep(2000);
      expect(browser.getCurrentUrl()).toContain("/#/news");
    });
    it("should navigate to NASA Images", () => {
      clickElement(browser,element(
        by.css("ion-menu-toggle:nth-of-type(5)>ion-item>ion-label")
      ));
      browser.sleep(2000);
      expect(browser.getCurrentUrl()).toContain("/#/nasa");
    });
    it("should navigate to Agency", () => {
      clickElement(browser,element(
        by.css("ion-menu-toggle:nth-of-type(6)>ion-item>ion-label")
      ));
      browser.sleep(2000);
      expect(browser.getCurrentUrl()).toContain("/#/agency");
    });
    it("should navigate to Astronaut", () => {
      clickElement(browser,element(
        by.css("ion-menu-toggle:nth-of-type(7)>ion-item>ion-label")
      ));
      browser.sleep(2000);
      expect(browser.getCurrentUrl()).toContain("/#/astronaut");
    });
    it("should navigate to Facility", () => {
      clickElement(browser,element(
        by.css("ion-menu-toggle:nth-of-type(8)>ion-item>ion-label")
      ));
      browser.sleep(2000);
      expect(browser.getCurrentUrl()).toContain("/#/location");
    });
    it("should navigate to Pad", () => {
      clickElement(browser,element(
        by.css("ion-menu-toggle:nth-of-type(9)>ion-item>ion-label")
      ));
      browser.sleep(2000);
      expect(browser.getCurrentUrl()).toContain("/#/pad");
    });
    it("should navigate to Rocket", () => {
      clickElement(browser,element(
        by.css("ion-menu-toggle:nth-of-type(10)>ion-item>ion-label")
      ));
      browser.sleep(2000);
      expect(browser.getCurrentUrl()).toContain("/#/rocket");
    });
    it("should navigate to Spacecraft", () => {
      clickElement(browser,element(
        by.css("ion-menu-toggle:nth-of-type(11)>ion-item>ion-label")
      ));
      browser.sleep(2000);
      expect(browser.getCurrentUrl()).toContain("/#/spacecraft");
    });
    it("should navigate to Spacestation", () => {
      clickElement(browser,element(
        by.css("ion-menu-toggle:nth-of-type(12)>ion-item>ion-label")
      ));
      browser.sleep(2000);
      expect(browser.getCurrentUrl()).toContain("/#/spacestation");
    });
  });
});
