class ProgressBarCircle{

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
                $document.on("scroll", $.proxy(function() {
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
                        }).on('circle-animation-progress', function(event, progress, stepValue) {
                            $(this).find('span').text(String(stepValue.toFixed(2)).replace('0.', '').replace('1.', '1'));
                        });
                        $this.addClass('animated');
                    }
                }, circleProgressItem)).trigger("scroll");
            }
        }

    
  });




 }());

  }
}

export default ProgressBarCircle;