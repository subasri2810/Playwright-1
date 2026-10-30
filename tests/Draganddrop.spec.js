import {test} from "@playwright/test"
import { log } from "node:console"
//drag and drop by using approach1
test("drag and drop 1", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop?sublist=0")
    await page.locator("//div[text()='Drag Me']").click()
    await page.waitForTimeout(2000)
    await page.mouse.down()
    await page.waitForTimeout(2000)
    await page.mouse.move(500,-700)
    await page.waitForTimeout(2000)
})
//drag and drop by using approach 2
test("drag and drop 2", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    await page.locator("//div[text()='Mobile Charger']").click()
    await page.waitForTimeout(2000)
    await page.mouse.down()
    await page.waitForTimeout(2000)
    await page.locator(".drop-column").first().hover()
    await page.waitForTimeout(2000)
    await page.mouse.up()
    await page.waitForTimeout(2000)
})
//drag and drop by using approach 3 ==>bounding box
test("bounding box", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
     await page.locator("//div[text()='Mobile Charger']").hover()
    await page.waitForTimeout(2000)
    await page.mouse.down()
    await page.waitForTimeout(2000)
    let box=await page.locator(".drop-column").first().boundingBox()
    await page.waitForTimeout(2000)
    console.log(box); 
    await page.mouse.move(box.x,box.y)
    await page.mouse.up()
    await page.waitForTimeout(2000)
    
})
//drag and drop by using approach 4
test.only("drag to", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    await page.locator("//div[text()='Mobile Charger']").hover()
    await page.waitForTimeout(2000)
   let mobile_charger= await page.locator("//div[text()='Mobile Charger']")
   await page.waitForTimeout(2000)
   let mobile_container=await page.locator(".drop-column").first()
   await mobile_charger.dragTo(mobile_container)
   await page.waitForTimeout(2000)
}) 