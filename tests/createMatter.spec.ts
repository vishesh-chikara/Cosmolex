import { Page, test, expect } from "@playwright/test";

import { HomePage } from '../pages/HomePage';
import { DashBoardPage } from "../pages/dashBoardPage";
import { testConfig } from '../test.config';
import { MatterDeatils } from '../pages/MatterDetails';


test.skip("to create a new matter ", async ({ page }) => {
   //creating object for TestConfig
   const Config = new testConfig();
   await page.goto(Config.DevUrl);

   //creating object for all exported page classes
   const homepage = new HomePage(page);
   const DashBoard = new DashBoardPage(page);
   const MatterInput = new MatterDeatils(page);

   await homepage.isHomepageExist();
   await homepage.PerformSignIn();
   await DashBoard.isdashBoAddMatter();
   await DashBoard.Open_Matterdashboard();
   

   //await page.waitForTimeout(6000);
   await MatterInput.AddMatter();

   await MatterInput.set_ClientName();
   await page.waitForTimeout(3000);

   await MatterInput.set_MatterName();
   await page.waitForTimeout(3000);

   await MatterInput.disabled_PM();
   await page.waitForTimeout(2000);

   await MatterInput.Click_Save_btn();
   await page.waitForTimeout(3000);

});

test("to delete the added matter", async ({ page }) => {
   //creating object for TestConfig
   const Config = new testConfig();
   await page.goto(Config.DevUrl);

   //creating object for all exported page classes
   const homepage = new HomePage(page);
   const DashBoard = new DashBoardPage(page);
   const MatterInput = new MatterDeatils(page);

   await homepage.PerformSignIn();
   await DashBoard.Open_Matterdashboard();   

   //delete the matter
   await MatterInput.deleteMatter();
   await expect(page.locator('text=Adoption')).toBeVisible();
   await expect(page.locator('text=Adoption')).toHaveCount(1);

   await page.waitForTimeout(2000);
   await MatterInput.GettingOutput();
   await expect(page.locator('text=Delete Matter')).toBeVisible();
   await expect(page.locator('text=Delete Matter')).toHaveCount(1);
   await expect(page.locator('text=Delete Matter')).toContainText('Delete Matter');
   
   await page.screenshot({ path: 'screenshot.png', fullPage: true });




})