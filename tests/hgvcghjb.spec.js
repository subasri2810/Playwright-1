import {test} from "@playwright/test"
// // test("browser controls",async({page})=>{
// //     await page.goto("https://demowebshop.tricentis.com/")
// // //     // const view=await page.viewportSize();
// //     await page.setViewportSize({width:200, height:200});
// //    const title= await page.title();
// //    console.log(title);
// //    const url=await page.url();
// //    console.log(url);
// //    const browser=await chromium.launch();  
// //    const context=await browser.newContext();
// //    const page=await context.newpage();
// //    await page.goto("https://demowebshop.tricentis.com/")
// //    const cookies=await context.cookies()
// //    console.log(cookies);
// //    test("browser controls",async({browser})=>{
// //    let context=await browser.newContext();
// //    let page=await context.newPage();
// //    await page.goto("https://www.google.com")
// //    await page.screenshot({path:'./screenshot/Google.png'})
// //    let gmail=await page.locator(".gb_6").first();
// //    await gmail.screenshot({path:'./Screenshot/gmail.png'})
     
// //     await page.waitForTimeout(2000)
// // console.log(view);
// test("placeholder",async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui?scenario=1 ")
//     await page.getByPlaceholder("Enter your name:").fill("Subasri")
//     await page.getByPlaceholder("")
// })
// test("getByTitle", async({page})=>{
// await page.goto("https://www.w3schools.com/")
// await page.getByTitle("CSS Tutorial")
// await page.waitForTimeout(3000)
// })
// test("getBytestId",async({page})=>{
//     await page.goto("https://www.saucedemo.com/")
//     await page.locator()
//     data-test=username
// })
// })
test ("Visible", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.locator('//span[contains(text(), "Write a script to enter data into Text field?")]').isVisible();
await page.waitForTimeout(3000);
})
test("Checked", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
    await page.locator('//input[@id="domain_a"].Click();
    await page.waitForTimeout(5000);
})