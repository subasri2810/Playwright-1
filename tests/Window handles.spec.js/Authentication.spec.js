import {test} from "@playwright/test"
test.only("Authentication", async({browser})=>{
    const context=await browser.newContext({httpCredentials:{username:'admin', password:'admin'}})
    const page=await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/auth?sublist=0")
await page.getByRole('link', {name:'Login'}).click()
await page.waitForTimeout(5000)
})