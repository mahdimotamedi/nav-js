require('jsdom-global')();
const assert = require('assert');

describe('nav element classes' , function() {
    it('have class navjs' , function() {

        $ = global.jQuery = require('jquery')(window);
        const Navjs = require('./../dist/nav');
        const nav = document.createElement('nav');
        nav.id = 'main-nav';

        let navJs = new Navjs({
            id: 'main-nav',
        });

        assert.equal(nav.classList.contains('navjs'), true);
    });
});