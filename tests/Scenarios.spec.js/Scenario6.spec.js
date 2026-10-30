import {test} from "@playwright/test"
test("increase a product", async({page})=>{
    await page.goto("https://www.medibuddy.in/order-medicines")
    await page.locator("//div[text()='Monsoon Essentials']").click()
      await page.locator("//button[text()='Add']").click()
      await page.waitForTimeout(2000)
      await page.getByAltText("dropdown").click()
      await page.waitForTimeout(2000)
    
    await page.locator("//button[text()='4']").click()
    await page.waitForTimeout(5000) 
})