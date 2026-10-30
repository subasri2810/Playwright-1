import {test} from "@playwright/test"
import { promises } from "node:dns";
test("hardcoded wait",async({page})=>{
    await page.waitForTimeout(2000);
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.waitForTimeout(2000);
    await page.getByLabel("Username").fill("Student");
    await page.waitForTimeout(2000);
    await page.getByLabel("Password").fill("Password123");
    await page.waitForTimeout(2000)
    await page.locator("#submit").click();
})


//hardcoded wait
test("hard Coded",async({page})=>{
    await page.goto('https://www.amazon.in/');
    await page.getByPlaceholder("Search Amazon.in").fill("shoes");
    await page.waitForTimeout(3000);
    let a=await page.locator("//div[@role='row']").allTextContents();
    console.log(a);
    
})

test("explicit wait",async({page})=>{
    
    await page.goto('https://www.amazon.in/');
    await page.getByPlaceholder("Search Amazon.in").fill("shoes");

    //wait for selector in explicit wait
    await page.waitForSelector("#sac-suggestion-row-2",{state:'vivible'});
    await page.locator("//div[@role='row']",{hasText:'for woman'}).waitFor(5000);
    let a=await page.locator("//div[@role='row']").allTextContents();
    console.log(a);
    
})


test("Waitfor navigation",async({page})=>{
    await page.goto("https://www.amazon.in/");
    await Promise.all([
           page.waitForNavigation(),
    page.click("#nav-cart-count")
    ])

    await page.waitForLoadState("load",{timeout:5000});
    page.click("#nav-cart-count");
    
})
//how to use wait for event 
test.only("wait for event",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0");
    await page.fill('#writeArea',"I am aditya singh");
    let [downloadFile]= await Promise.all([
        page.waitForEvent('download'),
        page.click('#downloadButton'),
    ])
    console.log(await downloadFile.path());
    
})