import { Responsive } from './responsive';
import { CONDITIONS, ANIMATIONS, DIR } from './constants';

class Navjs {
    /**
     * navjs constructor
     * starter script
     */
    constructor({
                    id,
                    theme = 'default',
                    responsive = true,
                    condition = CONDITIONS.HORIZONTAL,
                    animation = ANIMATIONS.SLIDE,
                    dir = DIR.LTR,
                })
    {
        this.element = document.getElementById(id);
        this.theme = theme;
        this.responsive = responsive;
        this.condition = condition;
        this.dir = dir;

        if (this.responsive)
            this.responsiveObj = new Navjs.Responsive(this.element, this.dir);

        this.addClasses();
    }

    /**
     * add required classes to the element
     */
    addClasses()
    {
        this.element.classList.add('navjs')
    }
}

// inject dependencies to Navjs class
Navjs.Responsive = Responsive;

// add nav js to global var of browser
window.Navjs = Navjs;