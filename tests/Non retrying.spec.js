
import { test, expect } from "@playwright/test";

test("Non Retrying Assertion", async ({ page }) => {

    // 1. toBe()
    let a = 10;
    expect(a).toBe(10);

    // 2. toEqual()
    let b = 20;
    expect(b).toEqual(20);

    // 3. toBeGreaterThan()
    let c = 30;
    expect(c).toBeGreaterThan(20);

    // 4. toBeLessThan()
    let d = 40;
    expect(d).toBeLessThan(50);

    // 5. toBeGreaterThanOrEqual()
    let e = 50;
    expect(e).toBeGreaterThanOrEqual(50);

    // 6. toBeLessThanOrEqual()
    let f = 60;
    expect(f).toBeLessThanOrEqual(60);

    // 7. toBeTruthy()
    let g = true;
    expect(g).toBeTruthy();

    // 8. toBeFalsy()
    let h = false;
    expect(h).toBeFalsy();

    // 9. toBeDefined()
    let i = null;
    expect(i).toBeDefined();

    // 10. toBeUndefined()
    let j = undefined;
    expect(j).toBeUndefined();

    // 11. String toBe()
    let name1 = "Suba";
    expect(name1).toBe("Suba");

    // 12. String toEqual()
    let name2 = "Priya";
    expect(name2).toEqual("Priya");

    // 13. String toBeTruthy()
    let name3 = "Hello";
    expect(name3).toBeTruthy();

    // 14. String toBeDefined()
    let name4 = "Playwright";
    expect(name4).toBeDefined();
});
