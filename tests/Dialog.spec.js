import {test} from '@playwright/test'
test("Dialog", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByRole('button', {name:"Simple Alert"}).click()
    await page.waitForTimeout(3000)
    await page.getByRole('button', {name:"Confirmation Alert"}).click()
    await expect(await page.locator("#demo")).tohaveText("You pressed Cancel")
    await page.waitForTimeout(3000)
    await page.getByRole('button', {name:"Prompt Alert"}).click()
    await expect(await page.locator("#demo")).tohaveText("User cancelled the prompt")
    await page.waitForTimeout(3000)

})
test.skip("using pageon", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.on("dialog", async({dialog})=>{
        await console.log("Type: " +dialog.type());//method used to inform which type of dialog present on webpage==>dialog.type
        
       console.log("message: " +dialog.message())
       await dialog.accept("Virat kohli")
        await  console.log(dialog.defaultValue());//used to change the default value

       await dialog.accept()// it is used to accept your dialog-->dialog.accept
       await dialog.dismiss()//it is used to cancel your dialog -->dialog.dismiss
      
       
    })
})

test("using pageon 2", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.on("dialog", async({dialog})=>{
        if(dialog.type()=='alert'){
            await dialog.accept()
        }
        else if(dialog.type()=='confirm'){
            await dialog.dismiss()
        }
        else if(dialog.type()=='prompt'){
            await dialog.accept("Aditya")
            console.log(dialog.message());
            
        }
    })
})
test.only("dialog3", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.once('dialog', async(dialog)=>{
        console.log(dialog.type());
        console.log(dialog.message());
        await dialog.accept("Tom")
        
    })
    await page.getByRole('button',{name:"Prompt Alert"}).click()
    await page.waitForTimeout(3000)
    await page.reload()
    await page.getByRole('button',{name:"Prompt Alert"}).click()
    await page.waitForTimeout(3000)
})
