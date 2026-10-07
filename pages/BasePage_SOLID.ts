import{Page, Locator} from '@playwright/test';

//Playwright Page - browser/tab
//Locator- elrment on the webpage
//textbox, mouse click -html control

export abstract class BasePage_SOLID
{
    readonly page: Page;

   constructor(page: Page)
   {
      this.page = page; //LHS this.page(line #7), RHS page -constructor parametr
                         
   }
async click(locator: Locator): Promise<void>   //void means return nothing
{
   await locator.waitFor({state:'visible'});
   await locator.click();
}
async navigate(url: string): Promise<void>     //url is parameter
{
    await this.page.goto(url, {waitUntil: 'load'});
}
async fill(locator: Locator, value: string): Promise <void>  //generic methor for textbox
{
   await locator.waitFor({state: 'visible'})
   await locator.fill(value);  
}

async select(locator: Locator, value: string): Promise<void>
{
   await locator.waitFor({state:'visible'})
   await locator.selectOption(value)
}

async scrollToElement(element: Locator): Promise<void>
{
   await element.scrollIntoViewIfNeeded();
}

abstract isLoaded(): Promise<void>;


}


//scroll
//control -Open closed principle.Open for extension, closed for for modification
