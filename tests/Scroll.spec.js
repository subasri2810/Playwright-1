import {test} from "@playwright/test"
//Scroll right
test("Scroll right", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabHorizontal")
    await page.waitForTimeout(2000)
    await page.mouse.wheel(100,0)
    await page.waitForTimeout(2000)
})
//Scroll left
test("Scroll left", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabHorizontal")
    await page.waitForTimeout(2000)
    await page.mouse.wheel(-200,0)
    await page.mouse.wheel(2000)
})
//Scroll Up
test("Scroll Up", async({page})=>{
   await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
   await page.waitForTimeout(2000)
   await page.mouse.wheel(0,200)
})
//Scroll down
test("Scroll downn", async({page})=>{
   await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
   await page.waitForTimeout(2000)
   await page.mouse.wheel(0,-200)
await page.waitForTimeout(2000)
})
