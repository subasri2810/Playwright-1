import {test} from "@playwright/test"
//page fixture
test("page fixture", async({page})=>{
    await page.goto("https://www.amazon.in/")
})

//browser fixture
test("browser fixture", async({browser})=>{
    let context=await browser.newContext();
    let page=await context.newPage();
    await page.goto("https://www.flipkart.com/")
})
//context fixture
test("context fixture", async({context})=>{
    let page=await context.newPage()
    await page.goto("https://www.meesho.com/")
})
//browser name fixture
test("Browser Name fixture", async({browserName})=>{
    console.log(browserName);
    
})