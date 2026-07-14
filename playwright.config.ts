import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e/src",
  testMatch: "**/*.e2e-spec.ts",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 3 : undefined,
  reporter: process.env.CI ? [["list"], ["html", { open: "never" }]] : "list",
  timeout: 60000,
  expect: {
    timeout: 15000,
  },
  use: {
    baseURL: "http://localhost:4200/",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "Pixel 2 XL",
      use: { ...devices["Pixel 2"] },
    },
  ],
  webServer: {
    command: "npm start -- --port 4200",
    url: "http://localhost:4200/",
    reuseExistingServer: !process.env.CI,
    timeout: 180000,
  },
});
