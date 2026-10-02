import{test, expect} from '@playwright/test';
import{LanguagePage} from '../../pages/LanguagePage';

test.describe('kapruka currency dropdown', () =>
{
    test('Switch from Eng to සිං', async ({page}) =>
    {
       const currencyPage = new LanguagePage(page);
       await currencyPage.goto();
       await currencyPage.isLoaded();
       await currencyPage.selectLanguage('Eng');
       await currencyPage.verifyLanguage('Eng');

       await currencyPage.selectLanguage('සිං');
       await currencyPage.verifyLanguage('සිං');
   
    });    
});









