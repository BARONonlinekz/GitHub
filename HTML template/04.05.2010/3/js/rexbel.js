/*
  [JS Index]
  
  ---
  
  Template Name: Rexbel - Photography Portfolio Template
  Author:  ex-nihilo
  Version: 1.2
*/


/*
  1. preloader
  2. fadeIn.element
  3. slick slider
    3.1. slick services slider
    3.2. slick fullscreen slideshow
	3.3. slick fullscreen slideshow ZOOM/FADE
  4. owl carousel
    4.1. owl testimonials carousel
	4.2. owl works carousel
  5. magnificPopup
  6. navigation
    6.1. close navigation
    6.2. navigation active state
  7. fullPage
  8. YouTube player
  9. toggle panels
  10. forms
    10.1. contact form
  11. clone function
    11.1. horizontal stripes HOME
    11.2. horizontal stripes SECTIONS
  12. social icons launcher
    12.1. social icons launcher additional CLOSER
  13. skills bar
  14. swiper slider
    14.1. swiper thumbnail slider horizontal thumbs
*/


$(function() {
    "use strict";
	
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
		
        // 2. fadeIn.element
        setTimeout(function() {
            $(".fadeIn-element").delay(600).css({
                display: "none"
            }).fadeIn(800);
        }, 0);
    });
	
    // 3. slick slider
    // 3.1. slick services slider
    $(".slick-services").slick({
        arrows: true,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<i class='slick-prev icon ion-chevron-left'></i>",
        nextArrow: "<i class='slick-next icon ion-chevron-right'></i>",
        fade: false,
        autoplay: false,
        autoplaySpeed: 4000,
        cssEase: "ease",
        speed: 500
    });
    // 3.2. slick fullscreen slideshow
    $(".slick-fullscreen-slideshow").slick({
        arrows: false,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease",
        speed: 1600,
        draggable: true,
        dots: false,
        pauseOnDotsHover: false,
        pauseOnFocus: false,
        pauseOnHover: false
    });
	// 3.3. slick fullscreen slideshow ZOOM/FADE
    $(".slick-fullscreen-slideshow-zoom-fade").slick({
        arrows: false,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<i class='slick-prev icon ion-chevron-left'></i>",
        nextArrow: "<i class='slick-next icon ion-chevron-right'></i>",
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
        speed: 1600,
        draggable: true,
        dots: false,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        pauseOnHover: false
    });
	
    // 4. owl carousel
    // 4.1. owl testimonials carousel
    $("#testimonials-carousel").owlCarousel({
        loop: true,
        center: true,
        items: 1,
        margin: 0,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 4000,
        smartSpeed: 450,
        nav: false
    });
	// 4.2. owl works carousel
    $("#works-page-img-carousel").owlCarousel({
        loop: false,
        center: false,
        items: 3,
        margin: 0,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
			
            1170: {
                items: 3
            }
        }
    });
	
    // 5. magnificPopup
	$(".popup-photo").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
            tPrev: "",
            tNext: "",
            tCounter: "%curr% / %total%"
        },
        removalDelay: 300,
        mainClass: "mfp-fade"
    });
	
    // 6. navigation
    // 6.1. close navigation
    $(".menu-state, .c-btn-services, .c-btn-about, .social-icons-launcher").on("click", function() {
        $("#menu-mobile").removeClass("activated");
        $("#menu-mobile-caller").removeClass("lines-close");
    });
    // 6.2. navigation active state
    $("a.menu-state").on("click", function() {
        $("a.menu-state").removeClass("active");
        $(this).addClass("active");
    });
	
    // 7. fullPage
    $("#fullpage").fullpage({
        anchors: ["home", "about", "services", "works", "contact"],
        navigation: true,
        navigationPosition: "right",
        navigationTooltips: ["Home", "About", "Services", "Works", "Contact"],
        responsiveWidth: 1024,
        autoScrolling: true,
        scrollBar: false,
        afterResponsive: function(isResponsive) {}
    });
	
    // 8. YouTube player
    $("#bgndVideo").YTPlayer();
	
    // 9. toggle panels
    $(".c-btn-services, .c-btn-about").on("click", function() {
        var divClass = $(this).attr("data-id");
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $("." + divClass).addClass("open");
        } else {
            $(this).addClass("open");
            $("." + divClass).addClass("open");
        }
    });
    $(".services-more-launch, .navigation-icon").on("click", function() {
        $(".panel-from-left, .panel-from-right, .panel-overlay-from-left, .panel-overlay-from-right").removeClass("open");
    });
    $(".about-more-launch, .navigation-icon").on("click", function() {
        $(".panel-from-left-about, .panel-from-right-about, .panel-overlay-from-left-about, .panel-overlay-from-right-about").removeClass("open");
    });
	
    // 10. forms
    // 10.1. contact form
    $("form#form").on("submit", function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });
	
    // 11. clone function
    $.fn.duplicate = function(count, cloneEvents, callback) {
        var stack = [],
            el;
        while (count--) {
            el = this.clone(cloneEvents);
            callback && callback.call(el);
            stack.push(el.get()[0]);
        }
        return this.pushStack(stack);
    };
    // 11.1. horizontal stripes HOME
    $("<div class='upper-page'></div>").appendTo(".horizontal-stripes");
    $("<div class='running-teardrop'></div>").duplicate(4).appendTo(".upper-page");
    // 11.2. horizontal stripes SECTIONS
    $("<div class='all-bg-wapper'></div>").appendTo(".horizontal-stripes-sections");
    $("<div class='running-teardrop'></div>").duplicate(4).appendTo(".horizontal-stripes-sections .all-bg-wapper");
	
    // 12. social icons launcher
    $(".social-icons-launcher").on("click", function() {
        if ($(".social-icons-wrapper").hasClass("social-icons-wrapper-reveal-show")) {
            $(".social-icons-wrapper").removeClass("social-icons-wrapper-reveal-show").addClass("social-icons-wrapper-reveal-hide");
			$(".welcome-message").removeClass("welcome-message-reveal-hide").addClass("welcome-message-reveal-show");
        } else {
            $(".social-icons-wrapper").removeClass("social-icons-wrapper-reveal-hide").addClass("social-icons-wrapper-reveal-show");
			$(".welcome-message").addClass("welcome-message-reveal-hide").removeClass("welcome-message-reveal-show");
        }
    });
    // 12.1. social icons launcher additional CLOSER
    $(".navigation-icon, .logo").on("click", function() {
        $(".social-icons-wrapper").removeClass("social-icons-wrapper-reveal-show").addClass("social-icons-wrapper-reveal-hide");
		$(".welcome-message").removeClass("welcome-message-reveal-hide").addClass("welcome-message-reveal-show");
    });
	
    // 13. skills bar
    $(".show-skillbar").appear(function() {
        $(".skillbar").skillBars({
            from: 0,
            speed: 4000,
            interval: 100,
            decimals: 0
        });
    });
	
	// 14. swiper slider
	// 14.1. swiper thumbnail slider horizontal thumbs
    var swipersliderTop = new Swiper(".swiper-slider-top", {
        direction: "vertical",
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        autoplay: 4000,
        speed: 1600,
        spaceBetween: 0,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 1,
        loop: true,
        slideToClickedSlide: true,
        mousewheelControl: false,
        keyboardControl: false
    });
    var swipersliderBottom = new Swiper(".swiper-slider-bottom", {
        direction: "horizontal",
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 1,
        loop: true,
        slideToClickedSlide: true,
        mousewheelControl: false,
        keyboardControl: false
    });
    swipersliderTop.params.control = swipersliderBottom;
    swipersliderBottom.params.control = swipersliderTop;


});