import { expect, test } from "@playwright/test";

test.describe("FIX AI landing page", () => {
  test("shows the complete page without runtime errors or horizontal overflow", async ({
    page,
  }) => {
    const runtimeErrors: string[] = [];
    const consoleErrors: string[] = [];

    page.on("pageerror", (error) => runtimeErrors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") consoleErrors.push(message.text());
    });

    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "開発の面倒を、AIエージェントに。",
      }),
    ).toBeVisible();

    for (const sectionId of [
      "features",
      "how-it-works",
      "metrics",
      "pricing",
      "faq",
    ]) {
      const section = page.locator(`#${sectionId}`);
      await section.scrollIntoViewIfNeeded();
      await expect(section).toBeVisible();
    }

    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(hasHorizontalOverflow).toBe(false);
    expect(runtimeErrors).toEqual([]);
    expect(consoleErrors).toEqual([]);
  });

  test("operates the single-open FAQ with click and keyboard", async ({
    page,
  }) => {
    await page.goto("/");

    const firstQuestion = page.getByRole("button", {
      name: "どのような開発環境に対応していますか？",
    });
    const secondQuestion = page.getByRole("button", {
      name: "自社のコードが学習に使われることはありますか？",
    });

    await firstQuestion.scrollIntoViewIfNeeded();
    await expect(firstQuestion).toHaveAttribute("aria-expanded", "true");
    await firstQuestion.click();
    await expect(firstQuestion).toHaveAttribute("aria-expanded", "false");
    await firstQuestion.click();
    await expect(firstQuestion).toHaveAttribute("aria-expanded", "true");
    await expect(
      page.getByText(/GitHubと連携し、主要なJavaScript/),
    ).toBeVisible();

    await page.keyboard.press("Tab");
    await expect(secondQuestion).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(secondQuestion).toHaveAttribute("aria-expanded", "true");
    await expect(firstQuestion).toHaveAttribute("aria-expanded", "false");

    await page.keyboard.press("Space");
    await expect(secondQuestion).toHaveAttribute("aria-expanded", "false");
  });

  test("keeps CTA actions on the current page", async ({ page }) => {
    const runtimeErrors: string[] = [];
    const consoleErrors: string[] = [];

    page.on("pageerror", (error) => runtimeErrors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") consoleErrors.push(message.text());
    });

    await page.goto("/");
    const startingUrl = page.url();

    const noOpActions = page.locator('button[aria-label*="現在は"]:visible');
    const actionCount = await noOpActions.count();
    expect(actionCount).toBeGreaterThan(0);

    for (let index = 0; index < actionCount; index += 1) {
      const action = noOpActions.nth(index);
      await action.scrollIntoViewIfNeeded();
      await action.click();
      await expect(page).toHaveURL(startingUrl);
    }

    expect(runtimeErrors).toEqual([]);
    expect(consoleErrors).toEqual([]);
  });

  for (const width of [768, 900, 1024]) {
    test(`keeps the main sections stable at ${width}px`, async ({ page }) => {
      const runtimeErrors: string[] = [];
      const consoleErrors: string[] = [];

      page.on("pageerror", (error) => runtimeErrors.push(error.message));
      page.on("console", (message) => {
        if (message.type() === "error") consoleErrors.push(message.text());
      });

      await page.setViewportSize({ width, height: 900 });
      await page.goto("/");

      const viewport = page.viewportSize();
      expect(viewport).not.toBeNull();

      for (const sectionId of [
        "features",
        "how-it-works",
        "metrics",
        "pricing",
        "faq",
      ]) {
        const section = page.locator(`#${sectionId}`);
        await expect(section).toBeVisible();

        const box = await section.boundingBox();
        expect(box).not.toBeNull();
        expect(box!.x).toBeGreaterThanOrEqual(-0.5);
        expect(box!.x + box!.width).toBeLessThanOrEqual(viewport!.width + 0.5);
      }

      const dimensions = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
      }));
      expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.innerWidth);
      expect(runtimeErrors).toEqual([]);
      expect(consoleErrors).toEqual([]);
    });
  }
});
