import {test} from "@playwright/test"
test("keyboard Actions", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.getByPlaceholder("Enter your name").click()
    await page.keyboard.insertText("Suba")
    await page.keyboard.down('Space')
    await page.keyboard.down('Space')
    await page.keyboard.insertText("S")
    await page.keyboard.insertText("hree")
    await page.keyboard.press('Tab')
    await page.keyboard.insertText("subashree0978@gmail.com")
    await page.keyboard.press('Control+A')
     await page.keyboard.press('Control+C')
     await page.keyboard.press('Tab')
     await page.keyboard.press('Control+V')
     await page.locator("//span[@class='absolute text-slate-600 text-[18px] bg-gray-100']").click()
     await page.waitForTimeout(10000)
     await page.close()
})
//scroll the page using keyboard
test.only("Scroll", async({page})=>{
    await page.goto("https://www.amazon.in/")
    for(let i=0; i<=5 ;i++){
        await page.keyboard.press('ArrowDown')
    }
    await page.waitForTimeout(5000)
    for(let i=0; i<=5 ;i++){
        await page.keyboard.press('ArrowUp')
    }
    await page.waitForTimeout(5000)
})