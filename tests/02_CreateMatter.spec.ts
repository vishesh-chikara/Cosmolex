import { Page, test, expect } from "@playwright/test";

import { HomePage } from '../pages/HomePage';
import { DashBoardPage } from "../pages/DashBoardPage";
import { testConfig } from '../test.config';
import { MatterDeatils } from '../pages/MatterDetails';


test.describe.configure({ mode: 'serial' });
test('[P2] to create a new matter ', async ({ page }) => {
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

   await MatterInput.AddMatter();
   await MatterInput.set_ClientName();
   await MatterInput.set_MatterName();
   await page.waitForTimeout(2000);
   await MatterInput.disabled_PM();
   await MatterInput.Click_Save_btn();


});
