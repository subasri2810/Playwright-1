import {test} from "@playwright/test"
test("getbylabel",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    await page.getByLabel("Email:",{exact:true}).fill("mpaditya55@gmail.com")
    await page.getByPlaceholder("search store",{exact:false}).fill("computers")  //this is for get by place holder method

    await page.getByText("Electronics ",{exact:false}).click()
    await page.getByAltText("Tricentis Demo Web Shop",{exact:true}).click()
    await page.getByTitle("Show products in category Camera, photo",{exact:true}).first.click
    await page.getByRole("button",{name:Search}).click()
})