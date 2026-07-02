import { Page, test, expect } from "@playwright/test";

import { HomePage } from '../pages/HomePage';
import { DashBoardPage } from "../pages/dashBoardPage";
import { testConfig } from '../test.config';
import { MatterDeatils } from '../pages/MatterDetails';

test("to validate Signup ", async ({ page }) => {
       //creating object for TestConfig
       const Config = new testConfig();
       await page.goto(Config.DevUrl);


       //creating object for homePage
       const homepage = new HomePage(page);

       await homepage.isHomepageExist();
       await expect(page).toHaveTitle("CosmoLex - Login");
       await expect(page).toHaveURL("https://dev4.cosmolex.com/login");

       await homepage.PerformSignIn();
       await expect(page).toHaveTitle("Admin");
       await expect(page).toHaveURL("https://dev4.cosmolex.com/nxg/");

       await page.waitForTimeout(3000);
       await page.close();
});



