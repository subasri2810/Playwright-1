//how to handle new tab

import {expect, test} from "@playwright/test"

test("Tab Handle for flipkart",async({browser})=>{
    let context=await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off");
    await page.click('(//a[@title="Sneakers For Men"])[1]');
    // await page.waitForTimeout(3000)
    
    await page.waitForTimeout(3000)
    console.log(await page.url());
    
})

test.only("Tab Handle for Lalbus",async({browser})=>{
    let context=await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://www.redbus.in/");
    
    const [newTab]=await Promise.all([
        page.waitForEvent('popup'),
        page.click("//a[.='Privacy policy']")
       

    ])
    
    await page.waitForTimeout(3000)
     await newTab.click("(//span[@class='name_rb_secondary_item'])[3]")
    let url1=console.log(await page.url());
    await expect(url1).not.toBe("https://www.redbus.in/")
    
    
})

// in the same way we can handle the new window also 

//create promise wait for event and click on the element which is goin to open in new window then store the window 
//then take the reference of window and perform the actions