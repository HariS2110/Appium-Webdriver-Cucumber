import { $ } from '@wdio/globals'
import Page from './page.js';

class homePage extends Page {
    
     get animationText () {
        return $('//android.widget.TextView[@content-desc="Animation"]');
    }

    get bouncingBallsText () {
        return $('//android.widget.TextView[@content-desc="Bouncing Balls"]');
    }

    get bouncingBallsAnimationText () { 
        return $('//android.widget.TextView[@text="Animation/Bouncing Balls"]');
    }


}

export default new homePage();
