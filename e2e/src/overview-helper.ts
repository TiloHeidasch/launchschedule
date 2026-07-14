import { test, expect } from "@playwright/test";
import { clickElement, gotoHash } from "./e2e-helper";

export function overviewSpec(options: {
  describe: string;
  hashPath: string;
  title: string;
  hasFilter?: boolean;
}) {
  const { describe, hashPath, title, hasFilter = true } = options;

  test.describe(describe, () => {
    test.beforeEach(async ({ page }) => {
      await gotoHash(page, hashPath);
    });

    test("should have a page title", async ({ page }) => {
      await expect(page.locator("#title")).toHaveText(title);
    });

    if (hasFilter) {
      test("should have a filter button", async ({ page }) => {
        await expect(page.locator("#filter")).toBeVisible();
      });

      test("should show search when clicking filter", async ({ page }) => {
        await clickElement(page, "#filter");
        await expect(page.locator("ion-searchbar")).toBeVisible();
      });
    }
  });
}
