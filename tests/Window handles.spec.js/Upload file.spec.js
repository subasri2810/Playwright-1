import {test} from "@playwright/test"
import path from "node:path";
test("uploadFile",async({page})=>{
    
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#singleFileInput").setInputFiles("C:/Users/KITTY/OneDrive/Desktop/playwright/ScreenShot/-page-1782195970093.png");
    await page.click("//button[text()='Upload Single File']");
    await page.locator("#multipleFilesInput").setInputFiles(["C:/Users/KITTY/OneDrive/Desktop/playwright/ScreenShot/-page-1782195970093.png","C:/Users/KITTY/OneDrive/Desktop/playwright/ScreenShot/scr.png"])
    await page.click("//button[text()='Upload Multiple Files']");
    await page.waitForTimeout(5000);
})


test("remove uploaded file",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#singleFileInput").setInputFiles("C:/Users/KITTY/OneDrive/Desktop/playwright/ScreenShot/-page-1782195970093.png");
    await page.locator("#singleFileInput").setInputFiles([]);
    await page.click("//button[text()='Upload Single File']");
    await page.locator("#multipleFilesInput").setInputFiles(["C:/Users/KITTY/OneDrive/Desktop/playwright/ScreenShot/-page-1782195970093.png","C:/Users/KITTY/OneDrive/Desktop/playwright/ScreenShot/scr.png"])
     await page.locator("#multipleFilesInput").setInputFiles([]);
    await page.click("//button[text()='Upload Multiple Files']");
    await page.waitForTimeout(5000);

})

test.only("using dir approach",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    console.log(__dirname);
    
    
    await page.locator("#singleFileInput").setInputFiles(path.join(__dirname,"../../","ScreenShot/scr.png"));
    await page.click("//button[text()='Upload Single File']");
    await page.locator("#multipleFilesInput").setInputFiles(["C:/Users/KITTY/OneDrive/Desktop/playwright/ScreenShot/-page-1782195970093.png","C:/Users/KITTY/OneDrive/Desktop/playwright/ScreenShot/scr.png"])
     await page.locator("#multipleFilesInput").setInputFiles([]);
    await page.click("//button[text()='Upload Multiple Files']");
    await page.waitForTimeout(5000);

})