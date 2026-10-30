import {test} from "@playwright/test"

test("notification popup",async({browser})=>{
    //test.slow()
     let context=await browser.newContext()
     let page=await context.newPage();
     await page.goto("http://demoapps.qspiders.com/ui/browserNot?sublist=0");
     await page.getByRole('button',{name:"Notification"});
     let res=await page.evaluate(()=>{return Notification.requestPermission()})
     console.log(`permission:${res}`);

    //await context.clearPermissions();      //use to revoke the permission you have given
    let result=await page.evaluate(()=>{return Notification.requestPermission()})
     console.log(`Permissions:${result}`);
})//{permissions:["notifications","microphone","camera","geolocation"]}