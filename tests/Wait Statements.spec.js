
import { test } from "@playwright/test";

// File-level action timeout
test.use({ actionTimeout: 3000 });

// Test 1: Auto-wait
test("Autowait", async ({ page }) => {
    test.setTimeout(10000);

    await page.goto("https://demowebshop.tricentis.com");
    await page.getByRole("link", { name: "Log in" }).click();
});

// Test 2: Second test
test("second test", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com");
    await page.getByRole("link", { name: "sdwfrtda" }).click();
});

// Test 3: waitForEvent
test("Download event", async ({ page }) => {
    await page.goto("YOUR_PAGE_URL");

    const [download] = await Promise.all([
        page.waitForEvent("download"),
        page.locator("#downloadButton").click()
    ]);

    console.log(await download.suggestedFilename());
});
