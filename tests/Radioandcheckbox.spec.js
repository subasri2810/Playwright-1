import { expect, test } from "@playwright/test";

test("Radio button", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0");

    await page.locator("#attended").click();

    const b = await page.locator("#attended").isChecked();
    console.log(b);

    await expect(page.locator("#attended")).toBeChecked();
});