import { Page, Locator, expect } from '@playwright/test'

export class DashBoardPage {
    private readonly page: Page;

    private readonly Clickon_MatterSidebar: Locator;



    //Constructor
    constructor(page: Page) {
        this.page = page;
        this.Clickon_MatterSidebar = page.locator(':text-is("Matters")');


    }

    //ActionMethod

    //Check dashboard exist or not ?
    async isdashBoAddMatter() {
        let title: string = await this.page.title();
        if (title) {
            return true;
        }
        return false;
    }

    async Open_Matterdashboard() {
        try {
            await this.Clickon_MatterSidebar.waitFor({ state: 'visible' });
            await this.Clickon_MatterSidebar.click();
           
            // await this.btn_AddMatter.click();
        } catch (error) {
            console.log(`exception occured while clicking on my account' : ${error}`);
            throw error;
        }
    }



}
