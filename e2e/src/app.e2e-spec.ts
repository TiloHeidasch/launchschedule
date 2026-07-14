import { test, expect } from "@playwright/test";
import { clickElement, gotoHash } from "./e2e-helper";

test.describe("App", () => {
  test.beforeEach(async ({ page }) => {
    await gotoHash(page, "");
  });

  test("should have a title", async ({ page }) => {
    await expect(page).toHaveTitle("RCKET");
  });

  test.describe("Menu", () => {
    test.beforeEach(async ({ page }) => {
      await clickElement(page, "ion-menu-button");
      await page.waitForTimeout(1000);
    });

    test("should have a menu", async ({ page }) => {
      await expect(page.locator("ion-menu")).toBeVisible();
    });

    test("should have menu items", async ({ page }) => {
      await expect(page.locator("ion-menu-toggle")).toHaveCount(15);
    });

    test("should default to Launch", async ({ page }) => {
      await expect(page).toHaveURL(/\/#\/launch/);
    });

    test("should default to Launch on unknown path", async ({ page }) => {
      await gotoHash(page, "#/unknown");
      await expect(page).toHaveURL(/\/#\/launch/);
    });

    const navItems: { name: string; index: number; url: RegExp }[] = [
      { name: "Event", index: 2, url: /\/#\/event/ },
      { name: "Statistic", index: 3, url: /\/#\/statistic/ },
      { name: "News", index: 4, url: /\/#\/news/ },
      { name: "3D Solar System", index: 5, url: /\/#\/solar-system/ },
      { name: "NASA Images", index: 6, url: /\/#\/nasa/ },
      { name: "Starship Dashboard", index: 7, url: /\/#\/dashboard\/starship/ },
      { name: "Agency", index: 8, url: /\/#\/agency/ },
      { name: "Astronaut", index: 9, url: /\/#\/astronaut/ },
      { name: "Facility", index: 10, url: /\/#\/location/ },
      { name: "Pad", index: 11, url: /\/#\/pad/ },
      { name: "Rocket", index: 12, url: /\/#\/rocket/ },
      { name: "Spacecraft", index: 13, url: /\/#\/spacecraft/ },
      { name: "Spacestation", index: 14, url: /\/#\/spacestation/ },
    ];

    for (const item of navItems) {
      test(`should navigate to ${item.name}`, async ({ page }) => {
        await clickElement(
          page,
          `ion-menu-toggle:nth-of-type(${item.index})>ion-item>ion-label`
        );
        await expect(page).toHaveURL(item.url);
      });
    }
  });
});
