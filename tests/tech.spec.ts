import { test, expect, Locator } from '@playwright/test';



test('login', async ({ page }) => {

    const website = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
    const dashboard = "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index";
    await page.goto(website);
    //await expect(page).toHaveTitle('OrangeHRM');
    await page.locator("#username").fill("Admin");
    await page.locator("#password").fill("admin123");
    await page.locator("#submit").click();
    await expect(page).toHaveURL(dashboard);
});