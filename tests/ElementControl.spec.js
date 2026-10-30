import { chromium, expect, test } from "@playwright/test";

test("fill", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".search-box-text").fill("computer");
    await page.locator(".search-box-text.ui-autocomplete-input");
    await page.waitForTimeout(3000);
});

test("Type", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".search-box-text.ui-autocomplete-input");
    await page.locator(".search-box-text.ui-autocomplete-input");
    await page.waitForTimeout(3000);
});

test("click", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/button/submit");
    await page.getByRole("button", { name: "No" }).click();
    await page.waitForTimeout(3000);
});

test("Right click", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/button/button");
    await page.getByRole("button", { name: "Right Click" }).click();
    await page.getByText("Yes").click();
    await page.waitForTimeout(3000);
});

test("double click", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/button/button");
    // await page.getByRole("button", { name: "Yes" }).click();
    await page.getByRole("button", { name: "Yes" }).dblclick();
    await page.waitForTimeout(3000);
});

test("force click", async ({ page }) => {
    await page.goto("https://www.amazon.in/");
    await page.getByRole("searchbox", { name: "Search Amazon.in" }).fill("mobile");
    await page.locator("#nav-search-submit-button").click({ force: true });
    await page.waitForTimeout(3000);
});

test("InnerText", async ({ page }) => {
    await page.goto("https://www.amazon.in/");
    await page.getByRole("searchbox", { name: "Search Amazon.in" }).fill("mobile");

    let text = await page.locator(".s-suggestion-container").first().waitFor();
    console.log(text);
});

test("Text content", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator("#small-searchterms").fill("laptop");
    await page.locator(".button-1.search-box-button").click();

    let text = await page.locator(".listbox").textContent();
    console.log(text.trim());
});

test("All Text content", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
});

test("input value", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/login");

    await page.getByRole("textbox", { name: "Email:" }).fill("example@gmail.com");

    let input = await page.getByRole("textbox", { name: "Email:" }).inputValue();
    console.log(input);
});

test("get Attribute", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/login");

    const email = await page.getByRole("textbox", { name: "Email:" });

    let cl = await email.getAttribute("class");
    let id = await email.getAttribute("id");
    let autof = await email.getAttribute("autofocus");

    console.log(cl, id, autof);
});

test("all", async ({ page }) => {
    await page.goto("https://www.amazon.in/");

    await page.getByRole("searchbox", { name: "Search Amazon.in" });

    await page.locator(".s-suggestion-container").first().waitFor();

    let loc = await page.locator(".s-suggestion-container").all();

    console.log(loc);
});

test.only("is", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/checkbox");

    await page.waitForTimeout(2000);

    // let a = await page.locator("input").isDisabled();

    // await page.waitForTimeout(2000);

    // let a = await page.locator("span[contains(@class,'bg-gradient')]").isEnabled();

    // const a = await page.getByLabel("Name").isDisabled();

    // await page.locator("#domain_a").check();

    let a = await page.locator("#domain_a").isChecked();

    await page.waitForTimeout(2000);

    console.log(a);
});