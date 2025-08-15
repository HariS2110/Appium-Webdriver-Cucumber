import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import homePage from '../pageobjects/homePage.js';



When(/^I select the (.*) button$/, async (screen) => {
    // Convert the screen string to match your page object's getter name
    // Example: "Animation" => "animationText", "Bouncing Balls" => "bouncingBallsText"
    const propName = screen
        .replace(/\s+/g, '')    // remove spaces
        .replace(/^./, str => str.toLowerCase()) + 'Text'; // lowercase first letter + 'Text'

    const elem = homePage[propName];

    if(!elem) {
        throw new Error(`No element found for screen: ${screen}`);
    }

    await homePage.clickWe(elem);
});





