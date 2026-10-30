import { expect, test } from "@playwright/test"

test("Title Assertion", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/")

    await expect(page).toHaveTitle("Swag Labs")

})


test("URL Assertion", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/")

    await expect(page).toHaveURL("https://www.saucedemo.com/")

})


test("Visible Assertion", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/")

    await expect(page.locator("#user-name")).toBeVisible()

})


test("Enabled Assertion", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/")

    await expect(page.locator("#login-button")).toBeEnabled()

})


test("Editable Assertion", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/")

    await expect(page.locator("#user-name")).toBeEditable()

})


test("Empty Assertion", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/")

    await expect(page.locator("#user-name")).toBeEmpty()

})


test("Checked Assertion", async ({ page }) => {

    await page.goto("https://demoqa.com/checkbox")

    await page.locator("input[type='checkbox']").check()

    await expect(page.locator("input[type='checkbox']")).toBeChecked()

})


test("Count Assertion", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/")

    await page.locator("#user-name").fill("standard_user")
    await page.locator("#password").fill("secret_sauce")
    await page.locator("#login-button").click()

    await expect(page.locator(".inventory_item")).toHaveCount(6)

})


test("Contain Text Assertion", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/")

    await page.locator("#user-name").fill("standard_user")
    await page.locator("#password").fill("secret_sauce")
    await page.locator("#login-button").click()

    await expect(page.locator(".title")).toContainText("Products")

})


test("Have Text Assertion", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/")

    await page.locator("#user-name").fill("standard_user")
    await page.locator("#password").fill("secret_sauce")
    await page.locator("#login-button").click()

    await expect(page.locator(".title")).toHaveText("Products")

})


test("Disabled Assertion", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/")

    await expect(page.locator("#login-button")).toBeDisabled()

})
