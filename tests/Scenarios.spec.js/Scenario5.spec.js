import {test} from "@playwright/test"
test("Remove a product", async({page})=>{
    await page.goto("https://www.medibuddy.in/order-medicines")
    await page.locator("//div[text()='Monsoon Essentials']").click()
      await page.locator("//button[text()='Add']").click()
      await page.getByAltText("dropdown").click()
    
    await page.locator("//p[text()='Remove']").click()
    await page.waitForTimeout(5000)
})