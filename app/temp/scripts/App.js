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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Person = __webpack_require__(1);

var _Person2 = _interopRequireDefault(_Person);

var _owlCarousel = __webpack_require__(2);

var _owlCarousel2 = _interopRequireDefault(_owlCarousel);

var _materianizeParallax = __webpack_require__(3);

var _materianizeParallax2 = _interopRequireDefault(_materianizeParallax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Instantiate a new object using our modules/classes
var john = new _Person2.default("John Doe", "blue"); // 3rd party packages from NPM
// var $ = require('jquery');

// Our modules / classes

john.greet();

var owlCarousel = new _owlCarousel2.default();
var parallax = new _materianizeParallax2.default();
// owlCarousel.hello();


// $("h1").remove();//test jquery

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
  function Person(fullName, favColor) {
    _classCallCheck(this, Person);

    this.name = fullName;
    this.favoriteColor = favColor;
  }

  _createClass(Person, [{
    key: "greet",
    value: function greet() {
      console.log("Hi there! my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
      $("h1").remove(); //test jquery
    }
  }]);

  return Person;
}();

exports.default = Person;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OwlCarousel = function () {
  function OwlCarousel() {
    _classCallCheck(this, OwlCarousel);

    this.allMethods();
  }

  _createClass(OwlCarousel, [{
    key: "allMethods",
    value: function allMethods() {
      (function () {

        /**
         * Global variables
         */

        var userAgent = navigator.userAgent.toLowerCase(),
            initialDate = new Date(),
            $document = $(document),
            $window = $(window),
            $html = $("html"),
            $body = $('body'),
            isDesktop = $html.hasClass("desktop"),
            isRtl = $html.attr("dir") === "rtl",
            isIE = userAgent.indexOf("msie") != -1 ? parseInt(userAgent.split("msie")[1], 10) : userAgent.indexOf("trident") != -1 ? 11 : userAgent.indexOf("edge") != -1 ? 12 : false,
            isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            isTouch = "ontouchstart" in window,
            onloadCaptchaCallback,
            plugins = {
          owl: $(".owl-carousel"),
          lightGallery: $("[data-lightgallery='group']"),
          lightGalleryItem: $("[data-lightgallery='item']")
        };

        /**
         * Initialize All Scripts
         */
        $document.ready(function () {
          var isNoviBuilder = window.xMode;

          /**
           * initOwlCarousel
           * @description  Init owl carousel plugin
           */
          function initOwlCarousel(c) {
            var aliaces = ["-", "-xs-", "-sm-", "-md-", "-lg-", "-xl-"],
                values = [0, 480, 768, 992, 1200, 1475],
                responsive = {},
                j,
                k;

            for (j = 0; j < values.length; j++) {
              responsive[values[j]] = {};
              for (k = j; k >= -1; k--) {
                if (!responsive[values[j]]["items"] && c.attr("data" + aliaces[k] + "items")) {
                  responsive[values[j]]["items"] = k < 0 ? 1 : parseInt(c.attr("data" + aliaces[k] + "items"), 10);
                }
                if (!responsive[values[j]]["stagePadding"] && responsive[values[j]]["stagePadding"] !== 0 && c.attr("data" + aliaces[k] + "stage-padding")) {
                  responsive[values[j]]["stagePadding"] = k < 0 ? 0 : parseInt(c.attr("data" + aliaces[k] + "stage-padding"), 10);
                }
                if (!responsive[values[j]]["margin"] && responsive[values[j]]["margin"] !== 0 && c.attr("data" + aliaces[k] + "margin")) {
                  responsive[values[j]]["margin"] = k < 0 ? 30 : parseInt(c.attr("data" + aliaces[k] + "margin"), 10);
                }
              }
            }

            // Enable custom pagination
            if (c.attr('data-dots-custom')) {
              c.on("initialized.owl.carousel", function (event) {
                var carousel = $(event.currentTarget),
                    customPag = $(carousel.attr("data-dots-custom")),
                    active = 0;

                if (carousel.attr('data-active')) {
                  active = parseInt(carousel.attr('data-active'), 10);
                }

                carousel.trigger('to.owl.carousel', [active, 300, true]);
                customPag.find("[data-owl-item='" + active + "']").addClass("active");

                customPag.find("[data-owl-item]").on('click', function (e) {
                  e.preventDefault();
                  carousel.trigger('to.owl.carousel', [parseInt(this.getAttribute("data-owl-item")), 300, true]);
                });

                carousel.on("translate.owl.carousel", function (event) {
                  customPag.find(".active").removeClass("active");
                  customPag.find("[data-owl-item='" + event.item.index + "']").addClass("active");
                });
              });
            }

            // Enable custom Navigation
            if (c.attr('data-nav-custom')) {
              c.on("initialized.owl.carousel", function (event) {
                var carousel = $(event.currentTarget),
                    customNav = $(carousel.attr("data-nav-custom"));

                // Custom Navigation Events
                customNav.find(".owl-arrow-next").click(function (e) {
                  e.preventDefault();
                  carousel.trigger('next.owl.carousel');
                });
                customNav.find(".owl-arrow-prev").click(function (e) {
                  e.preventDefault();
                  carousel.trigger('prev.owl.carousel');
                });
              });
            }

            c.on("initialized.owl.carousel", function (event) {
              initLightGallry($(c).parent(), 'lightGallery-in-carousel');
            });

            c.owlCarousel({
              autoplay: c.attr("data-autoplay") === "true",
              loop: isNoviBuilder ? false : c.attr("data-loop") !== "false",
              items: 1,
              rtl: isRtl,
              dotsContainer: c.attr("data-pagination-class") || false,
              autoplayHoverPause: true,
              navContainer: c.attr("data-navigation-class") || false,
              mouseDrag: isNoviBuilder ? false : c.attr("data-mouse-drag") !== "false",
              nav: c.attr("data-nav") === "true",
              dots: c.attr("data-dots") === "true",
              dotsEach: c.attr("data-dots-each") ? parseInt(c.attr("data-dots-each"), 10) : false,
              animateIn: c.attr('data-animation-in') ? c.attr('data-animation-in') : false,
              animateOut: c.attr('data-animation-out') ? c.attr('data-animation-out') : false,
              responsive: responsive,
              navText: $.parseJSON(c.attr("data-nav-text")) || [],
              navClass: $.parseJSON(c.attr("data-nav-class")) || ['owl-prev', 'owl-next']
            });
          }

          /**
           * Owl carousel
           * @description Enables Owl carousel plugin
           */
          if (plugins.owl.length) {
            var i;
            for (i = 0; i < plugins.owl.length; i++) {
              var c = $(plugins.owl[i]);
              //skip owl in bootstrap tabs
              if (!c.parents('.tab-content').length) {
                initOwlCarousel(c);
              }
            }
          }

          /**
           * lightGallery
           * @description Enables lightGallery plugin
           */
          function initLightGallry(wrapperToInit, addClass) {
            if (plugins.lightGallery.length && !isNoviBuilder) {
              $(wrapperToInit).find(plugins.lightGallery.selector).lightGallery({
                thumbnail: true,
                selector: "[data-lightgallery='group-item']",
                addClass: addClass
              });
            }

            if (plugins.lightGalleryItem.length && !isNoviBuilder) {
              $(wrapperToInit).find(plugins.lightGalleryItem.selector).lightGallery({
                selector: "this",
                addClass: addClass
              });
            }
          }

          if (plugins.lightGallery.length && !isNoviBuilder) {
            initLightGallry('html');
          }

          if (plugins.lightGalleryItem.length && !isNoviBuilder) {
            initLightGallry('html');
          }
        });
      })();
    }
  }]);

  return OwlCarousel;
}();

exports.default = OwlCarousel;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Parallax = function () {
  function Parallax() {
    _classCallCheck(this, Parallax);

    this.allMethods();
  }

  _createClass(Parallax, [{
    key: "allMethods",
    value: function allMethods() {
      (function () {

        /**
         * Global variables
         */

        var userAgent = navigator.userAgent.toLowerCase(),
            initialDate = new Date(),
            $document = $(document),
            $window = $(window),
            $html = $("html"),
            $body = $('body'),
            isDesktop = $html.hasClass("desktop"),
            isRtl = $html.attr("dir") === "rtl",
            isIE = userAgent.indexOf("msie") != -1 ? parseInt(userAgent.split("msie")[1], 10) : userAgent.indexOf("trident") != -1 ? 11 : userAgent.indexOf("edge") != -1 ? 12 : false,
            isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            isTouch = "ontouchstart" in window,
            onloadCaptchaCallback,
            plugins = {
          materialParallax: $(".parallax-container")
        };

        /**
         * Initialize All Scripts
         */
        $document.ready(function () {
          var isNoviBuilder = window.xMode;

          /**
           * Material Parallax
           * @description Enables Material Parallax plugin
           */
          if (plugins.materialParallax.length) {
            var i;

            if (!isNoviBuilder && !isIE && !isMobile) {
              plugins.materialParallax.parallax();
              if (!isMobile) {
                $window.scroll(function () {
                  var transfromY = 1 - $window.scrollTop() / 250;

                  $('.breadcrumb-wrapper').find('.parallax-content').css({
                    'opacity': 1 - $window.scrollTop() / 250,
                    'top': 1 + $window.scrollTop() / 3
                  });
                });
              }
            } else {

              for (i = 0; i < plugins.materialParallax.length; i++) {
                var parallax = $(plugins.materialParallax[i]),
                    imgPath = parallax.data("parallax-img");

                parallax.css({
                  "background-image": 'url(' + imgPath + ')',
                  "background-attachment": "scroll",
                  "background-size": "cover"
                });
              }
            }
          }
          ;
        });
      })();
    }
  }]);

  return Parallax;
}();

exports.default = Parallax;

/***/ })
/******/ ]);