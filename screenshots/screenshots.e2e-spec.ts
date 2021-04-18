import { browser, by, element } from "protractor";
var fs = require("fs");
const types = [
  "agency",
  "astronaut",
  "event",
  "agency",
  "launch",
  "location",
  "pad",
  "rocket",
  "spacecraft",
  "spacestation",
];
const newsTypes = ["article", "blog", "report"];
const nasaImageTypes = ["astro", "marble", "curiosity", "perseverance"];
describe("screenshots", () => {
  let isLight = false;
  describe("light", () => {
    beforeEach(() => {
      browser.get("/");
      browser.refresh();
      browser.sleep(2000);
      browser.ignoreSynchronization = true;
      isLight = true;
    });
    types.forEach((type) => {
      describe(type, () => {
        beforeEach(() => {
          navigateToType(type);
        });

        it("overview", () => {
          screenshot(type + "_overview", isLight);
        });
        it("detail", () => {
          browser.sleep(2000);
          const item = element(by.tagName("app-" + type + "-list-entry"));
          browser.executeScript(scrollIntoView, item);
          browser.sleep(2000);
          item.click();
          browser.sleep(2000);
          screenshot(type + "_detail", isLight);
        });
      });
    });
    describe("statistic", () => {
      beforeEach(() => {
        navigateToType("statistic");
      });
      it("overview", () => {
        screenshot("statistic_overview", isLight);
      });
      it("randomized", () => {
        element(by.id("randomize")).click();
        browser.sleep(10000);
        screenshot("statistic_random", isLight);
        browser.executeScript(scrollIntoView, element(by.id("step_4")));
        browser.sleep(1000);
        screenshot("statistic_graph", isLight);
      });
    });
    describe("news", () => {
      newsTypes.forEach((type) => {
        describe(type, () => {
          beforeEach(() => {
            navigateToType("news/" + type);
          });
          it("overview", () => {
            screenshot("news_" + type + "_overview", isLight);
          });
          it("detail", () => {
            element(by.css("app-news-list-entry")).click();
            browser.sleep(2000);
            screenshot("news_" + type + "_detail", isLight);
          });
        });
      });
    });
    describe("nasa", () => {
      nasaImageTypes.forEach((type) => {
        describe(type, () => {
          beforeEach(() => {
            navigateToType("nasa/" + type);
          });
          it("overview", () => {
            screenshot("nasa_" + type + "_overview", isLight);
          });
          it("detail", () => {
            element(by.css("ion-img-viewer")).click();
            browser.sleep(2000);
            screenshot("nasa_" + type + "_detail", isLight);
          });
        });
      });
    });
  });
  describe("dark", () => {
    beforeAll(() => {
      toggleDark();
      isLight = false;
    });
    afterAll(() => {
      toggleDark();
      isLight = true;
    });
    beforeEach(() => {
      browser.get("/");
      browser.refresh();
      browser.sleep(2000);
      browser.ignoreSynchronization = true;
    });
    types.forEach((type) => {
      describe(type, () => {
        beforeEach(() => {
          navigateToType(type);
          browser.sleep(5000);
        });
        it("overview", () => {
          screenshot(type + "_overview", isLight);
        });
        it("detail", () => {
          element(by.css("app-" + type + "-list-entry")).click();
          browser.sleep(2000);
          screenshot(type + "_detail", isLight);
        });
      });
    });
    describe("statistic", () => {
      beforeEach(() => {
        navigateToType("statistic");
          browser.sleep(5000);
      });
      it("overview", () => {
        screenshot("statistic_overview", isLight);
      });
      it("randomized", () => {
        element(by.id("randomize")).click();
        browser.sleep(10000);
        screenshot("statistic_random", isLight);
        browser.executeScript(scrollIntoView, element(by.id("step_4")));
        browser.sleep(1000);
        screenshot("statistic_graph", isLight);
      });
    });
    describe("news", () => {
      newsTypes.forEach((type) => {
        describe(type, () => {
          beforeEach(() => {
            navigateToType("news/" + type);
            browser.sleep(5000);
          });
          it("overview", () => {
            screenshot("news_" + type + "_overview", isLight);
          });
          it("detail", () => {
            element(by.css("app-news-list-entry")).click();
            browser.sleep(2000);
            screenshot("news_" + type + "_detail", isLight);
          });
        });
      });
    });
    describe("nasa", () => {
      nasaImageTypes.forEach((type) => {
        describe(type, () => {
          beforeEach(() => {
            navigateToType("nasa/" + type);
            browser.sleep(5000);
          });
          it("overview", () => {
            screenshot("nasa_" + type + "_overview", isLight);
          });
          it("detail", () => {
            element(by.css("ion-img-viewer")).click();
            browser.sleep(2000);
            screenshot("nasa_" + type + "_detail", isLight);
          });
        });
      });
    });
  });
});
function toggleDark() {
  browser.get("/");
  browser.refresh();
  browser.sleep(2000);
  browser.ignoreSynchronization = true;
  element(by.css("ion-menu-button")).click();
  browser.sleep(500);
  const darkToggle = element(by.css("ion-toggle"));
  browser.executeScript(scrollIntoView, darkToggle);
  browser.sleep(500);
  darkToggle.click();
  browser.sleep(100);
  browser.refresh();
  browser.sleep(2000);
}
function screenshot(filename, isLight) {
  browser.takeScreenshot().then(function (png) {
    writeScreenShot(
      png,
      "screenshots/images/" +
        (isLight ? "light" : "dark") +
        "_" +
        filename +
        ".png"
    );
  });
}
var scrollIntoView = function (element) {
  arguments[0].scrollIntoView();
};
function writeScreenShot(data, filename) {
  var stream = fs.createWriteStream(filename);
  stream.write(Buffer.from(data, "base64"));
  stream.end();
}
function navigateToType(type) {
  browser.get("/#/" + type);
  browser.refresh();
  browser.sleep(2000);
  browser.ignoreSynchronization = true;
}
