import {test} from "@playwright/test"
import excel from "exceljs"
test("Read Multiple data", async({})=>{
    let book=new excel.Workbook()
    await book.xlsx.readFile('C:/Users/acer/OneDrive/Desktop/Playwright/Test_Data/ReadMultipleData.xlsx')
    let Sheet=book.getWorksheet("ReadMultipleData")
    for(let i=1;i<=Sheet.actualRowCount;i++)
    {
        for(let j=1;j<=Sheet.actualColumnCount;j++)
        {
           let data= Sheet.getRow(i).getCell(j).value
           console.log(data);
           
        }
    }
})