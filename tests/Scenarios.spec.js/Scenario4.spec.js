import {test} from "@playwright/test"
test("Add a product", async({page})=>{
    await page.goto("https://www.medibuddy.in/order-medicines")
    await page.locator("//div[text()='Monsoon Essentials']").click()
    await page.locator("//button[@aria-label='Add this item to cart']").click()
    await page.waitForTimeout(5000)
})