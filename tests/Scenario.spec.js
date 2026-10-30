import { test } from "@playwright/test";

test("Login", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/");

    await page.getByPlaceholder("Username").fill("standard_user");
    await page.waitForTimeout(1000);

    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.waitForTimeout(1000);

    await page.getByRole("button", { name: "Login" }).click();
    await page.waitForTimeout(2000);

    await page.locator("#add-to-cart-sauce-labs-bike-light").click();

    await page.waitForTimeout(2000);
    await page.locator(".shopping_cart_link").click();
    await page.waitForTimeout(1000);
    await page.locator("#checkout").click();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder("First Name").fill("Suba");
    await page.waitForTimeout(1000);
    await page.getByPlaceholder("Last Name").fill("Shree");
    await page.waitForTimeout(1000);
   await page.getByPlaceholder("Zip/Postal Code").fill("628501");
    await page.waitForTimeout(1000);
    await page.locator("#continue").click();
    await page.waitForTimeout(1000);
    await page.locator("#finish").click();
    await page.waitForTimeout(1000);
    await page.getByText("Back Home").click();
    await page.waitForTimeout(1000);

});