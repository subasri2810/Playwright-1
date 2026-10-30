import {expect, test} from "@playwright/test"
import { only } from "node:test";

test("alert popup",async({page})=>{
    //here just checking whether this playwright is auto dismiss the popups or not 
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.getByRole('button',{name:'Simple Alert'}).click();
    await page.getByRole('button',{name:'Confirmation Alert'}).click();
    await page.waitForTimeout(2000)
    await expect(page.locator("#demo")).toHaveText("You pressed Cancel!")
    await page.getByRole('button',{name:'Prompt Alert'}).click();
    await page.waitForTimeout(2000)
    await expect(page.locator("#demo")).toHaveText("User cancelled the prompt.");
})

test("alert popup1",async({page})=>{
   await page.goto('https://testautomationpractice.blogspot.com/'); 
   page.on('dialog',async (dialog)=>{
    if(dialog.type()=='alert'){
        console.log(dialog.message());
       await  dialog.dismiss();}
    else if(dialog.type()=='confirm'){
        console.log(await dialog.message())
        await dialog.accept();

    }
    else if(dialog.type()=='prompt'){
        console.log(dialog.message());
        await dialog.accept("tom")
        await dialog.defaultValue();
    }
   })
   await page.getByRole('button',{name:'Simple Alert'}).click();
   
    await page.getByRole('button',{name:'Confirmation Alert'}).click();
    
    await page.getByRole('button',{name:'Prompt Alert'}).click();
   
})

test("page once",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    await page.getByRole('button',{name:'Simple Alert'}).click();
   
   
    await page.getByRole('button',{name:'Confirmation Alert'}).click();
    
    page.once('dialog',async(dialog)=>{dialog.accept("tom") })
    await page.getByRole('button',{name:'Prompt Alert'}).click(); 
    await page.waitForTimeout(2000)
    await page.reload()
    await page.getByRole('button',{name:'Prompt Alert'}).click(); 
    await page.waitForTimeout(2000)

})

test.only("alert popup2",async({page})=>{
   await page.goto('https://testautomationpractice.blogspot.com/'); 
   page.on('dialog',async (dialog)=>{
    console.log(dialog.message());
    console.log(dialog.type());
    
let a=await dialog.dismiss()
console.log(a);
await dialog.defaultValue();

    

   })
   await page.getByRole('button',{name:'Simple Alert'}).click();
   
    await page.getByRole('button',{name:'Confirmation Alert'}).click();
    
    await page.getByRole('button',{name:'Prompt Alert'}).click();

})