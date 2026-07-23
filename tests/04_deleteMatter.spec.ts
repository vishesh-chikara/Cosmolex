import { Page, test, expect } from "@playwright/test";

import { HomePage } from '../pages/HomePage';
import { DashBoardPage } from "../pages/DashBoardPage";
import { testConfig } from '../test.config';
import { deleteMatter } from "../pages/deleteMatter";

test.describe.configure({ mode: 'serial' });
test('[P4] to delete the added matter', async ({ page }) => {
    //creating object for TestConfig
    const Config = new testConfig();
    await page.goto(Config.DevUrl);

    //creating object for all exported page classes
    const homepage = new HomePage(page);
    const DashBoard = new DashBoardPage(page);
    const MatterDelete = new deleteMatter(page);

    //login 
    await homepage.PerformSignIn();

    //Open matterDashboard
    await DashBoard.Open_Matterdashboard();

    //delete the matter
    await MatterDelete.deleteMatter();
    
    await expect(page.locator('text=Adoption')).toBeVisible();
    await expect(page.locator('text=Adoption')).toHaveCount(1);
   // await expect(page.textContent('Matter is associated with Time/Expense cards and cannot be deleted')).toBeTruthy();
    await page.waitForTimeout(2000);


});