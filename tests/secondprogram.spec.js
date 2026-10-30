import {test} from "@playwright/test"
test.use({actionTimeout:3000})
test("secondprogram", async({page})=>{
    await page.goto("https://www.redbus.in")

})