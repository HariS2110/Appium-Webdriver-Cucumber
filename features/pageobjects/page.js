import { browser } from '@wdio/globals'
import { getPlatformText } from '../../library/commonfunctions';

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    async waitFixed(time){
        await browser.pause(time);
    }
    
    async clickWe(elem) {
        await elem.waitForExist();
        await elem.waitForEnabled();
        await elem.click();
    }
    
    async typeWe(elem, text) {
        await elem.waitForExist();
        await elem.waitForEnabled();
        await elem.setValue(text);
    } 

    async verifyPanel(panelElement, timeout = 50000) {
        await panelElement.waitForDisplayed({ timeout });
    }

}
