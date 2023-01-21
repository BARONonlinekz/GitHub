// new WOW().init();

$(window).on('load', function () {
   $('.preloader').delay(500).fadeOut();
});

$(function(){
	/* sliders */
	$('.slider').slick({
		autoplay: true,
		autoplaySpeed: 3500,
		speed: 1200,
		arrows: false,
		dots: true,
		draggable: false
	});

	$('.partners__slider').slick({
		autoplay: true,
		autoplaySpeed: 3500,
		speed: 1200,
		arrows: false,
		dots: true,
		draggable: false
	});

	$('.event__slider').slick({
		autoplay: true,
		speed: 800
	});

	$('.cat--unit__for').slick({
		fade: true,
		arrows: false,
		draggable: false,
		asNavFor: '.cat--unit__nav'
	});

	$('.cat--unit__nav').slick({
		autoplay: true,
		slidesToShow: 4,
		arrows: false,
		focusOnSelect: true,
		asNavFor: '.cat--unit__for'
	});

	$('.similar__slider').slick({
		autoplay: true,
		slidesToShow: 5,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	/* sliders */

	$(document).scroll(function(){
		var theTop = $(document).scrollTop();
		if (theTop > 50) {
	    	$('.header').addClass('bg');
	    } else {
	    	$('.header').removeClass('bg');
	    } 
	});

	/* header nav */
	$('.nav--btn').on('click', function(){
		if ($('.nav').is(':visible')) {
			$('.nav').fadeOut();
			$(this).removeClass('open');
		} else {
			$('.nav').fadeIn();
			$(this).addClass('open');
		}
		return false;
	});
	/* header nav */

	/* catalog unit */
	$('.cat--unit__color .show').on('click', function(){
		$(this).hide().siblings('ul').addClass('open');
		return false;
	});

	$('.cat--unit__color li a').on('click', function(){
		$(this).parent().addClass('active').not(this).siblings().removeClass('active');
	    return false;
    });

	$('.cat--unit__total .del').on('click', function(){
 		$(this).parent('.row').detach();
 		return false;
 	});

 	$('.add').on('click', function(){
 		$(this).prev('.row').clone($(this).addClass('added')).insertAfter($(this).prev('.row'));
 		return false;
 	});

 	$('.cat__nav__menu ul li a').on('click', function(){
 		var menu = $(this).attr('href');
 		$('.cat__nav__menu li').removeClass('active');
 		$('.cat__nav__sub--menu').hide();
 		$(this).parent().addClass('active');
 		$('' + menu).show();

 		return false;
 	});

 	$('.cat__nav__btn').on('click', function(){
 		$('.cat__nav__menu').fadeIn();
 		return false;
 	});

 	$('.cat__nav .close, .cat__nav .back').on('click', function(){
 		$(this).parent().fadeOut();
 		return false;
 	})

    $('.cat__accordion .cat__accordion__title').on('click', function(){
        $(this).toggleClass('active').siblings().removeClass('active');
        $(this).next().slideToggle().not(this).siblings('.row').slideUp();
        return false;
    });
	/* catalog unit */


	$('.fancy').fancybox();

	$('input[name="tel"]').inputmask('+7 (999) 999-99-99');

	$('.page .btn--up').bind('click.smoothscroll',function (e) {
		$('html, body').animate({scrollTop:0}, 1000);
	});
	$(window).scroll(function(){
        var bo = $(this).scrollTop();
        var a = $(".page .btn--bottom").css('opacity')
		if ( bo >= 200 && a == 0) {$(".page .btn--bottom").stop().animate({'opacity':'1'},400)};
        if ( bo < 200 && a == 1) {$(".page .btn--bottom").stop().animate({'opacity':'0'},400)};
    });

    $('.phones--btn').on('click', function(){
        $('.phones ul').slideDown().addClass('open');
        $('.phones .close').on('click', function(){
            $(this).parent('ul').slideUp();
            return false;
        });
		return false;
	});
});

$(function(){
    var width = $(window).width();
    if (width > 1281) {
        new fullpage('#fullpage', {
            autoScrolling:true, 
            scrollingSpeed: 1800,
            scrollHorizontally: true,
            menu: '.main__nav'
        });
    } else {
        $('.advantages__block__col').removeClass('animated');
    }
});


var open_modal = $('.open--modal'); 
var close = $('.modal .close'); 
var modal = $('.modal'); 
var modalBlock = $('.modal__block')

open_modal.click( function(event){
    event.preventDefault(); 
    var div = $(this).attr('href'); 
    $(div).fadeIn();

 });

 close.click( function(){
    modal.fadeOut(400);
    event.preventDefault(); 
});

$('.val').each(function(){
	$(this).attr('onkeyup', 'validate(this)');
});

function validate(inp) {
    inp.value = inp.value.replace(/[^\d,.]*/g, '')
    .replace(/([,.])[,.]+/g, '$1')
    .replace(/^[^\d]*(\d+([.,]\d{0,5})?).*$/g, '$1');
}


// $(window).on('load', function(){
//     $(function(){
//         if($('.map').length) {
//             ymaps.ready(function () {
//                 var myMap = new ymaps.Map('map', {
//                         center: [43.26690012969473,76.87175524975669],
//                         zoom: 14,
//                     }, {
//                         searchControlProvider: 'yandex#search'
//                     }),
//                     myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
//                         hintContent: ''
//                     }, {
//                         iconLayout: 'default#image',
//                         iconImageHref: '/img/map-icon.png',
//                         iconImageSize: [83, 100],
//                         iconImageOffset: [-40, -100]
//                     });
//                 myMap.geoObjects
//                 .add(myPlacemark)
//                 .add(new ymaps.Placemark([43.2586,76.8704], {
//                     balloonContent: ''
//                 }, {
//                     iconLayout: 'default#image',
//                     iconImageHref: '/img/map-icon.png',
//                     iconImageSize: [83, 100],
//                     iconImageOffset: [-40, -100]
                    
//                 }))
//             });
//         }
//     });
// })