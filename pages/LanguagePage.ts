import {Page, Locator, expect} from '@playwright/test';
import { BasePage_SOLID } from './BasePage_SOLID';

export class LanguagePage extends BasePage_SOLID
{
    readonly languageDropDown: Locator;
    
 constructor (page: Page)
 {
   super(page);
   this.languageDropDown = page.getByRole('combobox',{name: 'Select language'});
 }

 async goto(): Promise<void>
 {
    await this.navigate('/');
 }

 async isLoaded(): Promise<void>
 {
    await this.languageDropDown.waitFor({state: 'visible'});
 }

 async selectLanguage(language:'සිං' | 'Eng'): Promise<void>
 {
    await this.languageDropDown.waitFor({state: 'visible'});
    await Promise.all([
       this.page.waitForLoadState('load'),
       this.languageDropDown.selectOption({label: language})
    ]);
   }
 async verifyLanguage(expected: 'සිං' | 'Eng'): Promise<void>    
 {
   const selectedOption =
      this.languageDropDown.locator('option:checked');

   await expect(selectedOption).toHaveText(expected);
   
 }
 
}






