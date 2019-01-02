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

var _slickSlider = __webpack_require__(4);

var _slickSlider2 = _interopRequireDefault(_slickSlider);

var _rdMailForm = __webpack_require__(5);

var _rdMailForm2 = _interopRequireDefault(_rdMailForm);

var _copyrightYear = __webpack_require__(6);

var _copyrightYear2 = _interopRequireDefault(_copyrightYear);

var _uiToTop = __webpack_require__(7);

var _uiToTop2 = _interopRequireDefault(_uiToTop);

var _select = __webpack_require__(8);

var _select2 = _interopRequireDefault(_select);

var _swiper = __webpack_require__(9);

var _swiper2 = _interopRequireDefault(_swiper);

var _rdNavbar = __webpack_require__(10);

var _rdNavbar2 = _interopRequireDefault(_rdNavbar);

var _wow = __webpack_require__(11);

var _wow2 = _interopRequireDefault(_wow);

var _counter = __webpack_require__(12);

var _counter2 = _interopRequireDefault(_counter);

var _progressLinear = __webpack_require__(13);

var _progressLinear2 = _interopRequireDefault(_progressLinear);

var _progressBarCircle = __webpack_require__(14);

var _progressBarCircle2 = _interopRequireDefault(_progressBarCircle);

var _dateCountdown = __webpack_require__(15);

var _dateCountdown2 = _interopRequireDefault(_dateCountdown);

var _cdSchedule = __webpack_require__(16);

var _cdSchedule2 = _interopRequireDefault(_cdSchedule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Scroller		 					from './modules/scroller';


// Instantiate a new object using our modules/classes
// 3rd party packages from NPM
// var $ = require('jquery');

// Our modules / classes
var john = new _Person2.default("John Doe", "blue");
john.greet();

var owlCarousel = new _owlCarousel2.default();
var parallax = new _materianizeParallax2.default();
var slick = new _slickSlider2.default();
var rdMailForm = new _rdMailForm2.default();
var copyrightYear = new _copyrightYear2.default();
var uitotop = new _uiToTop2.default();
var select2 = new _select2.default();
var swiper = new _swiper2.default();
var rdNavbar = new _rdNavbar2.default();
var counterAnimate = new _counter2.default();
var progressLinear = new _progressLinear2.default();
var progressBarCircle = new _progressBarCircle2.default();
var dateCountdown = new _dateCountdown2.default();
var schedule = new _cdSchedule2.default();
// var scroller 			      = new Scroller();


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
      // $("h1").remove();//test jquery
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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SlickSlider = function () {
  function SlickSlider() {
    _classCallCheck(this, SlickSlider);

    this.allMethods();
  }

  _createClass(SlickSlider, [{
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
          slick: $('.slick-slider')
        };

        /**
         * Initialize All Scripts
         */
        $document.ready(function () {
          var isNoviBuilder = window.xMode;

          /**
           * Slick carousel
           * @description  Enable Slick carousel plugin
           */
          if (plugins.slick.length) {
            var i;
            for (i = 0; i < plugins.slick.length; i++) {
              var $slickItem = $(plugins.slick[i]);

              $slickItem.slick({
                slidesToScroll: parseInt($slickItem.attr('data-slide-to-scroll'), 10) || 1,
                asNavFor: $slickItem.attr('data-for') || false,
                speed: $slickItem.attr("data-speed") ? $slickItem.attr("data-speed") : 600,
                dots: $slickItem.attr("data-dots") === "true",
                infinite: isNoviBuilder ? false : $slickItem.attr("data-loop") === "true",
                focusOnSelect: true,
                arrows: $slickItem.attr("data-arrows") === "true",
                swipe: $slickItem.attr("data-swipe") === "true",
                autoplay: $slickItem.attr("data-autoplay") === "true",
                vertical: $slickItem.attr("data-vertical") === "true",
                centerMode: $slickItem.attr("data-center-mode") === "true",
                centerPadding: $slickItem.attr("data-center-padding") ? $slickItem.attr("data-center-padding") : '0.50',
                mobileFirst: true,
                rtl: isRtl,
                responsive: [{
                  breakpoint: 0,
                  settings: {
                    slidesToShow: parseInt($slickItem.attr('data-items'), 10) || 1
                  }
                }, {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: parseInt($slickItem.attr('data-xs-items'), 10) || 1
                  }
                }, {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: parseInt($slickItem.attr('data-sm-items'), 10) || 1
                  }
                }, {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: parseInt($slickItem.attr('data-md-items'), 10) || 1
                  }
                }, {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: parseInt($slickItem.attr('data-lg-items'), 10) || 1
                  }
                }]
              }).on('afterChange', function (event, slick, currentSlide, nextSlide) {
                var $this = $(this),
                    childCarousel = $this.attr('data-child');

                if (childCarousel) {
                  $(childCarousel + ' .slick-slide').removeClass('slick-current');
                  $(childCarousel + ' .slick-slide').eq(currentSlide).addClass('slick-current');
                }
              });
            }
          }
        });
      })();
    }
  }]);

  return SlickSlider;
}();

exports.default = SlickSlider;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RDMailForm = function () {
  function RDMailForm() {
    _classCallCheck(this, RDMailForm);

    this.allMethods();
  }

  _createClass(RDMailForm, [{
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
          rdMailForm: $(".rd-mailform"),
          rdInputLabel: $(".form-label"),
          regula: $("[data-constraints]"),
          mailchimp: $('.mailchimp-mailform'),
          campaignMonitor: $('.campaign-mailform')
        };

        /**
         * Initialize All Scripts
         */
        $document.ready(function () {
          var isNoviBuilder = window.xMode;

          /**
           * attachFormValidator
           * @description  attach form validation to elements
           */
          function attachFormValidator(elements) {
            for (var i = 0; i < elements.length; i++) {
              var o = $(elements[i]),
                  v;
              o.addClass("form-control-has-validation").after("<span class='form-validation'></span>");
              v = o.parent().find(".form-validation");
              if (v.is(":last-child")) {
                o.addClass("form-control-last-child");
              }
            }

            elements.on('input change propertychange blur', function (e) {
              var $this = $(this),
                  results;

              if (e.type != "blur") {
                if (!$this.parent().hasClass("has-error")) {
                  return;
                }
              }

              if ($this.parents('.rd-mailform').hasClass('success')) {
                return;
              }

              if ((results = $this.regula('validate')).length) {
                for (i = 0; i < results.length; i++) {
                  $this.siblings(".form-validation").text(results[i].message).parent().addClass("has-error");
                }
              } else {
                $this.siblings(".form-validation").text("").parent().removeClass("has-error");
              }
            }).regula('bind');

            var regularConstraintsMessages = [{
              type: regula.Constraint.Required,
              newMessage: "The text field is required."
            }, {
              type: regula.Constraint.Email,
              newMessage: "The email is not a valid email."
            }, {
              type: regula.Constraint.Numeric,
              newMessage: "Only numbers are required"
            }, {
              type: regula.Constraint.Selected,
              newMessage: "Please choose an option."
            }];

            for (var i = 0; i < regularConstraintsMessages.length; i++) {
              var regularConstraint = regularConstraintsMessages[i];

              regula.override({
                constraintType: regularConstraint.type,
                defaultMessage: regularConstraint.newMessage
              });
            }
          }

          /**
           * isValidated
           * @description  check if all elemnts pass validation
           */
          function isValidated(elements, captcha) {
            var results,
                errors = 0;

            if (elements.length) {
              for (j = 0; j < elements.length; j++) {

                var $input = $(elements[j]);
                if ((results = $input.regula('validate')).length) {
                  for (k = 0; k < results.length; k++) {
                    errors++;
                    $input.siblings(".form-validation").text(results[k].message).parent().addClass("has-error");
                  }
                } else {
                  $input.siblings(".form-validation").text("").parent().removeClass("has-error");
                }
              }

              if (captcha) {
                if (captcha.length) {
                  return validateReCaptcha(captcha) && errors == 0;
                }
              }

              return errors == 0;
            }
            return true;
          }

          /**
           * RD Input Label
           * @description Enables RD Input Label Plugin
           */

          if (plugins.rdInputLabel.length) {
            plugins.rdInputLabel.RDInputLabel();
          }

          /**
           * Regula
           * @description Enables Regula plugin
           */

          if (plugins.regula.length) {
            attachFormValidator(plugins.regula);
          }

          /**
           * MailChimp Ajax subscription
           */

          if (plugins.mailchimp.length) {
            for (i = 0; i < plugins.mailchimp.length; i++) {
              var $mailchimpItem = $(plugins.mailchimp[i]),
                  $email = $mailchimpItem.find('input[type="email"]');

              // Required by MailChimp
              $mailchimpItem.attr('novalidate', 'true');
              $email.attr('name', 'EMAIL');

              $mailchimpItem.on('submit', $.proxy(function (e) {
                e.preventDefault();

                var $this = this;

                var data = {},
                    url = $this.attr('action').replace('/post?', '/post-json?').concat('&c=?'),
                    dataArray = $this.serializeArray(),
                    $output = $("#" + $this.attr("data-form-output"));

                for (i = 0; i < dataArray.length; i++) {
                  data[dataArray[i].name] = dataArray[i].value;
                }

                $.ajax({
                  data: data,
                  url: url,
                  dataType: 'jsonp',
                  error: function error(resp, text) {
                    $output.html('Server error: ' + text);

                    setTimeout(function () {
                      $output.removeClass("active");
                    }, 4000);
                  },
                  success: function success(resp) {
                    $output.html(resp.msg).addClass('active');

                    setTimeout(function () {
                      $output.removeClass("active");
                    }, 6000);
                  },
                  beforeSend: function beforeSend(data) {
                    // Stop request if builder or inputs are invalide
                    if (isNoviBuilder || !isValidated($this.find('[data-constraints]'))) return false;

                    $output.html('Submitting...').addClass('active');
                  }
                });

                return false;
              }, $mailchimpItem));
            }
          }

          /**
           * Campaign Monitor ajax subscription
           */

          if (plugins.campaignMonitor.length) {
            for (i = 0; i < plugins.campaignMonitor.length; i++) {
              var $campaignItem = $(plugins.campaignMonitor[i]);

              $campaignItem.on('submit', $.proxy(function (e) {
                var data = {},
                    url = this.attr('action'),
                    dataArray = this.serializeArray(),
                    $output = $("#" + plugins.campaignMonitor.attr("data-form-output")),
                    $this = $(this);

                for (i = 0; i < dataArray.length; i++) {
                  data[dataArray[i].name] = dataArray[i].value;
                }

                $.ajax({
                  data: data,
                  url: url,
                  dataType: 'jsonp',
                  error: function error(resp, text) {
                    $output.html('Server error: ' + text);

                    setTimeout(function () {
                      $output.removeClass("active");
                    }, 4000);
                  },
                  success: function success(resp) {
                    $output.html(resp.Message).addClass('active');

                    setTimeout(function () {
                      $output.removeClass("active");
                    }, 6000);
                  },
                  beforeSend: function beforeSend(data) {
                    // Stop request if builder or inputs are invalide
                    if (isNoviBuilder || !isValidated($this.find('[data-constraints]'))) return false;

                    $output.html('Submitting...').addClass('active');
                  }
                });

                return false;
              }, $campaignItem));
            }
          }

          /**
           * RD Mailform
           * @version      3.2.0
           */
          if (plugins.rdMailForm.length) {
            var i,
                j,
                k,
                msg = {
              'MF000': 'Successfully sent!',
              'MF001': 'Recipients are not set!',
              'MF002': 'Form will not work locally!',
              'MF003': 'Please, define email field in your form!',
              'MF004': 'Please, define type of your form!',
              'MF254': 'Something went wrong with PHPMailer!',
              'MF255': 'Aw, snap! Something went wrong.'
            };

            for (i = 0; i < plugins.rdMailForm.length; i++) {
              var $form = $(plugins.rdMailForm[i]),
                  formHasCaptcha = false;

              $form.attr('novalidate', 'novalidate').ajaxForm({
                data: {
                  "form-type": $form.attr("data-form-type") || "contact",
                  "counter": i
                },
                beforeSubmit: function beforeSubmit(arr, $form, options) {
                  if (isNoviBuilder) return;

                  var form = $(plugins.rdMailForm[this.extraData.counter]),
                      inputs = form.find("[data-constraints]"),
                      output = $("#" + form.attr("data-form-output")),
                      captcha = form.find('.recaptcha'),
                      captchaFlag = true;

                  output.removeClass("active error success");

                  if (isValidated(inputs, captcha)) {

                    // veify reCaptcha
                    if (captcha.length) {
                      var captchaToken = captcha.find('.g-recaptcha-response').val(),
                          captchaMsg = {
                        'CPT001': 'Please, setup you "site key" and "secret key" of reCaptcha',
                        'CPT002': 'Something wrong with google reCaptcha'
                      };

                      formHasCaptcha = true;

                      $.ajax({
                        method: "POST",
                        url: "bat/reCaptcha.php",
                        data: { 'g-recaptcha-response': captchaToken },
                        async: false
                      }).done(function (responceCode) {
                        if (responceCode !== 'CPT000') {
                          if (output.hasClass("snackbars")) {
                            output.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + captchaMsg[responceCode] + '</span></p>');

                            setTimeout(function () {
                              output.removeClass("active");
                            }, 3500);

                            captchaFlag = false;
                          } else {
                            output.html(captchaMsg[responceCode]);
                          }

                          output.addClass("active");
                        }
                      });
                    }

                    if (!captchaFlag) {
                      return false;
                    }

                    form.addClass('form-in-process');

                    if (output.hasClass("snackbars")) {
                      output.html('<p><span class="icon text-middle fa fa-circle-o-notch fa-spin icon-xxs"></span><span>Sending</span></p>');
                      output.addClass("active");
                    }
                  } else {
                    return false;
                  }
                },
                error: function error(result) {
                  if (isNoviBuilder) return;

                  var output = $("#" + $(plugins.rdMailForm[this.extraData.counter]).attr("data-form-output")),
                      form = $(plugins.rdMailForm[this.extraData.counter]);

                  output.text(msg[result]);
                  form.removeClass('form-in-process');

                  if (formHasCaptcha) {
                    grecaptcha.reset();
                  }
                },
                success: function success(result) {
                  if (isNoviBuilder) return;

                  var form = $(plugins.rdMailForm[this.extraData.counter]),
                      output = $("#" + form.attr("data-form-output")),
                      select = form.find('select');

                  form.addClass('success').removeClass('form-in-process');

                  if (formHasCaptcha) {
                    grecaptcha.reset();
                  }

                  result = result.length === 5 ? result : 'MF255';
                  output.text(msg[result]);

                  if (result === "MF000") {
                    if (output.hasClass("snackbars")) {
                      output.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + msg[result] + '</span></p>');
                    } else {
                      output.addClass("active success");
                    }
                  } else {
                    if (output.hasClass("snackbars")) {
                      output.html(' <p class="snackbars-left"><span class="icon icon-xxs mdi mdi-alert-outline text-middle"></span><span>' + msg[result] + '</span></p>');
                    } else {
                      output.addClass("active error");
                    }
                  }

                  form.clearForm();

                  if (select.length) {
                    select.select2("val", "");
                  }

                  form.find('input, textarea').trigger('blur');

                  setTimeout(function () {
                    output.removeClass("active error success");
                    form.removeClass('success');
                  }, 3500);
                }
              });
            }
          }
        });
      })();
    }
  }]);

  return RDMailForm;
}();

exports.default = RDMailForm;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CopyrightYear = function () {
  function CopyrightYear() {
    _classCallCheck(this, CopyrightYear);

    this.allMethods();
  }

  _createClass(CopyrightYear, [{
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
          copyrightYear: $(".copyright-year")
        };

        /**
         * Initialize All Scripts
         */
        $document.ready(function () {
          var isNoviBuilder = window.xMode;

          /**
          * Copyright Year
          * @description  Evaluates correct copyright year
          */
          if (plugins.copyrightYear.length) {
            plugins.copyrightYear.text(initialDate.getFullYear());
          }
        });
      })();
    }
  }]);

  return CopyrightYear;
}();

exports.default = CopyrightYear;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UIToTop = function () {
  function UIToTop() {
    _classCallCheck(this, UIToTop);

    this.allMethods();
  }

  _createClass(UIToTop, [{
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
            onloadCaptchaCallback;

        /**
         * Initialize All Scripts
         */
        $document.ready(function () {
          var isNoviBuilder = window.xMode;

          /**
           * UI To Top
           * @description Enables ToTop Button
           */
          if (isDesktop && !isNoviBuilder) {
            $().UItoTop({
              easingType: 'easeOutQuart',
              containerClass: 'ui-to-top'
            });
          }
        });
      })();
    }
  }]);

  return UIToTop;
}();

exports.default = UIToTop;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Select2 = function () {
    function Select2() {
        _classCallCheck(this, Select2);

        this.allMethods();
    }

    _createClass(Select2, [{
        key: "allMethods",
        value: function allMethods() {

            (function () {
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

                    selectFilter: $("select")

                };
                $document.ready(function () {
                    var isNoviBuilder = window.xMode;

                    if (plugins.selectFilter.length) {
                        var i;
                        for (i = 0; i < plugins.selectFilter.length; i++) {
                            var select = $(plugins.selectFilter[i]);
                            var selectStyle = 'html-' + select.attr('data-style') + '-select';
                            $html.addClass(selectStyle);
                            select.select2({
                                placeholder: select.attr("data-placeholder") ? select.attr("data-placeholder") : false,
                                minimumResultsForSearch: select.attr("data-minimum-results-search") ? select.attr("data-minimum-results-search") : -1,
                                maximumSelectionSize: 3
                            });
                        }
                    }
                });
            })();
        }
    }]);

    return Select2;
}();

exports.default = Select2;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Swiper = function () {
  function Swiper() {
    _classCallCheck(this, Swiper);

    this.allMethods();
  }

  _createClass(Swiper, [{
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
          swiper: $(".swiper-slider"),
          rdMailForm: $(".rd-mailform")
        };

        /**
         * Initialize All Scripts
         */
        $document.ready(function () {
          var isNoviBuilder = window.xMode;

          /**
           * getSwiperHeight
           * @description  calculate the height of swiper slider basing on data attr
           */
          function getSwiperHeight(object, attr) {
            var val = object.attr("data-" + attr),
                dim;

            if (!val) {
              return undefined;
            }

            dim = val.match(/(px)|(%)|(vh)$/i);

            if (dim.length) {
              switch (dim[0]) {
                case "px":
                  return parseFloat(val);
                case "vh":
                  return $window.height() * (parseFloat(val) / 100);
                case "%":
                  return object.width() * (parseFloat(val) / 100);
              }
            } else {
              return undefined;
            }
          }

          /**
           * toggleSwiperInnerVideos
           * @description  toggle swiper videos on active slides
           */
          function toggleSwiperInnerVideos(swiper) {
            var prevSlide = $(swiper.slides[swiper.previousIndex]),
                nextSlide = $(swiper.slides[swiper.activeIndex]),
                videos,
                videoItems = prevSlide.find("video");

            for (i = 0; i < videoItems.length; i++) {
              videoItems[i].pause();
            }

            videos = nextSlide.find("video");
            if (videos.length) {
              videos.get(0).play();
            }
          }

          // *
          //  * toggleSwiperCaptionAnimation
          //  * @description  toggle swiper animations on active slides

          function toggleSwiperCaptionAnimation(swiper) {
            var prevSlide = $(swiper.container).find("[data-caption-animate]"),
                nextSlide = $(swiper.slides[swiper.activeIndex]).find("[data-caption-animate]"),
                delay,
                duration,
                nextSlideItem,
                prevSlideItem;
            for (i = 0; i < prevSlide.length; i++) {
              prevSlideItem = $(prevSlide[i]);
              prevSlideItem.removeClass("animated").removeClass(prevSlideItem.attr("data-caption-animate")).addClass("not-animated");
            }
            for (i = 0; i < nextSlide.length; i++) {
              nextSlideItem = $(nextSlide[i]);
              delay = nextSlideItem.attr("data-caption-delay");
              duration = nextSlideItem.attr('data-caption-duration');
              var tempFunction = function tempFunction(nextSlideItem, duration) {
                return function () {
                  nextSlideItem.removeClass("not-animated").addClass(nextSlideItem.attr("data-caption-animate")).addClass("animated");
                  if (duration) {
                    nextSlideItem.css('animation-duration', duration + 'ms');
                  }
                };
              };
              setTimeout(tempFunction(nextSlideItem, duration), delay ? parseInt(delay, 10) : 0);
            }
          }

          /**
           * Swiper 3.1.7
           * @description  Enable Swiper Slider
           */
          if (plugins.swiper.length) {
            var i;
            for (i = 0; i < plugins.swiper.length; i++) {
              var s = $(plugins.swiper[i]);
              var pag = s.find(".swiper-pagination").length > 0 ? s.find(".swiper-pagination") : $(s.attr('data-custom-pagination')),
                  next = s.find(".swiper-button-next"),
                  prev = s.find(".swiper-button-prev"),
                  bar = s.find(".swiper-scrollbar"),
                  swiperSlide = s.find(".swiper-slide"),
                  autoplay = true;

              for (j = 0; j < swiperSlide.length; j++) {
                var $this = $(swiperSlide[j]),
                    url;

                if (url = $this.attr("data-slide-bg")) {
                  $this.css({
                    "background-image": "url(" + url + ")",
                    "background-size": "cover"
                  });
                }
              }

              swiperSlide.end().find("[data-caption-animate]").addClass("not-animated").end().swiper({
                autoplay: isNoviBuilder ? null : s.attr('data-autoplay') ? s.attr('data-autoplay') === "false" ? undefined : s.attr('data-autoplay') : 5000,
                direction: s.attr('data-direction') ? s.attr('data-direction') : "horizontal",
                effect: s.attr('data-slide-effect') ? s.attr('data-slide-effect') : "slide",
                speed: s.attr('data-slide-speed') ? s.attr('data-slide-speed') : 600,
                keyboardControl: s.attr('data-keyboard') === "true",
                mousewheelControl: s.attr('data-mousewheel') === "true",
                mousewheelReleaseOnEdges: s.attr('data-mousewheel-release') === "true",
                nextButton: next.length ? next.get(0) : null,
                prevButton: prev.length ? prev.get(0) : null,
                pagination: pag.length ? pag.get(0) : null,
                paginationClickable: pag.length ? s.attr("data-clickable") !== "false" : true,
                paginationBulletRender: pag.length ? s.attr("data-index-bullet") === "true" ? function (swiper, index, className) {
                  return '<span class="' + className + '">' + (index + 1) + '</span>';
                } : null : null,
                scrollbar: bar.length ? bar.get(0) : null,
                scrollbarDraggable: bar.length ? bar.attr("data-draggable") !== "false" : true,
                scrollbarHide: bar.length ? bar.attr("data-draggable") === "false" : false,
                loop: isNoviBuilder ? false : s.attr('data-loop') !== "false",
                simulateTouch: s.attr('data-simulate-touch') && !isNoviBuilder ? s.attr('data-simulate-touch') === "true" : false,
                onTransitionStart: function onTransitionStart(swiper) {
                  toggleSwiperInnerVideos(swiper);
                },
                onTransitionEnd: function onTransitionEnd(swiper) {
                  toggleSwiperCaptionAnimation(swiper);
                },
                onInit: function onInit(swiper) {
                  toggleSwiperInnerVideos(swiper);
                  toggleSwiperCaptionAnimation(swiper);

                  $window.on('resize', function () {
                    swiper.update(true);
                  });
                }
              });

              $window.on("resize", function () {
                var mh = getSwiperHeight(s, "min-height"),
                    h = getSwiperHeight(s, "height");
                if (h) {
                  s.css("height", mh ? mh > h ? mh : h : h);
                }
              }).trigger("resize");
            }
          };

          if (plugins.rdMailForm.length) {
            var i,
                j,
                k,
                msg = {};
          };
        });
      })();
    }
  }]);

  return Swiper;
}();

exports.default = Swiper;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RDNavbar = function () {
    function RDNavbar() {
        _classCallCheck(this, RDNavbar);

        this.allMethods();
    }

    _createClass(RDNavbar, [{
        key: "allMethods",
        value: function allMethods() {

            (function () {
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
                    rdNavbar: $(".rd-navbar"),
                    search: $(".rd-search"),
                    searchResults: $('.rd-search-results')

                };
                $document.ready(function () {
                    var isNoviBuilder = window.xMode;

                    if (plugins.rdNavbar.length) {
                        plugins.rdNavbar.RDNavbar({
                            anchorNav: !isNoviBuilder,
                            stickUpClone: plugins.rdNavbar.attr("data-stick-up-clone") && !isNoviBuilder ? plugins.rdNavbar.attr("data-stick-up-clone") === 'true' : false,
                            responsive: {
                                0: {
                                    stickUp: !isNoviBuilder ? plugins.rdNavbar.attr("data-stick-up") === 'true' : false
                                },
                                768: {
                                    stickUp: !isNoviBuilder ? plugins.rdNavbar.attr("data-sm-stick-up") === 'true' : false
                                },
                                992: {
                                    stickUp: !isNoviBuilder ? plugins.rdNavbar.attr("data-md-stick-up") === 'true' : false
                                },
                                1200: {
                                    stickUp: !isNoviBuilder ? plugins.rdNavbar.attr("data-lg-stick-up") === 'true' : false
                                }
                            },
                            callbacks: {
                                onStuck: function onStuck() {
                                    var navbarSearch = this.$element.find('.rd-search input');
                                    if (navbarSearch) {
                                        navbarSearch.val('').trigger('propertychange');
                                    }
                                },
                                onDropdownOver: function onDropdownOver() {
                                    return !isNoviBuilder;
                                },
                                onUnstuck: function onUnstuck() {
                                    if (this.$clone === null) return;
                                    var navbarSearch = this.$clone.find('.rd-search input');
                                    if (navbarSearch) {
                                        navbarSearch.val('').trigger('propertychange');
                                        navbarSearch.trigger('blur');
                                    }
                                }
                            }
                        });
                        if (plugins.rdNavbar.attr("data-body-class")) {
                            document.body.className += ' ' + plugins.rdNavbar.attr("data-body-class");
                        }
                        var topPanelHeight = plugins.rdNavbar.find('.rd-navbar-top-panel').innerHeight();
                        plugins.rdNavbar.find('.rd-navbar-top-panel').css({
                            'max-height': topPanelHeight
                        });
                    }
                    if (plugins.search.length || plugins.searchResults) {
                        var handler = "bat/rd-search.php";
                        var defaultTemplate = '<h5 class="search_title"><a target="_top" href="#{href}" class="search_link">#{title}</a></h5>' + '<p>...#{token}...</p>' + '<p class="match"><em>Terms matched: #{count} - URL: #{href}</em></p>';
                        var defaultFilter = '*.html';
                        if (plugins.search.length) {
                            plugins.search = $('.' + plugins.search[0].className);
                            for (var i = 0; i < plugins.search.length; i++) {
                                var searchItem = $(plugins.search[i]),
                                    options = {
                                    element: searchItem,
                                    filter: searchItem.attr('data-search-filter') ? searchItem.attr('data-search-filter') : defaultFilter,
                                    template: searchItem.attr('data-search-template') ? searchItem.attr('data-search-template') : defaultTemplate,
                                    live: searchItem.attr('data-search-live') ? searchItem.find('.' + searchItem.attr('data-search-live')) : false,
                                    liveCount: searchItem.attr('data-search-live-count') ? parseInt(searchItem.attr('data-search-live')) : 4,
                                    current: 0,
                                    processed: 0,
                                    timer: {}
                                };
                                if ($('.rd-navbar-search-toggle').length) {
                                    var toggle = $('.rd-navbar-search-toggle');
                                    toggle.on('click', function () {
                                        $html.addClass('rd-search-active');
                                        if (!$(this).hasClass('active')) {
                                            searchItem.find('input').val('').trigger('propertychange');
                                        }
                                    });
                                }
                                if ($('.rd-search-form-close').length) {
                                    var toggle = $('.rd-search-form-close');
                                    toggle.on('click', function () {
                                        $html.removeClass('rd-search-active');
                                        $('.rd-navbar-search').removeClass('active').find($('.rd-navbar-search-toggle')).removeClass('active');
                                    });
                                }
                                if (options.live) {
                                    options.clearHandler = false;
                                    searchItem.find('input').on("keyup input propertychange", $.proxy(function () {
                                        var ctx = this;
                                        this.term = this.element.find('input').val().trim();
                                        this.spin = this.element.find('.input-group-addon');
                                        clearTimeout(ctx.timer);
                                        if (ctx.term.length > 2) {
                                            ctx.timer = setTimeout(liveSearch(ctx), 200);
                                            if (ctx.clearHandler == false) {
                                                ctx.clearHandler = true;
                                                $("body").on("click", function (e) {
                                                    if ($(e.toElement).parents('.rd-search').length == 0) {
                                                        ctx.live.addClass('cleared').html('');
                                                    }
                                                });
                                            }
                                        } else if (ctx.term.length == 0) {
                                            ctx.live.addClass('cleared').html('');
                                        }
                                    }, options, this));
                                }
                                searchItem.on('submit', $.proxy(function () {
                                    $('<input />').attr('type', 'hidden').attr('name', "filter").attr('value', this.filter).appendTo(this.element);
                                    return true;
                                }, options, this));
                            }
                        }
                        if (plugins.searchResults.length) {
                            var regExp = /\?.*s=([^&]+)\&filter=([^&]+)/g;
                            var match = regExp.exec(location.search);
                            if (match != null) {
                                $.get(handler, {
                                    s: decodeURI(match[1]),
                                    dataType: "html",
                                    filter: match[2],
                                    template: defaultTemplate,
                                    live: ''
                                }, function (data) {
                                    plugins.searchResults.html(data);
                                });
                            }
                        }
                    }
                });
            })();
        }
    }]);

    return RDNavbar;
}();

exports.default = RDNavbar;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Wow = function () {
  function Wow() {
    _classCallCheck(this, Wow);

    this.allMethods();
  }

  _createClass(Wow, [{
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
            onloadCaptchaCallback;

        /**
         * Initialize All Scripts
         */
        $document.ready(function () {
          var isNoviBuilder = window.xMode;

          if (isDesktop && $html.hasClass("wow-animation") && $(".wow").length) {
            new WOW({
              boxClass: 'wow',
              animateClass: 'animated',
              offset: 0,
              mobile: false,
              live: true
            }).init();
          }
        });
      })();
    }
  }]);

  return Wow;
}();

exports.default = Wow;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Counter = function () {
    function Counter() {
        _classCallCheck(this, Counter);

        this.allMethods();
    }

    _createClass(Counter, [{
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
                    counter: $(".counter")
                };

                /**
                 * Initialize All Scripts
                 */
                $document.ready(function () {
                    var isNoviBuilder = window.xMode;

                    function isScrolledIntoView(elem) {
                        if (!isNoviBuilder) {
                            return elem.offset().top + elem.outerHeight() >= $window.scrollTop() && elem.offset().top <= $window.scrollTop() + $window.height();
                        } else {
                            return true;
                        }
                    }

                    if (plugins.counter.length) {
                        var i;
                        for (i = 0; i < plugins.counter.length; i++) {
                            var $counterNotAnimated = $(plugins.counter[i]).not('.animated');
                            $document.on("scroll", $.proxy(function () {
                                var $this = this;
                                if (!$this.hasClass("animated") && isScrolledIntoView($this)) {
                                    $this.countTo({
                                        refreshInterval: 40,
                                        from: 0,
                                        to: parseInt($this.text(), 10),
                                        speed: $this.attr("data-speed") || 1000
                                    });
                                    $this.addClass('animated');
                                }
                            }, $counterNotAnimated)).trigger("scroll");
                        }
                    }
                });
            })();
        }
    }]);

    return Counter;
}();

exports.default = Counter;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProgressLinear = function () {
    function ProgressLinear() {
        _classCallCheck(this, ProgressLinear);

        this.allMethods();
    }

    _createClass(ProgressLinear, [{
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
                    progressLinear: $(".progress-linear")
                };

                /**
                 * Initialize All Scripts
                 */
                $document.ready(function () {
                    var isNoviBuilder = window.xMode;

                    /////////////////////////////  
                    function isScrolledIntoView(elem) {
                        if (!isNoviBuilder) {
                            return elem.offset().top + elem.outerHeight() >= $window.scrollTop() && elem.offset().top <= $window.scrollTop() + $window.height();
                        } else {
                            return true;
                        }
                    }

                    /////////////////////////////       
                    if (plugins.progressLinear.length) {
                        for (var i = 0; i < plugins.progressLinear.length; i++) {
                            var progressBar = $(plugins.progressLinear[i]);
                            $window.on("scroll load", $.proxy(function () {
                                var bar = $(this);
                                if (!bar.hasClass('animated-first') && isScrolledIntoView(bar)) {
                                    var end = parseInt($(this).find('.progress-value').text(), 10);
                                    bar.find('.progress-bar-linear').css({
                                        width: end + '%'
                                    });
                                    bar.find('.progress-value').countTo({
                                        refreshInterval: 40,
                                        from: 0,
                                        to: end,
                                        speed: 500
                                    });
                                    bar.addClass('animated-first');
                                }
                            }, progressBar));
                        }
                    }
                });
            })();
        }
    }]);

    return ProgressLinear;
}();

exports.default = ProgressLinear;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProgressBarCircle = function () {
    function ProgressBarCircle() {
        _classCallCheck(this, ProgressBarCircle);

        this.allMethods();
    }

    _createClass(ProgressBarCircle, [{
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
                    circleProgress: $(".progress-bar-circle")
                };

                /**
                 * Initialize All Scripts
                 */
                $document.ready(function () {
                    var isNoviBuilder = window.xMode;

                    function isScrolledIntoView(elem) {
                        if (!isNoviBuilder) {
                            return elem.offset().top + elem.outerHeight() >= $window.scrollTop() && elem.offset().top <= $window.scrollTop() + $window.height();
                        } else {
                            return true;
                        }
                    }

                    if (plugins.circleProgress.length) {
                        var i;
                        for (var i = 0; i < plugins.circleProgress.length; i++) {
                            var circleProgressItem = $(plugins.circleProgress[i]);
                            $document.on("scroll", $.proxy(function () {
                                var $this = $(this);
                                if (!$this.hasClass('animated') && isScrolledIntoView($this)) {
                                    var arrayGradients = $this.attr('data-gradient').split(",");
                                    $this.circleProgress({
                                        value: parseFloat($this.text()),
                                        size: $this.attr('data-size') ? $this.attr('data-size') : 175,
                                        fill: {
                                            gradient: arrayGradients,
                                            gradientAngle: Math.PI / 4
                                        },
                                        startAngle: -Math.PI / 4 * 2,
                                        emptyFill: $this.attr('data-empty-fill') ? $this.attr('data-empty-fill') : "rgb(245,245,245)",
                                        thickness: $this.attr('data-thickness') ? parseInt($this.attr('data-thickness')) : 10
                                    }).on('circle-animation-progress', function (event, progress, stepValue) {
                                        $(this).find('span').text(String(stepValue.toFixed(2)).replace('0.', '').replace('1.', '1'));
                                    });
                                    $this.addClass('animated');
                                }
                            }, circleProgressItem)).trigger("scroll");
                        }
                    }
                });
            })();
        }
    }]);

    return ProgressBarCircle;
}();

exports.default = ProgressBarCircle;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DateCountdown = function () {
    function DateCountdown() {
        _classCallCheck(this, DateCountdown);

        this.allMethods();
    }

    _createClass(DateCountdown, [{
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
                    dateCountdown: $('.DateCountdown')
                };

                /**
                 * Initialize All Scripts
                 */
                $document.ready(function () {
                    var isNoviBuilder = window.xMode;

                    if (plugins.dateCountdown.length) {
                        var i;
                        for (i = 0; i < plugins.dateCountdown.length; i++) {
                            var dateCountdownItem = $(plugins.dateCountdown[i]),
                                time = {
                                "Days": {
                                    "text": "Days",
                                    "show": true,
                                    color: dateCountdownItem.attr("data-circle-color") ? dateCountdownItem.attr("data-circle-color") : "#f9f9f9"
                                },
                                "Hours": {
                                    "text": "Hours",
                                    "show": true,
                                    color: dateCountdownItem.attr("data-circle-color") ? dateCountdownItem.attr("data-circle-color") : "#f9f9f9"
                                },
                                "Minutes": {
                                    "text": "Minutes",
                                    "show": true,
                                    color: dateCountdownItem.attr("data-circle-color") ? dateCountdownItem.attr("data-circle-color") : "#f9f9f9"
                                },
                                "Seconds": {
                                    "text": "Seconds",
                                    "show": true,
                                    color: dateCountdownItem.attr("data-circle-color") ? dateCountdownItem.attr("data-circle-color") : "#f9f9f9"
                                }
                            };
                            dateCountdownItem.TimeCircles({
                                color: dateCountdownItem.attr("data-circle-color") ? dateCountdownItem.attr("data-circle-color") : "rgba(247, 247, 247, 1)",
                                animation: "smooth",
                                bg_width: dateCountdownItem.attr("data-circle-bg-width") ? dateCountdownItem.attr("data-circle-bg-width") : 0.9,
                                circle_bg_color: dateCountdownItem.attr("data-circle-bg") ? dateCountdownItem.attr("data-circle-bg") : "rgba(0, 0, 0, 1)",
                                fg_width: dateCountdownItem.attr("data-circle-width") ? dateCountdownItem.attr("data-circle-width") : 0.02
                            });
                            $(window).on('load resize orientationchange', function () {
                                if (window.innerWidth < 479) {
                                    dateCountdownItem.TimeCircles({
                                        time: {
                                            "Days": {
                                                "text": "Days",
                                                "show": true,
                                                color: dateCountdownItem.attr("data-circle-color") ? dateCountdownItem.attr("data-circle-color") : "#f9f9f9"
                                            },
                                            "Hours": {
                                                "text": "Hours",
                                                "show": true,
                                                color: dateCountdownItem.attr("data-circle-color") ? dateCountdownItem.attr("data-circle-color") : "#f9f9f9"
                                            },
                                            "Minutes": {
                                                "text": "Minutes",
                                                "show": true,
                                                color: dateCountdownItem.attr("data-circle-color") ? dateCountdownItem.attr("data-circle-color") : "#f9f9f9"
                                            },
                                            Seconds: {
                                                "text": "Seconds",
                                                show: false,
                                                color: dateCountdownItem.attr("data-circle-color") ? dateCountdownItem.attr("data-circle-color") : "#f9f9f9"
                                            }
                                        }
                                    }).rebuild();
                                } else if (window.innerWidth < 767) {
                                    dateCountdownItem.TimeCircles({
                                        time: {
                                            "Days": {
                                                "text": "Days",
                                                "show": true,
                                                color: dateCountdownItem.attr("data-circle-color") ? dateCountdownItem.attr("data-circle-color") : "#f9f9f9"
                                            },
                                            "Hours": {
                                                "text": "Hours",
                                                "show": true,
                                                color: dateCountdownItem.attr("data-circle-color") ? dateCountdownItem.attr("data-circle-color") : "#f9f9f9"
                                            },
                                            "Minutes": {
                                                "text": "Minutes",
                                                "show": true,
                                                color: dateCountdownItem.attr("data-circle-color") ? dateCountdownItem.attr("data-circle-color") : "#f9f9f9"
                                            },
                                            Seconds: {
                                                text: '',
                                                show: false,
                                                color: dateCountdownItem.attr("data-circle-color") ? dateCountdownItem.attr("data-circle-color") : "#f9f9f9"
                                            }
                                        }
                                    }).rebuild();
                                } else {
                                    dateCountdownItem.TimeCircles({
                                        time: time
                                    }).rebuild();
                                }
                            });
                        }
                    }
                });
            })();
        }
    }]);

    return DateCountdown;
}();

exports.default = DateCountdown;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Schedule = function () {
  function Schedule() {
    _classCallCheck(this, Schedule);

    this.allMethods();
  }

  _createClass(Schedule, [{
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
          cdScheduleWrap: $(".cd-schedule-wrap")
        };

        /**
         * Initialize All Scripts
         */
        $document.ready(function () {
          var isNoviBuilder = window.xMode;

          function SchedulePlan(element) {
            this.element = element;
            this.timeline = this.element.find('.timeline');
            this.timelineItems = this.timeline.find('li');
            this.timelineItemsNumber = this.timelineItems.length;
            this.timelineStart = getScheduleTimestamp(this.timelineItems.eq(0).text());
            this.timelineUnitDuration = getScheduleTimestamp(this.timelineItems.eq(1).text()) - getScheduleTimestamp(this.timelineItems.eq(0).text());
            this.eventsWrapper = this.element.find('.events');
            this.eventsGroup = this.eventsWrapper.find('.events-group');
            this.singleEvents = this.eventsGroup.find('.single-event');
            this.eventSlotHeight = this.eventsGroup.eq(0).children('.top-info').outerHeight();
            this.modal = this.element.find('.event-modal');
            this.modalHeader = this.modal.find('.header');
            this.modalHeaderBg = this.modal.find('.header-bg');
            this.modalBody = this.modal.find('.body');
            this.modalBodyBg = this.modal.find('.body-bg');
            this.modalMaxWidth = 800;
            this.modalMaxHeight = 480;
            this.animating = false;
            this.initSchedule();
          }

          function getScheduleTimestamp(time) {
            time = time.replace(/ /g, '');
            var timeArray = time.split(':');
            var timeStamp = parseInt(timeArray[0]) * 60 + parseInt(timeArray[1]);
            return timeStamp;
          }

          function checkResize() {
            objSchedulesPlan.forEach(function (element) {
              element.scheduleReset();
            });
            windowResize = false;
          }
          function transformElement(element, value) {
            element.css({
              '-moz-transform': value,
              '-webkit-transform': value,
              '-ms-transform': value,
              '-o-transform': value,
              'transform': value
            });
          }

          function minHeightElement(element) {
            $window.on('resize orientationchange change', function () {
              var currElement = element;
              var elementArr = [];
              var i;
              var maxElement = 0;
              currElement.css('min-height', '0');
              for (i = 0; i < currElement.length; i++) {
                var o = $(currElement[i]);
                elementArr.push(o.innerHeight());
                if (maxElement <= elementArr[i]) {
                  maxElement = elementArr[i];
                }
              }
              currElement.css('min-height', maxElement);
            });
          }
          minHeightElement($('.block-info'));

          if (plugins.cdScheduleWrap.length) {
            var transitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
            var transitionsSupported = $('.csstransitions').length > 0;
            if (!transitionsSupported) transitionEnd = 'noTransition';
            SchedulePlan.prototype.initSchedule = function () {
              this.scheduleReset();
              this.initEvents();
            };
            SchedulePlan.prototype.scheduleReset = function () {
              var mq = this.mq();
              if (mq == 'desktop' && !this.element.hasClass('js-full')) {
                this.eventSlotHeight = this.eventsGroup.eq(0).children('.top-info').outerHeight();
                this.element.addClass('js-full');
                this.placeEvents();
                this.element.hasClass('modal-is-open') && this.checkEventModal();
              } else if (mq == 'mobile' && this.element.hasClass('js-full')) {
                this.element.removeClass('js-full loading');
                this.eventsGroup.children('ul').add(this.singleEvents).removeAttr('style');
                this.eventsWrapper.children('.grid-line').remove();
                this.element.hasClass('modal-is-open') && this.checkEventModal();
              } else if (mq == 'desktop' && this.element.hasClass('modal-is-open')) {
                this.checkEventModal('desktop');
                this.element.removeClass('loading');
              } else {
                this.element.removeClass('loading');
              }
            };
            SchedulePlan.prototype.initEvents = function () {
              var self = this;
              this.singleEvents.each(function () {
                var durationLabel = '<span class="event-date">' + $(this).data('start') + ' - ' + $(this).data('end') + '</span>';
                $(this).find('.this-time').prepend($(durationLabel));
                $(this).on('click', 'a', function (event) {
                  event.preventDefault();
                  if (!self.animating) self.openModal($(this));
                });
              });
              this.modal.on('click', '.close', function (event) {
                event.preventDefault();
                if (!self.animating) self.closeModal(self.eventsGroup.find('.selected-event'));
              });
              this.element.on('click', '.cover-layer', function (event) {
                if (!self.animating && self.element.hasClass('modal-is-open')) self.closeModal(self.eventsGroup.find('.selected-event'));
              });
            };
            SchedulePlan.prototype.placeEvents = function () {
              var self = this;
              this.singleEvents.each(function () {
                var start = getScheduleTimestamp($(this).attr('data-start')),
                    duration = getScheduleTimestamp($(this).attr('data-end')) - start;
                var eventTop = self.eventSlotHeight * (start - self.timelineStart) / self.timelineUnitDuration,
                    eventHeight = self.eventSlotHeight * duration / self.timelineUnitDuration;
                $(this).css({
                  top: eventTop - 1 + 'px',
                  height: eventHeight + 1 + 'px'
                });
              });
              this.element.removeClass('loading');
            };
            SchedulePlan.prototype.openModal = function (event) {
              var self = this;
              var mq = self.mq();
              this.animating = true;
              this.modalHeader.find('.event-name').text(event.find('.event-name').text());
              this.modalHeader.find('.event-place').text(event.find('.event-place').text());
              this.modalHeader.find('.event-date').text(event.find('.event-date').text());
              this.modalHeader.find('.event-content').text(event.find('.event-content').text());
              this.modal.attr('data-event', event.parent().attr('data-event'));
              this.modalBody.find('.event-info').text(event.find('.event-info').text()).addClass('content-loaded');
              self.element.addClass('content-loaded');
              this.element.addClass('modal-is-open');
              setTimeout(function () {
                event.parent('li').addClass('selected-event');
              }, 10);
              if (mq == 'mobile') {
                self.modal.one(transitionEnd, function () {
                  self.modal.off(transitionEnd);
                  self.animating = false;
                });
              } else {
                var eventTop = event.offset().top - $(window).scrollTop(),
                    eventLeft = event.offset().left,
                    eventHeight = event.innerHeight(),
                    eventWidth = event.innerWidth();
                var windowWidth = $(window).width(),
                    windowHeight = $(window).height();
                var modalWidth = windowWidth * .8 > self.modalMaxWidth ? self.modalMaxWidth : windowWidth * .8,
                    modalHeight = windowHeight * .8 > self.modalMaxHeight ? self.modalMaxHeight : windowHeight * .8;
                var modalTranslateX = parseInt((windowWidth - modalWidth) / 2 - eventLeft),
                    modalTranslateY = parseInt((windowHeight - modalHeight) / 2 - eventTop);
                var HeaderBgScaleY = modalHeight / eventHeight,
                    BodyBgScaleX = modalWidth - eventWidth;
                self.modal.css({
                  top: eventTop + 'px',
                  left: eventLeft + 'px',
                  height: modalHeight + 'px',
                  width: modalWidth + 'px'
                });
                transformElement(self.modal, 'translateY(' + modalTranslateY + 'px) translateX(' + modalTranslateX + 'px)');
                self.modalHeader.css({
                  width: eventWidth + 'px'
                });
                self.modalBody.css({
                  marginLeft: eventWidth + 'px'
                });
                self.modalBodyBg.css({
                  height: eventHeight + 'px',
                  width: '1px'
                });
                transformElement(self.modalBodyBg, 'scaleY(' + HeaderBgScaleY + ') scaleX(' + BodyBgScaleX + ')');
                self.modalHeaderBg.css({
                  height: eventHeight + 'px',
                  width: eventWidth + 'px'
                });
                transformElement(self.modalHeaderBg, 'scaleY(' + HeaderBgScaleY + ')');
                self.modalHeaderBg.one(transitionEnd, function () {
                  self.modalHeaderBg.off(transitionEnd);
                  self.animating = false;
                  self.element.addClass('animation-completed');
                });
              }
              if (!transitionsSupported) self.modal.add(self.modalHeaderBg).trigger(transitionEnd);
            };
            SchedulePlan.prototype.closeModal = function (event) {
              var self = this;
              var mq = self.mq();
              this.animating = true;
              if (mq == 'mobile') {
                this.element.removeClass('modal-is-open');
                this.modal.one(transitionEnd, function () {
                  self.modal.off(transitionEnd);
                  self.animating = false;
                  self.element.removeClass('content-loaded');
                  event.removeClass('selected-event');
                });
              } else {
                var eventTop = event.offset().top - $(window).scrollTop(),
                    eventLeft = event.offset().left,
                    eventHeight = event.innerHeight(),
                    eventWidth = event.innerWidth();
                var modalTop = Number(self.modal.css('top').replace('px', '')),
                    modalLeft = Number(self.modal.css('left').replace('px', ''));
                var modalTranslateX = eventLeft - modalLeft,
                    modalTranslateY = eventTop - modalTop;
                self.element.removeClass('animation-completed modal-is-open');
                this.modal.css({
                  width: eventWidth + 'px',
                  height: eventHeight + 'px'
                });
                transformElement(self.modal, 'translateX(' + modalTranslateX + 'px) translateY(' + modalTranslateY + 'px)');
                transformElement(self.modalBodyBg, 'scaleX(0) scaleY(1)');
                transformElement(self.modalHeaderBg, 'scaleY(1)');
                this.modalHeaderBg.one(transitionEnd, function () {
                  self.modalHeaderBg.off(transitionEnd);
                  self.modal.addClass('no-transition');
                  setTimeout(function () {
                    self.modal.add(self.modalHeader).add(self.modalBody).add(self.modalHeaderBg).add(self.modalBodyBg).attr('style', '');
                  }, 10);
                  setTimeout(function () {
                    self.modal.removeClass('no-transition');
                  }, 20);
                  self.animating = false;
                  self.element.removeClass('content-loaded');
                  event.removeClass('selected-event');
                });
              }
              if (!transitionsSupported) self.modal.add(self.modalHeaderBg).trigger(transitionEnd);
            };
            SchedulePlan.prototype.mq = function () {
              var self = this;
              return window.getComputedStyle(this.element.get(0), '::before').getPropertyValue('content').replace(/["']/g, '');
            };
            SchedulePlan.prototype.checkEventModal = function (device) {
              this.animating = true;
              var self = this;
              var mq = this.mq();
              if (mq == 'mobile') {
                self.modal.add(self.modalHeader).add(self.modalHeaderBg).add(self.modalBody).add(self.modalBodyBg).attr('style', '');
                self.modal.removeClass('no-transition');
                self.animating = false;
              } else if (mq == 'desktop' && self.element.hasClass('modal-is-open')) {
                self.modal.addClass('no-transition');
                self.element.addClass('animation-completed');
                var event = self.eventsGroup.find('.selected-event');
                var eventTop = event.offset().top - $(window).scrollTop(),
                    eventLeft = event.offset().left,
                    eventHeight = event.innerHeight(),
                    eventWidth = event.innerWidth();
                var windowWidth = $(window).width(),
                    windowHeight = $(window).height();
                var modalWidth = windowWidth * .8 > self.modalMaxWidth ? self.modalMaxWidth : windowWidth * .8,
                    modalHeight = windowHeight * .8 > self.modalMaxHeight ? self.modalMaxHeight : windowHeight * .8;
                var HeaderBgScaleY = modalHeight / eventHeight,
                    BodyBgScaleX = modalWidth - eventWidth;
                setTimeout(function () {
                  self.modal.css({
                    width: modalWidth + 'px',
                    height: modalHeight + 'px',
                    top: windowHeight / 2 - modalHeight / 2 + 'px',
                    left: windowWidth / 2 - modalWidth / 2 + 'px'
                  });
                  transformElement(self.modal, 'translateY(0) translateX(0)');
                  self.modalBodyBg.css({
                    height: modalHeight + 'px',
                    width: '1px'
                  });
                  transformElement(self.modalBodyBg, 'scaleX(' + BodyBgScaleX + ')');
                  self.modalHeader.css({
                    width: eventWidth + 'px'
                  });
                  self.modalBody.css({
                    marginLeft: eventWidth + 'px'
                  });
                  self.modalHeaderBg.css({
                    height: eventHeight + 'px',
                    width: eventWidth + 'px'
                  });
                  transformElement(self.modalHeaderBg, 'scaleY(' + HeaderBgScaleY + ')');
                }, 10);
                setTimeout(function () {
                  self.modal.removeClass('no-transition');
                  self.animating = false;
                }, 20);
              }
            };
            var schedules = $('.cd-schedule');
            var objSchedulesPlan = [],
                windowResize = false;
            if (schedules.length > 0) {
              schedules.each(function () {
                objSchedulesPlan.push(new SchedulePlan($(this)));
              });
            }
            $(window).on('resize', function () {
              if (!windowResize) {
                windowResize = true;
                !window.requestAnimationFrame ? setTimeout(checkResize) : window.requestAnimationFrame(checkResize);
              }
            });
            $(window).keyup(function (event) {
              if (event.keyCode == 27) {
                objSchedulesPlan.forEach(function (element) {
                  element.closeModal(element.eventsGroup.find('.selected-event'));
                });
              }
            });
            var timeLineWrap = $('.cd-schedule-wrap'),
                timeLineDataClasesArr = [],
                timeLineList = $('.timeline-list'),
                timeLineListItem = $('.timeline-list li'),
                timeListNav = $('.timeline-list-nav');
            timeLineList.find('li').each(function () {
              timeLineDataClasesArr.push($(this).attr('data-event'));
            });
            timeLineList.find('li').click(function () {
              $(this).parents('.time-table-header').removeClass('active');
              timeLineListItem.removeClass('active');
              $(this).addClass('active');
              var dataHref = $(this).attr('data-event');
              timeLineWrap.removeClass(function () {
                for (var i = 0; i < timeLineDataClasesArr.length; i++) {
                  $(this).removeClass(timeLineDataClasesArr[i]);
                }
              });
              timeLineWrap.addClass(dataHref);
            });
            timeListNav.find('.prev').click(function () {
              timeLineListItem.each(function (index) {
                if ($(this).hasClass('active') && index >= 1) {
                  $(this).removeClass('active');
                  var prevElement = $(this).prev();
                  var dataHrefPrevElement = $(this).prev().attr('data-event');
                  prevElement.addClass('active');
                  timeLineWrap.removeClass(function () {
                    for (var i = 0; i < timeLineDataClasesArr.length; i++) {
                      $(this).removeClass(timeLineDataClasesArr[i]);
                    }
                  });
                  timeLineWrap.addClass(dataHrefPrevElement);
                }
              });
            });
            var timneListArr = [];
            var nextIndex;
            var dataNextHref;
            timeLineListItem.each(function (index, value) {
              timneListArr.push(value);
            });
            timeListNav.find('.next').click(function () {
              timeLineListItem.each(function (index) {
                if ($(this).hasClass('active')) {
                  nextIndex = index + 1;
                }
              });
              dataNextHref = $(timneListArr[nextIndex]).attr('data-event');
              if (nextIndex < timneListArr.length) {
                timeLineListItem.removeClass('active');
                $(timneListArr[nextIndex]).addClass('active');
                timeLineWrap.removeClass(function () {
                  for (var i = 0; i < timeLineDataClasesArr.length; i++) {
                    $(this).removeClass(timeLineDataClasesArr[i]);
                  }
                });
                timeLineWrap.addClass(dataNextHref);
              }
            });
          };
          $window.on('resize', function () {
            var dividerHead = $('.heading-with-aside-divider');
            var bodyLineHieght = parseInt(dividerHead.css('line-height'), 10);
            bodyLineHieght = bodyLineHieght / 2;
            dividerHead.find('.divider').css({
              'position': 'relative',
              'top': bodyLineHieght
            });
          });
        });
        if (isIE) {
          $('.button').each(function () {
            var crrHeight = $(this).innerHeight();
            $(this).css({
              height: crrHeight
            });
          });
        }
        if ($('.list-marked')) {
          $('.list-marked .link-default').each(function () {
            $(this).hover(function () {
              $(this).parent().css({
                'left': '6px'
              });
            }, function () {
              $(this).parent().css({
                'left': '0px'
              });
            });
          });
        }
      })();
    }
  }]);

  return Schedule;
}();

exports.default = Schedule;

/***/ })
/******/ ]);