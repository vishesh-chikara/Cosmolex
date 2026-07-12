import { Page, expect, Locator } from "@playwright/test";

export class addTimeCard {
    private readonly page: Page;
    private readonly Find_Matter: Locator;
   // private readonly Open_Matter: Locator;
    private readonly clickOnbilling: Locator;
    private readonly clickOnadd_btn: Locator;
    private readonly select_timeCard: Locator;
    private readonly Enter_taskName: Locator;
    private readonly selectTask_dropdown: Locator;
    private readonly Enter_timeSpent: Locator;
    private readonly clickONsave_btn: Locator;

    constructor(page: Page) {
        this.page = page;
        const row = page.locator('[role="row"]').filter({
            hasText: 'Adoption'
        });
        this.Find_Matter = row;
        //this.Open_Matter = page.getByText('Adoption', { exact: true })
        this.clickOnbilling = page.locator("//div[contains(text(),'Billing')]")
        this.clickOnadd_btn = page.getByText('Add', { exact: true });
        this.select_timeCard = page.getByRole('menuitem', { name: 'Timecard' });
        this.Enter_taskName = page.getByTestId('task-dropdown-1');
        this.selectTask_dropdown = page.getByRole('option', { name: 'Acknowledgment of Service' })
        this.Enter_timeSpent = page.locator('input[name="timeSpent"]');
        this.clickONsave_btn = page.getByText('Save', { exact: true });
    }
      //Action Items
    async FindMatter(): Promise<void> {
        await this.Find_Matter.scrollIntoViewIfNeeded();
        await this.Find_Matter.waitFor({ state: 'visible' });
        await this.Find_Matter.click(); 
        
    }

        async NavigateToBilling(): Promise<void> {
        await this.clickOnbilling.waitFor({ state: 'visible' });
        await this.clickOnbilling.click();
    }

    async ClickOnAdd(): Promise<void> {
        await this.clickOnadd_btn.waitFor({ state: 'visible' });
        await this.clickOnadd_btn.click();
    }

    async SelectTimeCard(): Promise<void> {
        await this.select_timeCard.waitFor({ state: 'visible' });
        await this.select_timeCard.click();
    }   


    async EnterTaskName(): Promise<void> {
        await this.Enter_taskName.waitFor({ state: 'visible' });
        await this.Enter_taskName.click();
    }

    async SelectTaskDropdown(): Promise<void> {
        await this.selectTask_dropdown.waitFor({ state: 'visible' });
        await this.selectTask_dropdown.selectOption({ label: 'Acknowledgment of Service' });
    }

    async EnterTimeSpent(): Promise<void> {
        await this.Enter_timeSpent.waitFor({ state: 'visible' });
        await this.Enter_timeSpent.fill('2');
    }   


    async ClickOnSave(): Promise<void> {
        await this.clickONsave_btn.waitFor({ state: 'visible' });
        await this.clickONsave_btn.click();
    }


    
}