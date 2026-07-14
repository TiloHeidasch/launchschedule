import { Page } from "@playwright/test";

export async function gotoHash(page: Page, hashPath = "") {
  await page.goto(`/${hashPath}`);
  await page.waitForLoadState("networkidle").catch(() => undefined);
}

export async function clickElement(page: Page, selector: string) {
  const locator = page.locator(selector).first();
  await locator.scrollIntoViewIfNeeded();
  await locator.click();
}
