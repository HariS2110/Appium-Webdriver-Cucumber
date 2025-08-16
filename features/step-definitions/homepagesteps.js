import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import homePage from '../pageobjects/homePage.js';


When(/^I select the (.*) button$/, async (screen) => {
    const propName = screen
        .replace(/\s+/g, '')    // remove spaces
        .replace(/^./, str => str.toLowerCase()) + 'Text'; // lowercase first letter + 'Text'
    const elem = homePage[propName];

    if(!elem) {
        throw new Error(`No element found for screen: ${screen}`);
    }

    await homePage.clickWe(elem);
});


Then(/^I should see the (.*) screen$/, async (screen) => {
    const formattedScreen = screen
        .toLowerCase()
        .split(' ')
        .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
        .join('') + 'Text'; 

    const panelElement = homePage[formattedScreen];
    if (!panelElement) {
        throw new Error(`No element found for screen: ${screen}`);
    }

    await panelElement.waitForDisplayed({ timeout: 50000 });
});

