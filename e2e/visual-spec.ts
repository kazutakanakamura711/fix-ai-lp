import { expect, test } from "@playwright/test";

test("captures the full page for human visual review", async ({
  page,
}, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });

  await page.goto("/");
  await expect(page.getByRole("main")).toBeVisible();

  const screenshotName = testInfo.project.name.startsWith("mobile")
    ? "fix-ai-mobile-390.png"
    : "fix-ai-desktop-1440.png";

  await page.screenshot({
    path: `e2e/screenshots/${screenshotName}`,
    fullPage: true,
    animations: "disabled",
  });

  expect(errors).toEqual([]);
});
