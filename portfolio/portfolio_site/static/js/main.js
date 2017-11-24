/* -----------------------------------
Template:  Royme Portfolio Template
Author: RoyHridoy
Version: 1.0
Design and Developed by: Hridoy Roy

NOTE: This is main js file. All js plugin active & custom js included in this file.

--------------------------------------*/
/*================================================
[  Table of contents  ]
==================================================
01. Menu Bar / Cross menu
02. Top Menu Stick
03. Url Active Class
04. jQuery SlickNav / Onepage Mobile menu
05. jQuery MeanMenu / Multipage Mobile menu
06. SmoothSroll
07. Scrollspy
08. sticky hero area / Screen height
09. Slider
10. Related Item Slider
11. portfolio details slideshow
12. particles
13. Isotope
14. Magnific Popup
15. wow js
16. scroll to top
17. Preloader

======================================
[ End table content ]
======================================*/
(function($) {
    "use strict";

    /****************************
    01. Menu Bar / Cross menu
    *****************************/
    $(".menu-bar").on('click', function() {
        $(this).toggleClass('menu-close');
    });

    $(".menu-bar").on('click', function() {
        $('.mainmenu').toggleClass('menu-open');
    });
    
    $(".mainmenu ul li").has('ul').addClass('parent');


    /*******************
    02. Top Menu Stick
    ********************/
    var sticky_menu = $('#sticker');
    var pos = sticky_menu.position();
    if (sticky_menu.length) {
        var windowpos = sticky_menu.offset().top;
        $(window).on('scroll', function() {
            var windowpos = $(window).scrollTop();
            if (windowpos > pos.top) {
                sticky_menu.addClass('stick');
            } else {
                sticky_menu.removeClass('stick');
            }
        });
    }

    /*******************
    03. Url Active Class
    ********************/
    $(function() {
        var pgurl = window.location.href.substr(window.location.href
            .lastIndexOf("/") + 1);
        $(".mainmenu a").each(function() {
            if ($(this).attr("href") === pgurl || $(this).attr("href") === '')
                $(this).addClass("active");
        })
    });

    /*********** li active class ***********/
    var cururl = window.location.pathname;
    var curpage = cururl.substr(cururl.lastIndexOf('/') + 1);
    var hash = window.location.hash.substr(1);
    if ((curpage === "" || curpage === "/" || curpage === "admin") && hash === "") {
        //$("mainmenu ul > li:first-child").addClass("active");
    } else {
        $(".mainmenu li").each(function() {
            $(this).removeClass("active");
        });
        if (hash != "")
            $(".mainmenu li a[href*='" + hash + "']").parents("li").addClass("active");
        else
            $(".mainmenu li a[href*='" + curpage + "']").parents("li").addClass("active");
    }

    /********************************************
    04. jQuery SlickNav / Onepage Mobile menu
    ********************************************/
    $('.mainmenu').slicknav({
        label: '',
        duration: 700,
        easingOpen: "easeOutBounce",
        prependTo: '#mobileMenu',
        closeOnClick: true
    });

    /********************************************
    05. jQuery MeanMenu / Multipage Mobile menu
    ********************************************/
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "768",
        meanMenuContainer: ".mobile-menu"
    });

    /*******************
    06. SmoothSroll
    ********************/
    $('.smooth, .mainmenu a, .slicknav_nav a').on('click', function(event) {
        var $anchor = $(this);
        var left = $('body div');

        if (left.hasClass('left-side-wrapper')) {
            var headerH = '0';
        } else {
            var headerH = '72';
        }
        $('html, body').stop().animate({
            'scrollTop': $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });

    /*******************
    07. Scrollspy
    ********************/
    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 75
    });

    /********************************************
    08. sticky hero area / Screen height
    ********************************************/
    var HeroHeight = $(".hero-wrapper").height();

    $(".content-wrapper").css('margin-top', HeroHeight + 'px');

    /*******************
    09. Slider
    ********************/
    $(".slider-area, .slider-area-2").owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        autoplay: false,
        loop: true,
        navText: ["<i class='flaticon-back'></i>", "<i class='flaticon-next'></i>"],
        mouseDrag: false,
        touchDrag: false,
    });

    $(".slider-area, .slider-area-2").on("translate.owl.carousel", function() {
        $(".single-slide-item h3, .single-slide-item h2").removeClass("animated fadeInDown").css("opacity", "0");
        $(".single-slide-item p, .single-slide-item .button").removeClass("animated fadeInUp").css("opacity", "0");
    });

    $(".slider-area, .slider-area-2").on("translated.owl.carousel", function() {
        $(".single-slide-item h3, .single-slide-item h2").addClass("animated fadeInDown").css("opacity", "1");
        $(".single-slide-item p, .single-slide-item .button").addClass("animated fadeInUp").css("opacity", "1");
    });

    /*****************************
    10. Related Item Slider
    ******************************/
    $(".related-items").owlCarousel({
        items: 3,
        nav: true,
        dots: false,
        autoplay: false,
        loop: true,
        margin: 5,
        navText: ["<i class='flaticon-back'></i>", "<i class='flaticon-next'></i>"],
        mouseDrag: false,
        touchDrag: false,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
            },
            // breakpoint from 768 up
            768: {
                items: 2,
            },
            // breakpoint from 768 up
            1024: {
                items: 3,
            }
        }
    });

    /***************************************
    11. portfolio details slideshow
    ****************************************/
    $(".item-imgs").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        autoplay: false,
        loop: true,
        margin: 5,
        navText: ["<i class='flaticon-back'></i>", "<i class='flaticon-next'></i>"],
        mouseDrag: false,
        touchDrag: false,
    });


    /*******************
    12. particles
    ********************/
    $('.particle-bg').particleground({
        dotColor: '#fff',
        lineColor: '#fff'
    });

    /*******************
    13. Isotope
    ********************/
    $(".project-filter li").on('click', function() {
        $(".project-filter li").removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');

        $(".project-lists").isotope({
            filter: selector,
            stagger: 50
        });
    });

    /*******************
    14. Magnific Popup
    ********************/
    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /********************
    15. wow js
    ********************/
    new WOW().init();

    /********************
    16. scroll to top
    ********************/
    //Check to see if the window is top if not then display button
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    /********************
    17. Preloader
    ********************/
    $(window).on('load', function() {
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });

        $(".project-lists").isotope();

    });

})(jQuery);


(function ($) {
 "use strict";

$('.menu>li').slice(-2).addClass('last-elements');


  $(window).on('scroll',function() {
   var scroll = $(window).scrollTop();
   if (scroll < 245) {
    $(".header-sticky").removeClass("sticky");
   }else{
    $(".header-sticky").addClass("sticky");
   }
  });


$('.main-menu nav').meanmenu({
	meanScreenWidth: "991",
	meanMenuContainer: '.mobile-menu'
});

$('.grid').imagesLoaded( function() {

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.grid-item',
  }
});



});

$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});


/* slider active  */
$('.slider-active').owlCarousel({
    loop:true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items:1,
    dots:false,
    nav:true,
    navText:['prev','next'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

/* brand-logo-active */
$('.brand-logo-active').owlCarousel({
    loop:true,
    items:5,
    dots:false,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
})

/* portfolio active  */
$('.portfolio-slider').owlCarousel({
    loop:true,
    items:1,
    dots:false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:true,
    navText:['prev','next'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
/* testimonial active  */
$('.testimonial-active').owlCarousel({
    loop:true,
    items:1,
    dots:false,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

/*--
Magnific Popup
------------------------*/
$('.img-poppu').magnificPopup({
    type: 'image',
    gallery:{
        enabled:true
    }
});

/*--
menu-toggle
------------------------*/
$('.menu-toggle').on('click', function(){
	if( $('.menu-toggle').hasClass('is-active') ){
		$('.main-menu nav').removeClass('menu-open');
	}else {
		$('.main-menu nav').addClass('menu-open');
	}
});


/*--
	Hamburger js
-----------------------------------*/
var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function(hamburger) {
	hamburger.addEventListener("click", function() {
	  this.classList.toggle("is-active");
	}, false);
  });
}


/*--------------------------
    scrollUp
    ---------------------------- */
    $(window).on('scroll',function () {
        if($(window).scrollTop()>200) {
            $("#toTop").fadeIn();
        } else {
            $("#toTop").fadeOut();
        }
    });
    $('#toTop').on('click', function() {
        $("html,body").animate({
            scrollTop:0
        }, 500)
    });


    /*---------------------
       Circular Bars - Knob
    --------------------- */
	  if(typeof($.fn.knob) != 'undefined') {
		$('.knob').each(function () {
		  var $this = $(this),
			  knobVal = $this.attr('data-rel');

		  $this.knob({
			'draw' : function () {
			  $(this.i).val(this.cv + '%')
			}
		  });

		  $this.appear(function() {
			$({
			  value: 0
			}).animate({
			  value: knobVal
			}, {
			  duration : 2000,
			  easing   : 'swing',
			  step     : function () {
				$this.val(Math.ceil(this.value)).trigger('change');
			  }
			});
		  }, {accX: 0, accY: -150});
		});
    }


    /*--------------------------
    counterUp
    ---------------------------- */
     $('.count').counterUp({
        delay: 10,
        time: 5000
    });


    /*----------------------------
    youtube video
    ------------------------------ */
    $('.youtube-bg').YTPlayer({
        containment: '.youtube-bg',
        autoPlay: true,
        loop: true,
    });















})(jQuery);