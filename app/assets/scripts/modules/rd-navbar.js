class RDNavbar{

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
            rdNavbar: $(".rd-navbar"),
            search: $(".rd-search"),
            searchResults: $('.rd-search-results')
            
        };
        $document.ready(function() {
            var isNoviBuilder = window.xMode;


            if (plugins.rdNavbar.length) {
                plugins.rdNavbar.RDNavbar({
                    anchorNav: !isNoviBuilder,
                    stickUpClone: (plugins.rdNavbar.attr("data-stick-up-clone") && !isNoviBuilder) ? plugins.rdNavbar.attr("data-stick-up-clone") === 'true' : false,
                    responsive: {
                        0: {
                            stickUp: (!isNoviBuilder) ? plugins.rdNavbar.attr("data-stick-up") === 'true' : false
                        },
                        768: {
                            stickUp: (!isNoviBuilder) ? plugins.rdNavbar.attr("data-sm-stick-up") === 'true' : false
                        },
                        992: {
                            stickUp: (!isNoviBuilder) ? plugins.rdNavbar.attr("data-md-stick-up") === 'true' : false
                        },
                        1200: {
                            stickUp: (!isNoviBuilder) ? plugins.rdNavbar.attr("data-lg-stick-up") === 'true' : false
                        }
                    },
                    callbacks: {
                        onStuck: function() {
                            var navbarSearch = this.$element.find('.rd-search input');
                            if (navbarSearch) {
                                navbarSearch.val('').trigger('propertychange');
                            }
                        },
                        onDropdownOver: function() {
                            return !isNoviBuilder;
                        },
                        onUnstuck: function() {
                            if (this.$clone === null)
                                return;
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
                var defaultTemplate = '<h5 class="search_title"><a target="_top" href="#{href}" class="search_link">#{title}</a></h5>' +
                '<p>...#{token}...</p>' +
                '<p class="match"><em>Terms matched: #{count} - URL: #{href}</em></p>';
                var defaultFilter = '*.html';
                if (plugins.search.length) {
                    plugins.search = $('.' + plugins.search[0].className);
                    for (var i = 0; i < plugins.search.length; i++) {
                        var searchItem = $(plugins.search[i]),
                        options = {
                            element: searchItem,
                            filter: (searchItem.attr('data-search-filter')) ? searchItem.attr('data-search-filter') : defaultFilter,
                            template: (searchItem.attr('data-search-template')) ? searchItem.attr('data-search-template') : defaultTemplate,
                            live: (searchItem.attr('data-search-live')) ? (searchItem.find('.' + searchItem.attr('data-search-live'))) : false,
                            liveCount: (searchItem.attr('data-search-live-count')) ? parseInt(searchItem.attr('data-search-live')) : 4,
                            current: 0,
                            processed: 0,
                            timer: {}
                        };
                        if ($('.rd-navbar-search-toggle').length) {
                            var toggle = $('.rd-navbar-search-toggle');
                            toggle.on('click', function() {
                                $html.addClass('rd-search-active');
                                if (!($(this).hasClass('active'))) {
                                    searchItem.find('input').val('').trigger('propertychange');
                                }
                            });
                        }
                        if ($('.rd-search-form-close').length) {
                            var toggle = $('.rd-search-form-close');
                            toggle.on('click', function() {
                                $html.removeClass('rd-search-active');
                                $('.rd-navbar-search').removeClass('active').find($('.rd-navbar-search-toggle')).removeClass('active');
                            })
                        }
                        if (options.live) {
                            options.clearHandler = false;
                            searchItem.find('input').on("keyup input propertychange", $.proxy(function() {
                                var ctx = this;
                                this.term = this.element.find('input').val().trim();
                                this.spin = this.element.find('.input-group-addon');
                                clearTimeout(ctx.timer);
                                if (ctx.term.length > 2) {
                                    ctx.timer = setTimeout(liveSearch(ctx), 200);
                                    if (ctx.clearHandler == false) {
                                        ctx.clearHandler = true;
                                        $("body").on("click", function(e) {
                                            if ($(e.toElement).parents('.rd-search').length == 0) {
                                                ctx.live.addClass('cleared').html('');
                                            }
                                        })
                                    }
                                } else if (ctx.term.length == 0) {
                                    ctx.live.addClass('cleared').html('');
                                }
                            }, options, this));
                        }
                        searchItem.on('submit', $.proxy(function() {
                            $('<input />').attr('type', 'hidden').attr('name', "filter").attr('value', this.filter).appendTo(this.element);
                            return true;
                        }, options, this))
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
                        }, function(data) {
                            plugins.searchResults.html(data);
                        })
                    }
                }
            }


        });


}());

}
}











export default RDNavbar;