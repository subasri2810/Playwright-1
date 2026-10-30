import {test} from '@playwright/test'
test("frames",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    let frames=await page.frames();
    console.log(frames.length);
     //----------approach1 using page.frame inside this we can pass url or name
    let frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1'});
    await frame1.locator("//input[@name='mytext1']").fill("Singh is King");
    await page.waitForTimeout(3000);
    const a=await frame1.locator("//input[@name='mytext1']").inputValue();
    await console.log(a);

   
    const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3'})
    await frame3.locator('//input[@name="mytext3"]').fill("ddddddddddddddddddddddddddddddddd")
    await page.waitForTimeout(3000);
    
    
    //-------------approach 2------------------ using frame locator
    let frame2=await page.frameLocator("//frame[@src='frame_2.html']")
        await frame2.locator("//input[@name='mytext2']").fill("kuuutttttaaa")
        await page.waitForTimeout(3000);

    //---------------approach 3 using frame content------------
     let frame4=await page.locator('//frame[@src="frame_3.html"]').contentFrame();
     await frame4.locator('//input[@name="mytext3"]').fill("888888888888888888888888");
     await page.waitForTimeout(3000);
     const txt=await frame4.frameLocator("//iframe[@src='https://docs.google.com/forms/d/e/1FAIpQLSf5WiH3jEQApYku0Rl_nreU6_YMuLKAH5ffHuASyykQSIBjmg/viewform?embedded=true']").locator("//span[@class='aDTYNe snByac OvPDhc OIC90c' and .='I am a human']").click();
     //await txt.click()
     await page.waitForTimeout(3000);
        
})