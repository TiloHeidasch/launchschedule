import { test, expect } from "@playwright/test";
import { gotoHash } from "./e2e-helper";

test.describe("Dashboard", () => {
  test.beforeEach(async ({ page }) => {
    await gotoHash(page, "#/dashboard");
  });

  test.describe("Starship", () => {
    test("should have a page title", async ({ page }) => {
      await expect(page.locator("#title")).toHaveText("Starship");
    });
  });
});
