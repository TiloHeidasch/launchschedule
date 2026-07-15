import { test, expect } from "@playwright/test";
import { clickElement, gotoHash } from "./e2e-helper";

test.describe("Statistic", () => {
  test.beforeEach(async ({ page }) => {
    await gotoHash(page, "#/statistic");
  });

  test("should have a page title", async ({ page }) => {
    await expect(page.locator("#title")).toHaveText("Statistics");
  });

  test("should have a randomize button", async ({ page }) => {
    await expect(page.locator("#randomize")).toBeVisible();
  });

  test("should advance to step 2 after completing step 1", async ({ page }) => {
    await clickElement(
      page,
      "ion-radio-group>ion-item:nth-of-type(1)>ion-radio"
    );
    await clickElement(page, "#step_1_complete_button");
    await expect(page.locator("#step_2")).toBeVisible();
  });
});
