import{Page, Locator, expect}from '@playwright/test';
import {BasePage_SOLID} from './BasePage_SOLID';
import {config} from '../config/environment';

export class LoginPage_SOLID extends BasePage_SOLID
{
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page)    //this.page = page is current/child class parameter
    {
        super(page);  //calling the constructor of basepage parent class
        this.emailInput = page.locator('input[name="email"]');
        this.passwordInput = page.getByPlaceholder("Password");
        this.loginButton = page.locator('input[name="Login"]');

    }

    async goto(): Promise<void>
    {
       //await this.navigate('https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp');
       await this.navigate(`${config.baseUrl}${config.loginPath}`);
    }
    async login(email:string, password: string): Promise<void>
    {
        await this.fill(this.emailInput, email);
        await this.fill(this.passwordInput, password);
        await this.click(this.loginButton);
    }
    
    async verifyLoginSuccess(): Promise<void>
    {
       const currentUrl = this.page.url();
       await expect(this.page).not.toHaveURL(/accountLogin/);
    }
    async isLoaded(): Promise<void>
    {
       await expect(this.emailInput).toBeVisible();
       await expect(this.passwordInput).toBeVisible();
       await expect(this.loginButton).toBeVisible();
    }

}