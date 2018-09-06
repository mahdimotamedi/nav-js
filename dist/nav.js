/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: CONDITIONS, ANIMATIONS, DIR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CONDITIONS\", function() { return CONDITIONS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ANIMATIONS\", function() { return ANIMATIONS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DIR\", function() { return DIR; });\nconst CONDITIONS = {\r\n    HORIZONTAL: 'horizontal',\r\n    VERTICAL: 'vertical',\r\n};\r\n\r\nconst ANIMATIONS = {\r\n    NONE: 'none',\r\n    FADE: 'fade',\r\n    SLIDE: 'slide',\r\n};\r\n\r\nconst DIR = {\r\n    LTR: 'ltr',\r\n    RTL: 'rtl',\r\n};\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./responsive */ \"./src/responsive.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\r\n\r\n\r\nclass Navjs {\r\n    /**\r\n     * navjs constructor\r\n     * starter script\r\n     */\r\n    constructor({\r\n                    id,\r\n                    theme = 'default',\r\n                    responsive = true,\r\n                    condition = _constants__WEBPACK_IMPORTED_MODULE_1__[\"CONDITIONS\"].HORIZONTAL,\r\n                    animation = _constants__WEBPACK_IMPORTED_MODULE_1__[\"ANIMATIONS\"].SLIDE,\r\n                    dir = _constants__WEBPACK_IMPORTED_MODULE_1__[\"DIR\"].LTR,\r\n                })\r\n    {\r\n        this.element = document.getElementById(id);\r\n        if (!this.element)\r\n            throw Error('id of element not found: ' + id);\r\n\r\n        this.theme = theme;\r\n        this.responsive = responsive;\r\n        this.condition = condition;\r\n        this.dir = dir;\r\n\r\n        if (this.responsive)\r\n            this.responsiveObj = new Navjs.Responsive(this.element, this.dir);\r\n\r\n        this.addClasses();\r\n    }\r\n\r\n    /**\r\n     * add required classes to the element\r\n     */\r\n    addClasses()\r\n    {\r\n        this.element.classList.add('navjs')\r\n    }\r\n}\r\n\r\n// inject dependencies to Navjs class\r\nNavjs.Responsive = _responsive__WEBPACK_IMPORTED_MODULE_0__[\"Responsive\"];\r\n\r\n// add nav js to global var of browser\r\nwindow.Navjs = Navjs;\r\n\r\n// jquery plugin\r\njQuery(document).ready(function() {\r\n\r\n    \"use strict\";\r\n\r\n    /* ========== Sticky on scroll ========== */\r\n    function stickyNav() {\r\n\r\n        var scrollTop = $(window).scrollTop(),\r\n            noSticky = $('.no-sticky'),\r\n            viewportSm = $('.viewport-sm'),\r\n            viewportLg = $('.viewport-lg'),\r\n            viewportLgNosticky = $('.viewport-lg.no-sticky'),\r\n            viewportLgLogo = viewportLg.find('.logo img'),\r\n            viewportLgNostickyLogo = viewportLgNosticky.find('.logo img'),\r\n            headerTransparentLg = $('.viewport-lg.header-transparent'),\r\n            headerTransparentLgNosticky = $('.viewport-lg.header-transparent.no-sticky'),\r\n            headerOpacityLg = $('.viewport-lg.header-opacity'),\r\n            headerOpacityLgNosticky = $('.viewport-lg.header-opacity.no-sticky');\r\n\r\n        if (scrollTop > stickyNavTop) {\r\n            navjsHeader.addClass('sticky');\r\n            viewportLgLogo.attr('src', stickyLogoSrc);\r\n            viewportLgNostickyLogo.attr('src', logoSrc);\r\n            headerTransparentLg.removeClass('header-transparent-on');\r\n            headerOpacityLg.removeClass('header-opacity-on');\r\n            headerTransparentLgNosticky.addClass('header-transparent-on');\r\n            headerOpacityLgNosticky.addClass('header-opacity-on');\r\n        } else {\r\n            navjsHeader.removeClass('sticky');\r\n            viewportLgLogo.attr('src', logoSrc);\r\n            headerTransparentLg.addClass('header-transparent-on');\r\n            headerOpacityLg.addClass('header-opacity-on');\r\n        }\r\n\r\n        noSticky.removeClass('sticky');\r\n        viewportSm.removeClass('sticky');\r\n\r\n        var logoCenterWidth = $('.logoCenter .logo img').width(),\r\n            menuCenterOneWidth = $('.center-menu-1 .navjs-menu').width(),\r\n            menuCenterOneListMenu = $('.center-menu-1 .navjs-menu > ul'),\r\n            menuCenterOneListWidth = menuCenterOneWidth - logoCenterWidth;\r\n\r\n        if ($(window).width() < 1200) {\r\n            menuCenterOneListMenu.outerWidth( menuCenterOneWidth );\r\n        } else {\r\n            menuCenterOneListMenu.outerWidth( menuCenterOneListWidth / 2 );\r\n        }\r\n\r\n        $('.logoCenter').width(logoCenterWidth);\r\n\r\n    }\r\n\r\n    /* ========== Menu overlay transition ========== */\r\n    function overlayMenuTransition() {\r\n        var overlayMenuFirst = $('.navjs-menu-overlay > ul > li:first-child'),\r\n            overlayMenuList = $('.navjs-menu-overlay > ul > li');\r\n\r\n        overlayMenuFirst.attr('data-delay', '0');\r\n\r\n        overlayMenuList.each(function(){\r\n            var $this = $(this),\r\n                overlayMenuNext = $this.next('li'),\r\n                menuDataDelay = $this.attr('data-delay'),\r\n                menuDataDelayNext = parseInt(menuDataDelay) + parseInt('100');\r\n\r\n            overlayMenuNext.attr('data-delay', menuDataDelayNext);\r\n\r\n            $this.delay(menuDataDelay).queue(function(next) {\r\n                $(this).addClass(\"menuSlideIn\");\r\n                next();\r\n            });\r\n        });\r\n    }\r\n\r\n    /* ========== Horizontal navigation menu ========== */\r\n    if ($('.navjs-header').length) {\r\n\r\n        var navjsHeader = $('.navjs-header'),\r\n            logo = navjsHeader.find('.logo'),\r\n            logoImg = logo.find('img'),\r\n            logoSrc = logoImg.attr('src'),\r\n            logoClone = logo.clone(),\r\n            mobileLogoSrc = logo.data('mobile-logo'),\r\n            stickyLogoSrc = logo.data('sticky-logo'),\r\n            burgerMenu = navjsHeader.find('.burger-menu'),\r\n            navjsMenu = $('.navjs-menu'),\r\n            navjsMenuListWrapper = $('.navjs-menu > ul'),\r\n            navjsMenuListDropdown = $('.navjs-menu ul li:has(ul)'),\r\n            headerShadow = $('.navjs-header.header-shadow'),\r\n            headerTransparent = $('.navjs-header.header-transparent'),\r\n            headerOpacity = $('.navjs-header.header-opacity'),\r\n            megaMenuFullwidthContainer = $('.mega-menu-fullwidth .mega-menu-container'),\r\n            stickyNavTop = navjsHeader.offset().top;\r\n\r\n        /* ========== Center menu 1 ========== */\r\n        $('.center-menu-1 .navjs-menu > ul:first-child').after('<div class=\"logoCenter\"></div>');\r\n        $('.logoCenter').html(logoClone);\r\n\r\n        /* ========== Mega menu fullwidth wrap container ========== */\r\n        megaMenuFullwidthContainer.each(function(){\r\n            $(this).children().wrapAll('<div class=\"mega-menu-fullwidth-container\"></div>');\r\n        });\r\n\r\n        /* ========== Window resize ========== */\r\n        $(window).on(\"resize\", function() {\r\n\r\n            var megaMenuContainer = $('.mega-menu-fullwidth-container');\r\n\r\n            if ($(window).width() < 1200) {\r\n\r\n                logoImg.attr('src', mobileLogoSrc);\r\n                navjsHeader.removeClass('viewport-lg');\r\n                navjsHeader.addClass('viewport-sm');\r\n                headerTransparent.removeClass('header-transparent-on');\r\n                headerOpacity.removeClass('header-opacity-on');\r\n                megaMenuContainer.removeClass('container');\r\n\r\n            } else {\r\n\r\n                logoImg.attr('src', logoSrc);\r\n                navjsHeader.removeClass('viewport-sm');\r\n                navjsHeader.addClass('viewport-lg');\r\n                headerTransparent.addClass('header-transparent-on');\r\n                headerOpacity.addClass('header-opacity-on');\r\n                megaMenuContainer.addClass('container');\r\n\r\n            }\r\n\r\n            stickyNav();\r\n\r\n        }).resize();\r\n\r\n        var viewportSm = $('.viewport-sm'),\r\n            viewportLg = $('.viewport-lg');\r\n\r\n        /* ========== Dropdown Menu Toggle ========== */\r\n        burgerMenu.on(\"click\", function(){\r\n            $(this).toggleClass('menu-open');\r\n            navjsMenuListWrapper.slideToggle(300);\r\n        });\r\n\r\n        navjsMenuListDropdown.each(function(){\r\n            $(this).append( '<span class=\"dropdown-plus\"></span>' );\r\n            $(this).addClass('dropdown_menu');\r\n        });\r\n\r\n        $('.dropdown-plus').on(\"click\", function(){\r\n            $(this).prev('ul').slideToggle(300);\r\n            $(this).toggleClass('dropdown-open');\r\n        });\r\n\r\n        $('.dropdown_menu a').append('<span></span>');\r\n\r\n        /* ========== Added header shadow ========== */\r\n        headerShadow.append('<div class=\"header-shadow-wrapper\"></div>');\r\n\r\n        /* ========== Sticky on scroll ========== */\r\n        $(window).on(\"scroll\", function() {\r\n            stickyNav();\r\n        }).scroll();\r\n\r\n        /* ========== Menu hover transition ========== */\r\n        var listMenuHover4 = $('.navjs-menu.menu-hover-4 > ul > li > a');\r\n        listMenuHover4.append('<div class=\"hover-transition\"></div>');\r\n\r\n    }\r\n\r\n    /* ========== Overlay navigation menu ========== */\r\n    if ($('.navjs-header-overlay').length) {\r\n\r\n        var navjsHeaderOverlay = $('.navjs-header-overlay'),\r\n            navjsMenuOverlay = $('.navjs-menu-overlay'),\r\n            burgerMenuOverlay = navjsHeaderOverlay.find('.burger-menu'),\r\n            lineMenuOverlay = navjsHeaderOverlay.find('.line-menu'),\r\n            menuOverlayLogo = navjsHeaderOverlay.find('.logo'),\r\n            overlayLogoImg = menuOverlayLogo.find('img'),\r\n            overlayLogoSrc = overlayLogoImg.attr('src'),\r\n            overlayLogoClone = menuOverlayLogo.clone(),\r\n            menuWrapperLogoSrc = menuOverlayLogo.data('overlay-logo'),\r\n            menuOverlayListDropdown = $('.navjs-menu-overlay > ul > li:has(ul)'),\r\n            menuOverlayLink = $('.navjs-menu-overlay > ul > li > a'),\r\n            menuSlide = $('.navjs-header-overlay.menu-slide'),\r\n            menuSocialMedia = navjsMenuOverlay.next('.menu-social-media');\r\n\r\n        lineMenuOverlay.wrapAll('<span></span>');\r\n        menuOverlayLink.wrap('<div class=\"menu-overlay-link\"></div>');\r\n\r\n        /* ========== Submenu Toggle ========== */\r\n        menuOverlayListDropdown.each(function(){\r\n            var menuOverlayDropdownLink = $(this).find('.menu-overlay-link');\r\n            menuOverlayDropdownLink.append( '<span class=\"overlay-dropdown-plus\"></span>' );\r\n            $(this).addClass('overlay_dropdown_menu');\r\n        });\r\n\r\n        $('.overlay_dropdown_menu > ul').addClass('overlay-submenu-close');\r\n\r\n        $('.overlay-dropdown-plus').on(\"click\", function(){\r\n            var $thisParent = $(this).parent('.menu-overlay-link');\r\n            $thisParent.next('ul').slideToggle(300).toggleClass('overlay-submenu-close');\r\n            $(this).toggleClass('overlay-dropdown-open');\r\n        });\r\n\r\n        navjsMenuOverlay.add(menuSocialMedia).wrapAll('<div class=\"nav-menu-wrapper\"></div>');\r\n\r\n        var overlayNavMenuWrapper = $('.nav-menu-wrapper');\r\n\r\n        overlayNavMenuWrapper.prepend(overlayLogoClone);\r\n        overlayNavMenuWrapper.find('.logo img').attr('src', menuWrapperLogoSrc);\r\n\r\n        var menuOverlayHover = $('.navjs-menu-overlay > ul > li > ul, .overlay-dropdown-plus');\r\n\r\n        menuOverlayHover.each(function(){\r\n            $(this).on(\"mouseenter\", function () {\r\n                $(this).parents(\"li\").addClass(\"overlay-menu-hover\");\r\n            });\r\n            $(this).on(\"mouseleave\", function () {\r\n                $(this).parents(\"li\").removeClass(\"overlay-menu-hover\");\r\n            });\r\n        });\r\n\r\n        /* ========== Menu overlay open ========== */\r\n        burgerMenuOverlay.on(\"click\", function(){\r\n\r\n            var overlayMenuList = $('.navjs-menu-overlay > ul > li');\r\n\r\n            $(this).toggleClass('menu-open');\r\n            overlayNavMenuWrapper.toggleClass('overlay-menu-open');\r\n            overlayMenuList.removeClass(\"menuSlideIn\");\r\n\r\n            if ($(this).hasClass(\"menu-open\")) {\r\n                overlayMenuTransition();\r\n                overlayMenuList.removeClass(\"menuSlideOut\").addClass(\"menuFade\");\r\n            }\r\n\r\n            if (!$(this).hasClass(\"menu-open\")) {\r\n                overlayMenuList.addClass(\"menuSlideOut\").removeClass(\"menuFade\");\r\n            }\r\n\r\n        });\r\n\r\n        /* ========== Menu slide settings ========== */\r\n        var menuSlideNavWrapper = menuSlide.find('.nav-menu-wrapper'),\r\n            menuSlideNavLogo = menuSlideNavWrapper.find('.logo');\r\n\r\n        if (navjsHeaderOverlay.hasClass('menu-slide')){\r\n            navjsHeaderOverlay.removeClass('overlay-center-menu');\r\n        }\r\n\r\n        menuSlideNavLogo.remove();\r\n        menuSlideNavWrapper.after('<div class=\"slidemenu-bg-overlay\"></div>');\r\n\r\n        $('.slidemenu-bg-overlay').on(\"click\", function(){\r\n            menuSlideNavWrapper.removeClass('overlay-menu-open');\r\n            burgerMenuOverlay.removeClass('menu-open');\r\n        });\r\n\r\n    }\r\n\r\n    /* ========== Menu icon color ========== */\r\n    $('.navjs-menu-icon').css('color', function () {\r\n        var iconColorAttr = $(this).data('fa-color');\r\n        return iconColorAttr;\r\n    });\r\n\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/responsive.js":
/*!***************************!*\
  !*** ./src/responsive.js ***!
  \***************************/
/*! exports provided: Responsive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Responsive\", function() { return Responsive; });\n/**\r\n * create responsive of element in mobile and tablet\r\n */\r\nclass Responsive {\r\n    /**\r\n     * responsive constructor\r\n     *\r\n     * @param element\r\n     * @param dir\r\n     */\r\n    constructor(element, dir)\r\n    {\r\n        this.element = element;\r\n        this.dir = dir;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/responsive.js?");

/***/ }),

/***/ "./src/themes/default/index.scss":
/*!***************************************!*\
  !*** ./src/themes/default/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"themes/default.css\";\n\n//# sourceURL=webpack:///./src/themes/default/index.scss?");

/***/ }),

/***/ 0:
/*!************************************************************!*\
  !*** multi ./src/index.js ./src/themes/default/index.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/index.js */\"./src/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/themes/default/index.scss */\"./src/themes/default/index.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js_./src/themes/default/index.scss?");

/***/ })

/******/ });