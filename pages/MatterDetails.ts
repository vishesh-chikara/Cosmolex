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



    //Constructor
    constructor(page: Page) {
        this.page = page;
        //this.AddMatter_btn = page.locator('button:has-text("Add Matter")');
        this.AddMatter_btn = page.getByRole('button', { name: 'Add Matter' });

       // this.Enter_ClientName = page.getByRole('combobox', { name: 'Enter a Client Name' });
       this.Enter_ClientName = page.getByTestId('clientname-search-1');

       // this.selectClient_dropdown = page.getByRole('option', { name: 'Client_Invoice1' });
       this.selectClient_dropdown = page.getByRole('option', { name: 'Test_My Client', exact: true });

       //this.Enter_MatterName = page.locator('input[name="matterNameOption"]');
       this.Enter_MatterName = page.getByTestId('mattername-text-1');
      
       
       this.selectMatter_Dropdown = page.getByRole('option', { name: 'Adoption' });

       // this.ProjectManagement_btn = page.locator("//input[@name='projectManagementEnabled']")
       this.ProjectManagement_btn = page.getByTestId('projectmanagementenabled-toggle-1');
       
        this.Save_btn = page.getByRole('button', { name: 'Save', exact: true });



    }

    //Action Items   

    async AddMatter(): Promise<void> {
        await this.AddMatter_btn.waitFor({ state: 'visible' });
        await this.AddMatter_btn.click();

    }

    async set_ClientName(): Promise<void> {
        await this.Enter_ClientName.waitFor({ state: 'visible' });
        await this.Enter_ClientName.fill('Client');

        await this.selectClient_dropdown.waitFor({ state: 'visible' });
        await this.selectClient_dropdown.click();
    }

    async set_MatterName(): Promise<void> {
        await this.Enter_MatterName.waitFor({ state: 'visible' });
        await this.Enter_MatterName.click();

        await this.selectMatter_Dropdown.waitFor({ state: 'visible' });
        await this.selectMatter_Dropdown.click();


    }

    async disabled_PM(): Promise<void> {
        await this.ProjectManagement_btn.scrollIntoViewIfNeeded();
        await this.ProjectManagement_btn.uncheck();
    }

    async Click_Save_btn(): Promise<void> {
        await this.Save_btn.waitFor({ state: 'visible' });
        await this.Save_btn.click();
    }

    /*  async GettingOutput(): Promise<boolean> {
        await this.errorPopup.isVisible();
        return true;
     }
         */

}