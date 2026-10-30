import {test,expect} from "@playwright/test"
//left click
test("left click", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
await page.getByRole('button',{name:"Yes"}).click()
await expect(page.locator(".text-green-600.p-1.px-2.ms-2.rounded-md")).toHaveText('You selected "Yes"')
})
//double click
test("double click", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2")
await page.getByText("No").click({clickCount:2})
await expect(page.locator(".text-green-600.p-1.px-2.ms-2.rounded-md")).toHaveText('You selected "No"')
})
//right click
test("right click",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1");
    await page.locator("#btn_a").click({button:'right'});
    await page.locator("//div[.='Yes']").click();
    await page.waitForTimeout(2000);

})
//dispatch event
test("dispatch event", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4")
    // await page.locator("#submit").click({force:true})
    await page.locator("#submit").dispatchEvent('click')
await page.waitForTimeout(2000);
})
//hover action
test("mouse hover", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0")
    await page.locator(".w-6.h-6.mt-4.absolute.ml-72.cursor-pointer").hover()
    await page.waitForTimeout(2000)
})
//click and hold===>down
test("Down up",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0");
    //await page.locator("#btn_a").click({clickCount:2});
    await page.locator("#circle").hover();
    await page.mouse.down();   
     await page.mouse.down();
    await page.waitForTimeout(4000);
    await page.mouse.up();    
    await page.mouse.up();
    await page.waitForTimeout(4000);
})