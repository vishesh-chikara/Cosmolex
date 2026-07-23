import { Page, expect, Locator } from "@playwright/test";


export class deleteMatter {

    private readonly page: Page;
    private readonly Find_Matter: Locator;
    private readonly CheckMatter: Locator;
    private readonly threeDots: Locator;
    private readonly Delete_btn: Locator;
    private readonly Delete_Confirm_btn: Locator;
    //private readonly errorPopup: Locator;


    constructor(page: Page) {
        this.page = page;

        const row = page.locator('[role="row"]').filter({
            hasText: 'Adoption'
        });
        this.Find_Matter = row;
        this.CheckMatter = row.getByRole('checkbox');
        this.threeDots = page.getByRole('button', { name: 'More actions' }).first();
        this.Delete_btn = page.getByText('Delete', { exact: true });
        this.Delete_Confirm_btn = page.getByText('Delete', { exact: true });
       // this.errorPopup = page.getByText('Matter is associated with Time/Expense cards and cannot be deleted', { exact: true });

    }

    async deleteMatter(): Promise<void> {
        await this.Find_Matter.scrollIntoViewIfNeeded();
        await this.CheckMatter.check();

        await this.threeDots.click();
        await this.Delete_btn.click();
        await this.Delete_Confirm_btn.click();
        //await this.errorPopup.waitFor({ state: 'visible' });
    }

}