import {test} from "@playwright/test"
test("Search a product", async({page})=>{
    await page.goto("https://www.medibuddy.in/order-medicines")
    await page.getByPlaceholder("Find medicine, health products, & more").fill("nevsoft cleansing lotion")
    await page.locator(".undefined.inline-flex.items-center.justify-center").click()
})
