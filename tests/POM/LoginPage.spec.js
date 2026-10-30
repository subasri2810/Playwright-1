import {test} from "@playwright/test"
import LoginPage from "../../pom/LoginPage.js";

test("Login", async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
    let Login = new LoginPage(page)
    await Login.loginlink.click()
    await Login.EmailTxt.fill("subashree078@gmail.com")
    await Login.passwordTxt.fill("Suba@123")
    await Login.LoginBtn.click()
    await page.waitForTimeout(2000)
})