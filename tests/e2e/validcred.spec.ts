import{test, expect} from '@playwright/test';
//Smoke test tag Regression
test('Login with valid credentials',{tag: '@smoke'}, async ({page}) =>  //{tag: '@regression'}
{                                   //multiple tag for 1 test case {tag: ['@regression','@smoke']}

   await page.goto ('https://www.kapruka.com');

});

//npx playwright test --grep @smoke



