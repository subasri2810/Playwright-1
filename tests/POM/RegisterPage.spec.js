import {test} from "@playwright/test"
import RegisterPage from "../../pom/RegisterPage.js"

test("Register", async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
    let register=new RegisterPage(page)
    await register.RegisterLink.click()
    await register.GenderRadioBtn.click()
    await register.First_Name_Txt.fill("Suba")
    await register.Last_Name_Txt.fill("Shree")
    await register.EmailTxt.fill("subashree078@gmail.com")
    await page.waitForTimeout(3000)
})