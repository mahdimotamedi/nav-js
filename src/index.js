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
        if (!this.element)
            throw Error('id of element not found: ' + id);

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

// jquery plugin
jQuery(document).ready(function() {

    "use strict";

    /* ========== Sticky on scroll ========== */
    function stickyNav() {

        var scrollTop = $(window).scrollTop(),
            noSticky = $('.no-sticky'),
            viewportSm = $('.viewport-sm'),
            viewportLg = $('.viewport-lg'),
            viewportLgNosticky = $('.viewport-lg.no-sticky'),
            viewportLgLogo = viewportLg.find('.logo img'),
            viewportLgNostickyLogo = viewportLgNosticky.find('.logo img'),
            headerTransparentLg = $('.viewport-lg.header-transparent'),
            headerTransparentLgNosticky = $('.viewport-lg.header-transparent.no-sticky'),
            headerOpacityLg = $('.viewport-lg.header-opacity'),
            headerOpacityLgNosticky = $('.viewport-lg.header-opacity.no-sticky');

        if (scrollTop > stickyNavTop) {
            navjsHeader.addClass('sticky');
            viewportLgLogo.attr('src', stickyLogoSrc);
            viewportLgNostickyLogo.attr('src', logoSrc);
            headerTransparentLg.removeClass('header-transparent-on');
            headerOpacityLg.removeClass('header-opacity-on');
            headerTransparentLgNosticky.addClass('header-transparent-on');
            headerOpacityLgNosticky.addClass('header-opacity-on');
        } else {
            navjsHeader.removeClass('sticky');
            viewportLgLogo.attr('src', logoSrc);
            headerTransparentLg.addClass('header-transparent-on');
            headerOpacityLg.addClass('header-opacity-on');
        }

        noSticky.removeClass('sticky');
        viewportSm.removeClass('sticky');

        var logoCenterWidth = $('.logoCenter .logo img').width(),
            menuCenterOneWidth = $('.center-menu-1 .navjs-menu').width(),
            menuCenterOneListMenu = $('.center-menu-1 .navjs-menu > ul'),
            menuCenterOneListWidth = menuCenterOneWidth - logoCenterWidth;

        if ($(window).width() < 1200) {
            menuCenterOneListMenu.outerWidth( menuCenterOneWidth );
        } else {
            menuCenterOneListMenu.outerWidth( menuCenterOneListWidth / 2 );
        }

        $('.logoCenter').width(logoCenterWidth);

    }

    /* ========== Menu overlay transition ========== */
    function overlayMenuTransition() {
        var overlayMenuFirst = $('.navjs-menu-overlay > ul > li:first-child'),
            overlayMenuList = $('.navjs-menu-overlay > ul > li');

        overlayMenuFirst.attr('data-delay', '0');

        overlayMenuList.each(function(){
            var $this = $(this),
                overlayMenuNext = $this.next('li'),
                menuDataDelay = $this.attr('data-delay'),
                menuDataDelayNext = parseInt(menuDataDelay) + parseInt('100');

            overlayMenuNext.attr('data-delay', menuDataDelayNext);

            $this.delay(menuDataDelay).queue(function(next) {
                $(this).addClass("menuSlideIn");
                next();
            });
        });
    }

    /* ========== Horizontal navigation menu ========== */
    if ($('.navjs-header').length) {

        var navjsHeader = $('.navjs-header'),
            logo = navjsHeader.find('.logo'),
            logoImg = logo.find('img'),
            logoSrc = logoImg.attr('src'),
            logoClone = logo.clone(),
            mobileLogoSrc = logo.data('mobile-logo'),
            stickyLogoSrc = logo.data('sticky-logo'),
            burgerMenu = navjsHeader.find('.burger-menu'),
            navjsMenu = $('.navjs-menu'),
            navjsMenuListWrapper = $('.navjs-menu > ul'),
            navjsMenuListDropdown = $('.navjs-menu ul li:has(ul)'),
            headerShadow = $('.navjs-header.header-shadow'),
            headerTransparent = $('.navjs-header.header-transparent'),
            headerOpacity = $('.navjs-header.header-opacity'),
            megaMenuFullwidthContainer = $('.mega-menu-fullwidth .mega-menu-container'),
            stickyNavTop = navjsHeader.offset().top;

        /* ========== Center menu 1 ========== */
        $('.center-menu-1 .navjs-menu > ul:first-child').after('<div class="logoCenter"></div>');
        $('.logoCenter').html(logoClone);

        /* ========== Mega menu fullwidth wrap container ========== */
        megaMenuFullwidthContainer.each(function(){
            $(this).children().wrapAll('<div class="mega-menu-fullwidth-container"></div>');
        });

        /* ========== Window resize ========== */
        $(window).on("resize", function() {

            var megaMenuContainer = $('.mega-menu-fullwidth-container');

            if ($(window).width() < 1200) {

                logoImg.attr('src', mobileLogoSrc);
                navjsHeader.removeClass('viewport-lg');
                navjsHeader.addClass('viewport-sm');
                headerTransparent.removeClass('header-transparent-on');
                headerOpacity.removeClass('header-opacity-on');
                megaMenuContainer.removeClass('container');

            } else {

                logoImg.attr('src', logoSrc);
                navjsHeader.removeClass('viewport-sm');
                navjsHeader.addClass('viewport-lg');
                headerTransparent.addClass('header-transparent-on');
                headerOpacity.addClass('header-opacity-on');
                megaMenuContainer.addClass('container');

            }

            stickyNav();

        }).resize();

        var viewportSm = $('.viewport-sm'),
            viewportLg = $('.viewport-lg');

        /* ========== Dropdown Menu Toggle ========== */
        burgerMenu.on("click", function(){
            $(this).toggleClass('menu-open');
            navjsMenuListWrapper.slideToggle(300);
        });

        navjsMenuListDropdown.each(function(){
            $(this).append( '<span class="dropdown-plus"></span>' );
            $(this).addClass('dropdown_menu');
        });

        $('.dropdown-plus').on("click", function(){
            $(this).prev('ul').slideToggle(300);
            $(this).toggleClass('dropdown-open');
        });

        $('.dropdown_menu a').append('<span></span>');

        /* ========== Added header shadow ========== */
        headerShadow.append('<div class="header-shadow-wrapper"></div>');

        /* ========== Sticky on scroll ========== */
        $(window).on("scroll", function() {
            stickyNav();
        }).scroll();

        /* ========== Menu hover transition ========== */
        var listMenuHover4 = $('.navjs-menu.menu-hover-4 > ul > li > a');
        listMenuHover4.append('<div class="hover-transition"></div>');

    }

    /* ========== Overlay navigation menu ========== */
    if ($('.navjs-header-overlay').length) {

        var navjsHeaderOverlay = $('.navjs-header-overlay'),
            navjsMenuOverlay = $('.navjs-menu-overlay'),
            burgerMenuOverlay = navjsHeaderOverlay.find('.burger-menu'),
            lineMenuOverlay = navjsHeaderOverlay.find('.line-menu'),
            menuOverlayLogo = navjsHeaderOverlay.find('.logo'),
            overlayLogoImg = menuOverlayLogo.find('img'),
            overlayLogoSrc = overlayLogoImg.attr('src'),
            overlayLogoClone = menuOverlayLogo.clone(),
            menuWrapperLogoSrc = menuOverlayLogo.data('overlay-logo'),
            menuOverlayListDropdown = $('.navjs-menu-overlay > ul > li:has(ul)'),
            menuOverlayLink = $('.navjs-menu-overlay > ul > li > a'),
            menuSlide = $('.navjs-header-overlay.menu-slide'),
            menuSocialMedia = navjsMenuOverlay.next('.menu-social-media');

        lineMenuOverlay.wrapAll('<span></span>');
        menuOverlayLink.wrap('<div class="menu-overlay-link"></div>');

        /* ========== Submenu Toggle ========== */
        menuOverlayListDropdown.each(function(){
            var menuOverlayDropdownLink = $(this).find('.menu-overlay-link');
            menuOverlayDropdownLink.append( '<span class="overlay-dropdown-plus"></span>' );
            $(this).addClass('overlay_dropdown_menu');
        });

        $('.overlay_dropdown_menu > ul').addClass('overlay-submenu-close');

        $('.overlay-dropdown-plus').on("click", function(){
            var $thisParent = $(this).parent('.menu-overlay-link');
            $thisParent.next('ul').slideToggle(300).toggleClass('overlay-submenu-close');
            $(this).toggleClass('overlay-dropdown-open');
        });

        navjsMenuOverlay.add(menuSocialMedia).wrapAll('<div class="nav-menu-wrapper"></div>');

        var overlayNavMenuWrapper = $('.nav-menu-wrapper');

        overlayNavMenuWrapper.prepend(overlayLogoClone);
        overlayNavMenuWrapper.find('.logo img').attr('src', menuWrapperLogoSrc);

        var menuOverlayHover = $('.navjs-menu-overlay > ul > li > ul, .overlay-dropdown-plus');

        menuOverlayHover.each(function(){
            $(this).on("mouseenter", function () {
                $(this).parents("li").addClass("overlay-menu-hover");
            });
            $(this).on("mouseleave", function () {
                $(this).parents("li").removeClass("overlay-menu-hover");
            });
        });

        /* ========== Menu overlay open ========== */
        burgerMenuOverlay.on("click", function(){

            var overlayMenuList = $('.navjs-menu-overlay > ul > li');

            $(this).toggleClass('menu-open');
            overlayNavMenuWrapper.toggleClass('overlay-menu-open');
            overlayMenuList.removeClass("menuSlideIn");

            if ($(this).hasClass("menu-open")) {
                overlayMenuTransition();
                overlayMenuList.removeClass("menuSlideOut").addClass("menuFade");
            }

            if (!$(this).hasClass("menu-open")) {
                overlayMenuList.addClass("menuSlideOut").removeClass("menuFade");
            }

        });

        /* ========== Menu slide settings ========== */
        var menuSlideNavWrapper = menuSlide.find('.nav-menu-wrapper'),
            menuSlideNavLogo = menuSlideNavWrapper.find('.logo');

        if (navjsHeaderOverlay.hasClass('menu-slide')){
            navjsHeaderOverlay.removeClass('overlay-center-menu');
        }

        menuSlideNavLogo.remove();
        menuSlideNavWrapper.after('<div class="slidemenu-bg-overlay"></div>');

        $('.slidemenu-bg-overlay').on("click", function(){
            menuSlideNavWrapper.removeClass('overlay-menu-open');
            burgerMenuOverlay.removeClass('menu-open');
        });

    }

    /* ========== Menu icon color ========== */
    $('.navjs-menu-icon').css('color', function () {
        var iconColorAttr = $(this).data('fa-color');
        return iconColorAttr;
    });

});