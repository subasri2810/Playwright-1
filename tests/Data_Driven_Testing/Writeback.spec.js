import {test} from "@playwright/test"
import excel from "exceljs"

test("Write back data", async({page})=>{
   let path="C:/Users/acer/OneDrive/Desktop/Playwright/Test_Data/ReadMultipleData.xlsx"
    let book=new excel.Workbook()
    await book.xlsx.readFile(path)
    let sheet=book.getWorksheet("Sheet2")
    if(!sheet)
    {
        sheet=book.addWorksheet("Sheet2")
    }
    
await page.goto("https://www.amazon.in/");
await page.getByRole('searchbox', {name:"Search Amazon.in"}).fill("shoes")
await page.locator(".s-suggestion.s-suggestion-ellipsis-direction").first().waitFor()
let Products=await page.locator(".s-suggestion.s-suggestion-ellipsis-direction").allTextContents()
console.log(Products);
for(let data of Products)
    {
          const index=Products.indexOf(data)
        sheet.getRow(index + 1).getCell(1).value=data;
    }  
await book.xlsx.writeFile(path)
})