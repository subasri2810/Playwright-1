import {test} from "@playwright/test"
test("Search a Product", async({page})=>{
    await page.goto("https://www.shoppersstack.com/")
    await page.locator("//button[text()='Login']").click();
    await page.locator("#Email").fill("subasri2810@gmail.com");
    await page.locator("#Password").fill("Suba@123");
    await page.locator("#Login").click();
    await page.locator("#search").fill("mascara")
    await page.locator("#searchBtn").click();

    await page.waitForTimeout(5000);

})
test("Register", async({page})=>{
    await page.goto("https://www.shoppersstack.com/")
    await page.locator("//button[@id='Create Account']").click();
    await page.locator("//input[@id='First Name']").fill("Suba")
    await page.locator("//input[@id='Last Name']").fill("Shree")
    await page.locator("//span[text()='Female']").click();
    await page.locator("//input[@id='Phone Number']").fill("8525010320")
    await page.locator("//input[@name='Email Address']").fill("subasri2810@gmail.com")
    await page.locator("//input[@name='password']").fill("Suba@123")
    await page.locator("//input[@name='Confirm Password']").fill("Suba@123")
    await page.locator("//input[@type='checkbox']").click();
    await page.locator("//button[@class='signup_bn5Disabled__hSdQX']").click();
    await page.waitforTimeout(7000)
})