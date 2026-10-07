import {Page, Locator, expect} from '@playwright/test';
import { BasePage_SOLID } from './BasePage_SOLID';

export class ScrollPage extends BasePage_SOLID
{
    readonly bestSellingGifts: Locator;
    readonly popularSearches: Locator;

    constructor (page: Page)
    {
        super(page);
        //this.bestSellinggifts = page.locator('text=Best Selling Gifts');
        this.bestSellingGifts = page.getByText('Gifts to Sri Lanka - Best Sellers');
        this.popularSearches = page.getByText('Popular Searches Today:');
    }

    async isLoaded(): Promise<void>
    {
        await expect(this.bestSellingGifts).toBeVisible();
    }

    async isEventPageLoaded(): Promise<void>
    {
        await expect(this.popularSearches).toBeVisible();
    }

    async scrollToBestSellingGifts(): Promise<void>
    {
       await this.scrollToElement(this.bestSellingGifts); //Option 1
       //await this.scrollDirectlyToElement(this.bestSellingGifts); //Option 2
    }

     async scrollToPopularSearches(): Promise<void>
    {
       await this.scrollToElement(this.popularSearches); //Option 1
       //await this.scrollDirectlyToElement(this.bestSellingGifts); //Option 2
    }


    async goto(): Promise<void>
    {
       await this.navigate('/');
       
    }

    async gotoEventsPage(): Promise<void>
    {
       await this.navigate('/shops/events_home.jsp');
    }

}