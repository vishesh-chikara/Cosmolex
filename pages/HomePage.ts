import { Page, Locator, expect } from '@playwright/test'


export class HomePage {
    private readonly page: Page;

    //Locators

    private readonly userName: Locator;
    private readonly passWord: Locator;
    private readonly SignInBtn: Locator;
    private readonly forgetPassword: Locator;
    private readonly forgetLogin: Locator;
    private readonly tryitForfree: Locator;

    //Constructor
    constructor(page: Page) {
        this.page = page;
        this.userName = page.locator('#userName');
        this.passWord = page.locator('#password');
        this.SignInBtn = page.locator('#loginButton');
        this.forgetPassword = page.locator("");
        this.forgetLogin = page.locator("");
        this.tryitForfree = page.locator("");
    }

    //ActionMethod
    //Check homepage exist or not ?
    async isHomepageExist() {
        let title: string = await this.page.title();
        if (title) {
            return true;
        }
        return false;
    }

    async PerformSignIn() {
        try {
            await this.userName.fill('Test_3@gmail.com');
            await this.passWord.fill('Test@12345');
            await this.SignInBtn.click();
        } catch (error) {
            console.log(`exception occured while clicking on my account' : ${error}`);
            throw error;
        }
    }

    async Use_forgetPassword() {
        try {
            await this.forgetPassword.click();
        } catch (error) {
            console.log(`exception occured while clicking on my account' : ${error}`);
            throw error;
        }
    }

    async Use_forgetLogin() {
        try {
            await this.forgetLogin.click();
        } catch (error) {
            console.log(`exception occured while clicking on my account' : ${error}`);
            throw error;
        }
    }

    async TryitFree() {
        try {
            await this.tryitForfree.click();
        } catch (error) {
            console.log(`exception occured while clicking on my account' : ${error}`);
            throw error;
        }
    }


}