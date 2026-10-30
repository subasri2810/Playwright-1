
// how to handle new tab in Flipkart

import { expect, test } from "@playwright/test";
import { log } from "console";

test.only("new tab Flipkart", async ({ browser }) => {

    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off");

    const [newTab] = await Promise.all([
        page.waitForEvent("popup"),
        page.click('(//a[@title="Sneakers For Men"])[1]')
    ]);
 
    await newTab.waitForLoadState("domcontentloaded");

    await newTab.waitForTimeout(3000);

    console.log("Old tab URL:", await page.url());
    console.log("New tab URL:", await newTab.url());

    await expect(newTab).not.toHaveURL(
        "https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"
    );

});
//
test("download File",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0");
    await page.getByPlaceholder("Enter text here").fill("This is a file to download");
    let [downloadFile]=await Promise.all([
        page.locator("#downloadButton").click(),
        page.waitForEvent('download')
    ])
       console.log(downloadFile);
       
       let DownloadFolder="C:/Users/KITTY/OneDrive/Desktop/playwright/Screenshot1"
            
       let fileName= downloadFile.suggestedFilename();
       downloadFile.saveAs(path.join(DownloadFolder,fileName))
})

test("Screenshot",async({browser})=>{

let context = await browser.newContext()
let page = await context.newPage()

await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
await page.locator(".w-full.h-40.p-2.border.rounded-lg.mb-4").fill("Iam Downloading the file")

const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button',{name:"Download"}).click()
])

let downloadFolder="C:/Users/Admin/OneDrive/Desktop/Playwright_Class/Screenshot"
let fileName = await download.suggestedFilename()
await download.saveAs(await path.join(downloadFolder,fileName))


}
)
//upload a single file
test.only("Upload a file", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
const uploadSingleFile=await page.locator("#singleFileInput")
await uploadSingleFile.waitfor()
await uploadSingleFile.setInputFiles("C:/Users/acer/OneDrive/Desktop/Playwright/tests/Window_Handles.spec.js")
await page.getByRole('button', {name:"Upload Single File"}).click();
await page.waitForTimeout(5000)
})
//upload multiple files
test.only("Upload multiple files", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
let uploadMultipleFiles=await page.locator("#multipleFileInput")
await uploadMultipleFiles.waitfor()
await uploadMultipleFiles.setInputFiles("C:/Users/acer/OneDrive/Desktop/Playwright/tests/Window_Handles.spec.js")
await page.getByRole('button', {name:"Upload Multiple Files"}).click();
await page.waitForTimeout(5000)
await uploadMultipleFiles.setInputFiles([])
await page.waitForTimeout(5000)
})
//upload a file by dir

test.only("Upload a file by dir", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
const uploadSingleFile=await page.locator("#singleFileInput")
await uploadSingleFile.waitfor()
console.log(__dirname);
await uploadSingleFile.setInputFiles(await path.join(__dirname,"../../ScreenShot/gmail.png"))
await page.getByRole('button', {name:"Upload Single File"}).click();
await page.waitForTimeout(5000)
})

//frames
test("Frames", async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    const frame=await page.frames();
    console.log(frame.length);
    //1st approach
    let Frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1'})
    await page.locator("//input[@name='mytext1']").fill("Helloeeee")
    let name=await Frame1.locator("//input[@name='mytext1']").inputValue()
    console.log(name);
    //2nd approach
    let Frame2=await page.frameLocator('//frame[@src="frame_2.html"]')
    await Frame2.locator("//input[@name='mytext1']").fill("dogggggg")
    await page.waitForTimeout(5000)
    //3rd approach
    let Frame3=await page.frameLocator('//frame[@src=frame_3.html"]').contentFrame()
    await Frame3.locator("//input[@name='mytext1']").fill(1243567786544)
    const iframe=await Frame3.frameLocator('//iframe[@src="https://doxs.google.com/forms/')//remainng url
    await iframe.locator('//span[.="I am a human"]').click()
    await page.waitForTimeout(5000)

})