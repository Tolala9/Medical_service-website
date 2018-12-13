/**
 * @module       RD Navbar
 * @author       Evgeniy Gusarov
 * @see          https://ua.linkedin.com/pub/evgeniy-gusarov/8a/a40/54a
 * @version      2.2.4
 */
(function(){var k="ontouchstart"in window;(function(c,n,h){var m=function(){function b(a,e){this.options=c.extend(!1,{},this.Defaults,e);this.$element=c(a);this.$clone=null;this.$win=c(h);this.$doc=c(n);this.currentLayout=this.options.layout;this.loaded=!1;this.focusOnHover=this.options.focusOnHover;this.isStuck=this.cloneTimer=this.focusTimer=!1;this.initialize()}b.prototype.Defaults={layout:"rd-navbar-static",deviceLayout:"rd-navbar-fixed",focusOnHover:!0,focusOnHoverTimeout:800,linkedElements:["html"],
  domAppend:!0,stickUp:!0,stickUpClone:!0,stickUpOffset:"100%",anchorNav:!0,anchorNavSpeed:400,anchorNavOffset:0,anchorNavEasing:"swing",autoHeight:!0,responsive:{0:{layout:"rd-navbar-fixed",deviceLayout:"rd-navbar-fixed",focusOnHover:!1,stickUp:!1},992:{layout:"rd-navbar-static",deviceLayout:"rd-navbar-static",focusOnHover:!0,stickUp:!0}},callbacks:{onToggleSwitch:!1,onToggleClose:!1,onDomAppend:!1,onDropdownOver:!1,onDropdownOut:!1,onDropdownToggle:!1,onDropdownClose:!1,onStuck:!1,onUnstuck:!1,onAnchorChange:!1}};
  b.prototype.initialize=function(){this.$element.addClass("rd-navbar").addClass(this.options.layout);k&&this.$element.addClass("rd-navbar--is-touch");this.setDataAPI(this);this.options.domAppend&&this.createNav(this);this.options.stickUpClone&&this.createClone(this);this.$element.addClass("rd-navbar-original");this.addAdditionalClassToToggles(".rd-navbar-original","toggle-original","toggle-original-elements");this.applyHandlers(this);this.offset=this.$element.offset().top;this.height=this.$element.outerHeight();
    this.loaded=!0;return this};b.prototype.resize=function(a,e){var f=k?a.getOption("deviceLayout"):a.getOption("layout");var d=a.$element.add(a.$clone);f===a.currentLayout&&a.loaded||(a.switchClass(d,a.currentLayout,f),null!=a.options.linkedElements&&c.grep(a.options.linkedElements,function(e,c){return a.switchClass(e,a.currentLayout+"-linked",f+"-linked")}),a.currentLayout=f);a.focusOnHover=a.getOption("focusOnHover");return a};b.prototype.stickUp=function(a,e){var f=a.getOption("stickUp");if(c("html").hasClass("ios")||
    a.$element.hasClass("rd-navbar-fixed"))f=!1;var d=a.$doc.scrollTop();var g=null!=a.$clone?a.$clone:a.$element;var b=a.getOption("stickUpOffset");b="string"===typeof b?0<b.indexOf("%")?parseFloat(b)*a.height/100:parseFloat(b):b;if(f){if(d>=b&&!a.isStuck||d<b&&a.isStuck)if(a.$element.add(a.$clone).find("[data-rd-navbar-toggle]").each(function(){c.proxy(a.closeToggle,this)(a,!1)}).end().find(".rd-navbar-submenu").removeClass("opened").removeClass("focus"),d>=b&&!a.isStuck&&!a.$element.hasClass("rd-navbar-fixed"))a.options.callbacks.onStuck&&
  a.options.callbacks.onStuck.call(a),setTimeout(function(){"resize"===e.type?a.switchClass(g,"","rd-navbar--is-stuck"):g.addClass("rd-navbar--is-stuck");a.isStuck=!0},navigator.platform.match(/(Mac)/i)?10:0);else{if("resize"===e.type)a.switchClass(g,"rd-navbar--is-stuck","");else g.removeClass("rd-navbar--is-stuck").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",c.proxy(a.resizeWrap,a,e));a.isStuck=!1;a.options.callbacks.onUnstuck&&a.options.callbacks.onUnstuck.call(a)}}else a.$element.find(".rd-navbar-submenu").removeClass("opened").removeClass("focus"),
  a.isStuck&&(a.switchClass(g,"rd-navbar--is-stuck",""),a.isStuck=!1,a.resizeWrap(e));return a};b.prototype.resizeWrap=function(a){if(null==this.$clone&&!this.isStuck){var e=this.$element.parent();if(this.getOption("autoHeight"))return this.height=this.$element.outerHeight(),"resize"===a.type?(e.addClass("rd-navbar--no-transition").css("height",this.height),e[0].offsetHeight,e.removeClass("rd-navbar--no-transition")):e.css("height",this.height);e.css("height","auto")}};b.prototype.createNav=function(a){a.$element.find(".rd-navbar-dropdown, .rd-navbar-megamenu").each(function(){var a=
    c(this);this.getBoundingClientRect();return a.hasClass("rd-navbar-megamenu")?a.parent().addClass("rd-navbar--has-megamenu"):a.parent().addClass("rd-navbar--has-dropdown")}).parents("li").addClass("rd-navbar-submenu");c('<span class="rd-navbar-submenu-toggle"></span>').insertAfter(".rd-navbar-nav li.rd-navbar-submenu > a");a.options.callbacks.onDomAppend&&a.options.callbacks.onDomAppend.call(this);return a};b.prototype.createClone=function(a){a.$clone=a.$element.clone().insertAfter(a.$element).addClass("rd-navbar--is-clone");
    a.addAdditionalClassToToggles(".rd-navbar--is-clone","toggle-cloned","toggle-cloned-elements");return a};b.prototype.closeToggle=function(a,e){var f=c(e.target);var d=!1;var g=this.getAttribute("data-rd-navbar-toggle");if(a.options.stickUpClone&&a.isStuck){var b=".toggle-cloned";var l=".toggle-cloned-elements";var h=!f.hasClass("toggle-cloned")}else b=".toggle-original",l=".toggle-original-elements",h=!f.hasClass("toggle-original");e.target!==this&&!f.parents(b+"[data-rd-navbar-toggle]").length&&
  !f.parents(l).length&&g&&h&&(f=c(this).parents("body").find(g).add(c(this).parents(".rd-navbar")[0]),f.each(function(){if(!d)return d=!0===(e.target===this||c.contains(this,e.target))}),d||(f.add(this).removeClass("active"),a.options.callbacks.onToggleClose&&a.options.callbacks.onToggleClose.call(this,a)));return this};b.prototype.switchToggle=function(a,e){var f;e.preventDefault();if(c(this).hasClass("toggle-cloned")){var d=".rd-navbar--is-clone";var g=".toggle-cloned-elements"}else d=".rd-navbar-original",
    g=".toggle-original-elements";if(f=this.getAttribute("data-rd-navbar-toggle"))c(d+" [data-rd-navbar-toggle]").not(this).each(function(){var a;if(a=this.getAttribute("data-rd-navbar-toggle"))return c(this).parents("body").find(d+" "+a+g).add(this).add(-1<c.inArray(".rd-navbar",a.split(/\s*,\s*/i))?c(this).parents("body")[0]:!1).removeClass("active")}),c(this).parents("body").find(d+" "+f+g).add(this).add(-1<c.inArray(".rd-navbar",f.split(/\s*,\s*/i))?c(this).parents(".rd-navbar")[0]:!1).toggleClass("active");
    a.options.callbacks.onToggleSwitch&&a.options.callbacks.onToggleSwitch.call(this,a);return this};b.prototype.dropdownOver=function(a,e){if(a.focusOnHover){var f=c(this);clearTimeout(e);if(a.options.callbacks.onDropdownOver&&!a.options.callbacks.onDropdownOver.call(this,a))return this;f.addClass("focus").siblings().removeClass("opened").each(a.dropdownUnfocus)}return this};b.prototype.dropdownTouch=function(a,e){var f=c(this);clearTimeout(e);if(a.focusOnHover){var d=!1;f.hasClass("focus")&&(d=!0);
    if(!d)return f.addClass("focus").siblings().removeClass("opened").each(a.dropdownUnfocus),!1;a.options.callbacks.onDropdownOver&&a.options.callbacks.onDropdownOver.call(this,a)}return this};b.prototype.dropdownOut=function(a,e){if(a.focusOnHover){var f=c(this);f.one("mouseenter.navbar",function(){return clearTimeout(e)});a.options.callbacks.onDropdownOut&&a.options.callbacks.onDropdownOut.call(this,a);clearTimeout(e);e=setTimeout(c.proxy(a.dropdownUnfocus,this,a),a.options.focusOnHoverTimeout)}return this};
  b.prototype.dropdownUnfocus=function(a){c(this).find("li.focus").add(this).removeClass("focus");return this};b.prototype.dropdownClose=function(a,e){if(e.target!==this&&!c(e.target).parents(".rd-navbar-submenu").length){var f=c(this);f.find("li.focus").add(this).removeClass("focus").removeClass("opened");a.options.callbacks.onDropdownClose&&a.options.callbacks.onDropdownClose.call(this,a)}return this};b.prototype.dropdownToggle=function(a){c(this).toggleClass("opened").siblings().removeClass("opened");
    a.options.callbacks.onDropdownToggle&&a.options.callbacks.onDropdownToggle.call(this,a);return this};b.prototype.goToAnchor=function(a,e){var f=this.hash;var d=c(f);if(!a.getOption("anchorNav"))return!1;d.length&&(e.preventDefault(),c("html, body").stop().animate({scrollTop:d.offset().top+a.getOption("anchorNavOffset")+1},a.getOption("anchorNavSpeed"),a.getOption("anchorNavEasing"),function(){return a.changeAnchor(f)}));return this};b.prototype.activateAnchor=function(a){var e=this.$doc.scrollTop();
    var f=this.$win.height();var d=this.$doc.height();a=this.getOption("anchorNavOffset");if(!this.options.anchorNav)return!1;if(e+f>d-50){d=c('[data-type="anchor"]').last();if(d.length&&d.offset().top>=e){var g="#"+d.attr("id");var b=c('.rd-navbar-nav a[href^="'+g+'"]').parent();b.hasClass("active")||(b.addClass("active").siblings().removeClass("active"),this.options.callbacks.onAnchorChange&&this.options.callbacks.onAnchorChange.call(d[0],this))}return d}f=c('.rd-navbar-nav a[href^="#"]').get();for(b in f){d=
      f[b];var h=c(d);g=h.attr("href");d=c(g);d.length&&d.offset().top+a<=e&&d.offset().top+d.outerHeight()>e&&(h.parent().addClass("active").siblings().removeClass("active"),this.options.callbacks.onAnchorChange&&this.options.callbacks.onAnchorChange.call(d[0],this))}return null};b.prototype.getAnchor=function(){return history&&history.state?history.state.id:null};b.prototype.changeAnchor=function(a){history&&(history.state?history.state.id!==a?history.replaceState({anchorId:a},null,a):history.pushState({anchorId:a},
    null,a):history.pushState({anchorId:a},null,a));return this};b.prototype.applyHandlers=function(a){null!=a.options.responsive&&a.$win.on("resize.navbar",c.proxy(a.resize,a.$win[0],a)).on("resize.navbar",c.proxy(a.resizeWrap,a)).on("resize.navbar",c.proxy(a.stickUp,null!=a.$clone?a.$clone:a.$element,a)).on("orientationchange.navbar",c.proxy(a.resize,a.$win[0],a)).trigger("resize.navbar");a.$doc.on("scroll.navbar",c.proxy(a.stickUp,null!=a.$clone?a.$clone:a.$element,a)).on("scroll.navbar",c.proxy(a.activateAnchor,
    a));a.$element.add(a.$clone).find("[data-rd-navbar-toggle]").each(function(){var e=c(this);e.on("click",c.proxy(a.switchToggle,this,a));return e.parents("body").on("click",c.proxy(a.closeToggle,this,a))});a.$element.add(a.$clone).find(".rd-navbar-submenu").each(function(){var e=c(this);var f=e.parents(".rd-navbar--is-clone").length?a.cloneTimer:a.focusTimer;e.on("mouseleave.navbar",c.proxy(a.dropdownOut,this,a,f));e.find("> a").on("mouseenter.navbar",c.proxy(a.dropdownOver,this,a,f));e.find("> a").on("touchstart.navbar",
    c.proxy(a.dropdownTouch,this,a,f));e.find("> .rd-navbar-submenu-toggle").on("click",c.proxy(a.dropdownToggle,this,a));return e.parents("body").on("click",c.proxy(a.dropdownClose,this,a))});a.$element.add(a.$clone).find('.rd-navbar-nav a[href^="#"]').each(function(){return c(this).on("click",c.proxy(a.goToAnchor,this,a))});a.$element.find(".rd-navbar-dropdown, .rd-navbar-megamenu").each(function(){var a=c(this);var f=this.getBoundingClientRect();f.left+a.outerWidth()>=h.innerWidth-10?this.className+=
    " rd-navbar-open-left":10>=f.left-a.outerWidth()&&(this.className+=" rd-navbar-open-right")});return a};b.prototype.switchClass=function(a,e,f){a=a instanceof jQuery?a:c(a);a.addClass("rd-navbar--no-transition").removeClass(e).addClass(f);a[0].offsetHeight;return a.removeClass("rd-navbar--no-transition")};b.prototype.setDataAPI=function(a){var c,f;a="- -xs- -sm- -md- -lg- -xl-".split(" ");var d=[0,480,768,992,1200,1800];var b=c=0;for(f=d.length;c<f;b=++c)this.$element.attr("data"+a[b]+"layout")&&
  (this.options.responsive[d[b]]||(this.options.responsive[d[b]]={}),this.options.responsive[d[b]].layout=this.$element.attr("data"+a[b]+"layout")),this.$element.attr("data"+a[b]+"device-layout")&&(this.options.responsive[d[b]]||(this.options.responsive[d[b]]={}),this.options.responsive[d[b]].deviceLayout=this.$element.attr("data"+a[b]+"device-layout")),this.$element.attr("data"+a[b]+"hover-on")&&(this.options.responsive[d[b]]||(this.options.responsive[d[b]]={}),this.options.responsive[d[b]].focusOnHover=
    "true"===this.$element.attr("data"+a[b]+"hover-on")),this.$element.attr("data"+a[b]+"auto-height")&&(this.options.responsive[d[b]]||(this.options.responsive[d[b]]={}),this.options.responsive[d[b]].autoHeight="true"===this.$element.attr("data"+a[b]+"auto-height")),this.$element.attr("data"+a[b]+"stick-up-offset")&&(this.options.responsive[d[b]]||(this.options.responsive[d[b]]={}),this.options.responsive[d[b]].stickUpOffset=this.$element.attr("data"+a[b]+"stick-up-offset"))};b.prototype.getOption=function(a){var b,
    c;for(b in this.options.responsive)b<=h.innerWidth&&(c=b);return null!=this.options.responsive&&null!=this.options.responsive[c][a]?this.options.responsive[c][a]:this.options[a]};b.prototype.addAdditionalClassToToggles=function(a,b,f){return c(a).find("[data-rd-navbar-toggle]").each(function(){c(this).addClass(b);var d=this.getAttribute("data-rd-navbar-toggle");return c(this).parents("body").find(a).find(d).addClass(f)})};return b}();c.fn.extend({RDNavbar:function(b){var a=c(this);if(!a.data("RDNavbar"))return a.data("RDNavbar",
  new m(this,b))}});return h.RDNavbar=m})(window.jQuery,document,window);"undefined"!==typeof module&&null!==module?module.exports=window.RDNavbar:"function"===typeof define&&define.amd&&define(["jquery"],function(){return window.RDNavbar})}).call(this);

