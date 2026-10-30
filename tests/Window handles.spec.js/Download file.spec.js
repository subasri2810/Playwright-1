import {test} from "@playwright/test"
import { log } from "node:console";
import path from "node:path";
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