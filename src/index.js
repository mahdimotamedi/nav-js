import { Responsive } from './responsive';
import { CONDITIONS, ANIMATIONS } from './constants';

class Navjs {
    constructor({
                    id,
                    theme = 'default',
                    responsive = true,
                    condition = CONDITIONS.HORIZONTAL,
                    animation = ANIMATIONS.SLIDE
                })
    {
        this.element = document.getElementById(id);
        console.log(this.element);

        this.responive = new Navjs.Responsive();
        console.log(this.responive);
    }
}

// inject dependencies to Navjs class
Navjs.Responsive = Responsive;

// add nav js to global var of browser
window.Navjs = Navjs;