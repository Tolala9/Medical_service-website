class Select2{

	constructor() {
		this.allMethods();  
	}




  allMethods() {


(function() {
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
        onloadCaptchaCallback, plugins = {
            
            
            selectFilter: $("select")
           
        };
    $document.ready(function() {
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



}());

}
}











export default Select2;