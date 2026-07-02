import { Page, expect, Locator } from "@playwright/test";



export class MatterDeatils {
    private readonly page: Page;
    private readonly AddMatter_btn: Locator;
    private readonly Enter_ClientName: Locator;
    private readonly selectClient_dropdown: Locator;
    private readonly Enter_MatterName: Locator;
    private readonly selectMatter_Dropdown: Locator;
    private readonly ProjectManagement_btn: Locator;
    private readonly Save_btn: Locator;

    //For delete matter

    private readonly Find_Matter: Locator;
    private readonly CheckMatter: Locator;
    private readonly threeDots: Locator;
    private readonly Delete_btn: Locator;
    private readonly Delete_Confirm_btn: Locator;
    private readonly errorPopup: Locator;

    //Constructor
    constructor(page: Page) {
        this.page = page;
        this.AddMatter_btn = page.locator('button:has-text("Add Matter")');
        this.Enter_ClientName = page.getByRole('combobox', { name: 'Enter a Client Name' })
        this.selectClient_dropdown = page.getByRole('option', { name: 'Client_Invoice1' });
        this.Enter_MatterName = page.locator('input[name="matterNameOption"]')
        this.selectMatter_Dropdown = page.getByRole('option', { name: 'Adoption' });
        this.ProjectManagement_btn = page.locator("//input[@name='projectManagementEnabled']")
        this.Save_btn = page.getByText('Save', { exact: true });

        //For delete matter
        const row = page.locator('[role="row"]').filter({
            hasText: 'Adoption'
        });
        this.Find_Matter = row;
        this.CheckMatter = row.getByRole('checkbox');
        this.threeDots = page.getByRole('button', { name: 'More actions' }).first();
        this.Delete_btn = page.getByText('Delete', { exact: true });
        this.Delete_Confirm_btn = page.getByText('Delete', { exact: true });
        this.errorPopup = page.getByText('Delete Matter', { exact: true })


    }

    //Action Items   

    async AddMatter(): Promise<void> {
        await this.AddMatter_btn.click();
    }

    async set_ClientName(): Promise<void> {
        await this.Enter_ClientName.fill('Client');
        await this.selectClient_dropdown.click();
    }

    async set_MatterName(): Promise<void> {
        await this.Enter_MatterName.click();
        await this.selectMatter_Dropdown.click();


    }

    async disabled_PM(): Promise<void> {
        await this.ProjectManagement_btn.scrollIntoViewIfNeeded();
        await this.ProjectManagement_btn.uncheck();
    }

    async Click_Save_btn(): Promise<void> {
        await this.Save_btn.click();
    }

    //Delete the matter
    async deleteMatter(): Promise<void> {
        await this.Find_Matter.scrollIntoViewIfNeeded();
        await this.CheckMatter.check();

        await this.threeDots.click();
        await this.Delete_btn.click();
        await this.Delete_Confirm_btn.click();

    }

    async GettingOutput(): Promise<boolean> {
       await this.errorPopup.isVisible();
       return true;
    }


}