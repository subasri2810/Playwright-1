import { test } from "@playwright/test";

// File-level autowait
// Applies to all tests in this file
// test.use({ actionTimeout: 5000 });

test("autowait", async ({ browser }) => {

    // Create browser context
    let context = await browser.newContext();

    // Create page
    let page = await context.newPage();

    // Page-level autowait
    // Applies to actions/locators on this page
    await page.setDefaultTimeout(7000);

    await page.goto(
        "https://practicetestautomation.com/practice-test-login/"
    );

    // Uses the 7-second default timeout
    await page.locator("#username").fill("aditya");
});