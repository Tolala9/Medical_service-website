class DateCountdown{

	constructor() {
		this.allMethods();  
	}




  allMethods() {

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
    dateCountdown: $('.DateCountdown'),
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
                $(window).on('load resize orientationchange', function() {
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




 }());

  }
}

export default DateCountdown;