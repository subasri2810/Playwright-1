import{expect, test}from '@playwright/test'

test('Open browser and navigate the url',async({browser})=>{
     const context=await browser.newContext()
    const page= await context.newPage()
    await page.goto('https://www.starquik.com/?srsltid=AU7gw4XdBDUwgSW-UsjGMqd-clU_rOzqfdVIuRb9gSpq1DORoUO4YpO-')
    let title=await page.title()
    let url=await page.url()
    await page.waitForLoadState('load')
    
})

test('Click on food,grain and masala',async({page})=>{
    await page.goto('https://www.starquik.com/?srsltid=AU7gw4XdBDUwgSW-UsjGMqd-clU_rOzqfdVIuRb9gSpq1DORoUO4YpO-')
    await page.keyboard.press('Enter')
    // await page.waitForLoadState('load')
    let menu= page.locator('#HeaderMenu-foodgrain-oil-masala')
    await menu.waitFor()
    await menu.click()
    await page.waitForTimeout(5000)
})

test('Select best seller',async({page})=>{
    await page.goto('https://www.starquik.com/collections/foodgrain-oil-masala')
    await page.setViewportSize({width:1200,height:700})
    await page.waitForLoadState('load')
     await page.keyboard.press('Enter')
    let drop= await page.locator("//div[@class='wizzy-common-select-selector']").first()
    await drop.waitFor()
    await drop.click()
    await page.waitForTimeout(5000)
    let loc=await page.locator("//div[@class='wizzy-common-select-option ']").all()
    console.log(loc);
    for(let text of loc)
    {
        let option=await text.innerText()
       console.log(option);
        
        if(option.includes('Best Seller')){
            await text.click()
        }
        
    } await page.waitForTimeout(5000)
    

})


test('Select amul brand',async({page})=>{
    await page.goto('https://www.starquik.com/collections/foodgrain-oil-masala')
    await page.waitForLoadState('load')
     await page.keyboard.press('Enter')

     await page.locator("//span[@class='facet-head-title']").nth(1).click()
     await page.locator('//li[@data-term="Amul"]').first().click()
     await page.waitForTimeout(5000)
})

test.only('productlist',async({page})=>{
    await page.goto('https://www.starquik.com/collections/foodgrain-oil-masala?inventorySources_key[]=SC_india&inventorySources_inStock[]=true%2Cfalse&brands[]=Amul')
    await page.waitForLoadState('load')
     await page.keyboard.press('Enter')
    let p1= await page.locator(".price__container").first()
    let p2=(await p1.innerText()).trim()
    console.log(p2);
    
    await page.getByAltText('Amul High Aroma Cow Ghee Tin 1ltr').click()
    await page.waitForTimeout(3000)
    let p3=(await page.locator("//span[@class='price-item price-item--regular']").innerText()).trim()
    console.log(p3);
    
    //await expect(p2).toBe(p3)
    await page.goBack()

    // let l1= await page.locator("//span[@class='price-item price-item--regular']").nth(1)
    // let l2= (await l1.innerText()).trim()
    // await page.getByAltText('Amul Cow Ghee Pouch 1 ltr').click()
    // let l3=await page.locator("//span[@class='price-item price-item--sale price-item--last']").innerText()
    // await expect(l2).toBe(l3)

    // let v1= await page.locator("//span[@class='price-item price-item--regular']").nth(2)
    // let v2=(await v1.innerText()).trim()
    // await page.getByAltText('Amul Cow Ghee Pouch 500 ml').click()


    
})