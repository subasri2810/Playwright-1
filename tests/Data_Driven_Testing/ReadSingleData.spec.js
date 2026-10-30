import {test} from "@playwright/test"
import excel from "exceljs"
test("Read Single data", async({})=>{
    let book=new excel.Workbook()
    await book.xlsx.readFile('C:/Users/acer/OneDrive/Desktop/Playwright/Test_Data/ReadSingleData.xlsx')
        const Sheet=book.getWorksheet("Sheet1")
        let user=Sheet.getRow(2).getCell(2).toString() //value also can be used instead of toString
        console.log(typeof(user));
        console.log(user);

4
        
        
    
})
