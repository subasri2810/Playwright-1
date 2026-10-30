import {test} from "@playwright/test"
import { permission } from "process"
test("Notification", async({browser})=>{
  
    const context=await browser.newContext({permissions:['notifications', 'microphone', 'camera']})
    const page=await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/auth?sublist=0")
    await page.getByRole("button", {name:"Notification"}).click()
    let status=await page.evaluate(()=>{
        return Notification.requestPermission()
    })
    console.log("Permissions:" +status);
    await context.clearPermissions()
    let status1=await page.evaluate(()=>{
        return Notification.requestPermission()
    })
    console.log("permissions:" +status1);
    
    
})