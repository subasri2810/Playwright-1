import {test} from "@playwright/test"

//single select dropdown
test.skip("Single select", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    await page.locator("#select3").selectOption({index:7})
    await page.waitForTimeout(3000)
    await page.locator("#select5").selectOption({value:"Madhya Pradesh"})
    await page.waitForTimeout(3000)
    await page.getByRole('combobox').nth(4).selectOption('Jabalpur')
    await page.waitForTimeout(3000)
    await page.locator("#select3").selectOption({label:"Poland"})
    await page.waitForTimeout(3000)

})

//multiselect dropdown
test("multiselect dropdown", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
    await page.locator("#select-multiple-native").selectOption([{index:1},{index:2},{index:3}])
    await page.getByRole('button',{name:'Add'}).click()
    await page.waitForTimeout(3000)
})

//custom dropdown
test("custom dropdown 1", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.getByRole('searchbox',{name:"Search Amazon.in"}).fill("shoes")
    await page.keyboard.press('Enter')
    await page.locator('#a-autoid-0-announce').click({force:true})
    await page.locator(".a-dropdown-link").nth(4).click()
    await page.waitForTimeout(3000)
})
//2nd approach
test("custom dropdown 2", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.getByRole('searchbox',{name:"Search Amazon.in"}).fill("shoes")
    await page.keyboard.press('Enter')
    await page.locator('#a-autoid-0-announce').click({force:true})
    let text='Best Sellers'
    await page.locator(`//a[.='${text}']`).click()
    await page.waitForTimeout(3000)
})
//3rd approach
test("custom dropdown 3", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.getByRole("searchbox",{name:"Search Amazon.in"}).fill("shoes")
    await page.keyboard.press('Enter')
    await page.locator('#a-autoid-0-announce').click({force:true})
    let filter = await page.locator('.a-dropdown-link').all()
    console.log(filter);
    for(let loc of filter){
        let text = await loc.innerText()
        console.log(text);
        if(text.includes("Bes")){
            await loc.click()
            break;
        }
    }
})


// makemytrip
test("makemytrip autosuggest", async ({ page }) => {
  await page.goto("https://www.makemytrip.com/flights/")
  await page.locator("span.commonModal__close").click()

  //from
  await page.locator("label[for='fromCity']").click()
  await page.locator("input[placeholder='From']").fill("Coim")
  await page.waitForTimeout(3000)
  let filter = await page.locator("ul[role='listbox'] li").all()
  console.log(filter);
  for (let loc of filter) {
    let text = await loc.innerText()
    console.log(text);
    if (text.includes("Coimbatore")) {
      await loc.click()
      break;
    }
  }

  //to
  await page.locator("input[placeholder='To']").fill("Chen")
  await page.waitForTimeout(3000)
  let filter1 = await page.locator("ul[role='listbox'] li").all()
  console.log(filter1);
  for (let loc of filter1) {
    let text = await loc.innerText()
    console.log(text);
    if (text.includes("Chennai")) {
      await loc.click()
      break;
    }
  }
  await page.waitForTimeout(3000)
})

//spicejet
test("spicejet autosuggest", async ({ page }) => {
  await page.goto("https://www.spicejet.com/")

  //from
  await page.locator("div[data-testid='to-testID-origin'] input").fill("Coim")
  await page.waitForTimeout(3000)
  let filter = await page.locator("div[data-testid='to-testID-origin'] ~ div div[dir='auto']").all()
  console.log(filter);
  for (let loc of filter) {
    let text = await loc.innerText()
    console.log(text);
    if (text.includes("Coimbatore")) {
      await loc.click()
      break;
    }
  }

  //to
  await page.locator("div[data-testid='to-testID-destination'] input").fill("Chen")
  await page.waitForTimeout(3000)
  let filter1 = await page.locator("div[data-testid='to-testID-destination'] ~ div div[dir='auto']").all()
  console.log(filter1);
  for (let loc of filter1) {
    let text = await loc.innerText()
    console.log(text);
    if (text.includes("Chennai")) {
      await loc.click()
      break;
    }
  }
  await page.waitForTimeout(3000)
})
// makemytrip
test("makemytrip autosuggest", async ({ page }) => {
  await page.goto("https://www.makemytrip.com/flights/")
  await page.locator("span.commonModal__close").click()

  //from
  await page.locator("label[for='fromCity']").click()
  await page.locator("input[placeholder='From']").fill("Coim")
  await page.waitForTimeout(3000)
  let filter = await page.locator("ul[role='listbox'] li").all()
  console.log(filter);
  for (let loc of filter) {
    let text = await loc.innerText()
    console.log(text);
    if (text.includes("Coimbatore")) {
      await loc.click()
      break;
    }
  }

  //to
  await page.locator("input[placeholder='To']").fill("Chen")
  await page.waitForTimeout(3000)
  let filter1 = await page.locator("ul[role='listbox'] li").all()
  console.log(filter1);
  for (let loc of filter1) {
    let text = await loc.innerText()
    console.log(text);
    if (text.includes("Chennai")) {
      await loc.click()
      break;
    }
  }
  await page.waitForTimeout(3000)
})

//spicejet
test("spicejet autosuggest", async ({ page }) => {
  await page.goto("https://www.spicejet.com/")

  //from
  await page.locator("div[data-testid='to-testID-origin'] input").fill("Coim")
  await page.waitForTimeout(3000)
  let filter = await page.locator("div[data-testid='to-testID-origin'] ~ div div[dir='auto']").all()
  console.log(filter);
  for (let loc of filter) {
    let text = await loc.innerText()
    console.log(text);
    if (text.includes("Coimbatore")) {
      await loc.click()
      break;
    }
  }

  //to
  await page.locator("div[data-testid='to-testID-destination'] input").fill("Chen")
  await page.waitForTimeout(3000)
  let filter1 = await page.locator("div[data-testid='to-testID-destination'] ~ div div[dir='auto']").all()
  console.log(filter1);
  for (let loc of filter1) {
    let text = await loc.innerText()
    console.log(text);
    if (text.includes("Chennai")) {
      await loc.click()
      break;
    }
  }
  await page.waitForTimeout(3000)
})