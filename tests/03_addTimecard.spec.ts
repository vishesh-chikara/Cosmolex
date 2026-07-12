import { Page, test, expect } from "@playwright/test";

import { HomePage } from '../pages/HomePage';
import { DashBoardPage } from "../pages/DashBoardPage";
import { testConfig } from '../test.config';
import { MatterDeatils } from '../pages/MatterDetails';
import { addTimeCard } from '../pages/addTimeCard';

test.describe.configure({ mode: 'serial' });
test('[P3] to create a new time card', async ({ page }) => {
   //creating object for TestConfig
   const Config = new testConfig();
   await page.goto(Config.DevUrl);

   //creating object for all exported page classes
   const homepage = new HomePage(page);
   const DashBoard = new DashBoardPage(page);
   const MatterInput = new MatterDeatils(page);
   const TimeCard = new addTimeCard(page);

   await homepage.isHomepageExist();
   await homepage.PerformSignIn();
   await DashBoard.isdashBoAddMatter();
   await page.waitForTimeout(10000);
   await DashBoard.Open_Matterdashboard();
   await page.waitForTimeout(15000);

   //Creating a new time card
   await TimeCard.FindMatter();
   await TimeCard.NavigateToBilling();
   await TimeCard.ClickOnAdd();
   await TimeCard.SelectTimeCard();
   await TimeCard.EnterTaskName();
   await TimeCard.SelectTaskDropdown();
   await TimeCard.EnterTimeSpent();
   await TimeCard.ClickOnSave();

})