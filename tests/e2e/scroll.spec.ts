import {test, expect} from '@playwright/test';
import {ScrollPage} from '../../pages/ScrollPage';

test.describe('Kapruka Scroll to Element', () =>
{
    test('Scroll to Best Sellers', async({page}) =>
    {
        const scrollPage = new ScrollPage(page);
        await scrollPage.goto();
        await scrollPage.isLoaded();
        await scrollPage.scrollToBestSellingGifts();
       
    });

    test('Scroll to Events: Popular Searches Today', async ({page}) =>
    {
        const scrollPage = new ScrollPage(page);
        await scrollPage.gotoEventsPage();
        await scrollPage.isEventPageLoaded();
        await scrollPage.scrollToPopularSearches();

    });

});