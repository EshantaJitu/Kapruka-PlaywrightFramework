import{test, expect} from '@playwright/test';
import{LanguagePage} from '../../pages/LanguagePage';

test.describe('kapruka language dropdown', () =>
{
    test('Switch from Eng to සිං', async ({page}) =>
    {
       const languagePage = new LanguagePage(page);

       await languagePage.goto();
       await languagePage.isLoaded();

       //Select English
       await languagePage.selectLanguage('Eng');
       await languagePage.verifyLanguage('Eng');
    
       //Switch to Sinhala
       await languagePage.selectLanguage('සිං');
       await languagePage.verifyLanguage('සිං');
   
    }); 

});









