import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class homePage extends Page {
    
     get animationText () {
        return $('//android.widget.TextView[@content-desc="Animation"]');
    }

    get bouncingBallsText () {
        return $('//android.widget.TextView[@content-desc="Bouncing Balls"]');
    }

}

export default new homePage();
