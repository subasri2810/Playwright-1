import {test,expect, chromium} from "@playwright/test"
test.only("browser control",async({page})=>{

    await page.goto("https://ShoppersStack.com");
    await page.setViewportSize({width:200,height:200});
    let size=await page.viewportSize();
    console.log(size);
    let title=await page.title();
    console.log(title);
    let url=await page.url();
    console.log(url)
    
    
    const browser=await chromium.launch();
    console.log(browser);
    
    

})
test.only("browser controls cookies",async({browser})=>{
    
    let context=await browser.newContext()
    let page=await context.newPage()
  
    await page.goto("https://www.google.com")
    console.log(await context.cookies());
    

})
//using manual browser instance
test("chromeinstance",async()=>{
    let browser=await chromium.launch();
    let context=await browser.newContext();
    let page=await context.newPage();
    await page.goto("https://ShoppersStack.com")
    await page.screenshot({path:"ScreenShot/scr.png"})
    let time= await new Date().getTime();
    await page.screenshot({path:`ScreenShot/-page-${time}.png`});
})
//using page fixture
test("screenshot2",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0");
    
    await page.waitForTimeout(3000)
    await page.screenshot({path:"scrn.png"});

})

