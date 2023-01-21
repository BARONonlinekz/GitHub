(function($) { "use strict";






 
	
		
	//Navigation	

	$('ul.slimmenu').on('click',function(){
		var width = $(window).width(); 
		if ((width <= 800)){ 
			$(this).slideToggle();}	
	});	
	
	$('ul.slimmenu').slimmenu(
	{
		resizeWidth: '800',
		collapserTitle: '',
		easingEffect:'easeInOutQuint',
		animSpeed:'medium',
		indentChildren: true,
		childrenIndenter: '&raquo;'
	});	

	
	//Featured work
	
	  jQuery(function() {
		var film_roll = new FilmRoll({
			container: '#film_roll',
			interval: 3000
		  });
	  });	
	

	//Team
	
	$('.team article').flipcarousel({
		pagination : false,
		loader : true,
		itemsperpage: 4,
		randomizer: 0.7
	});
 
  
	//Counter 
	
    jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            delay: 100,
            time: 2000
        });
    });	

	
	//Parallax
	
	$(document).ready(function(){
			$('.parallax-1').parallax("50%", 0.4);
			$('.parallax-2').parallax("50%", 0.4);
			$('.parallax-3').parallax("50%", 0.1);
	});	
	
	
	//Clients Carousel

	$(document).ready(function() {
	 
	  var sync1 = $("#sync1");
	  var sync2 = $("#sync2");
	 
	  sync1.owlCarousel({
		singleItem : true,
		slideSpeed : 1000,
		navigation: false,
		pagination:false,
		afterAction : syncPosition,
		responsiveRefreshRate : 200
	  });

	  
	  sync2.owlCarousel({
		items : 7,
		itemsDesktop      : [1199,7],
		itemsDesktopSmall     : [979,5],
		itemsTablet       : [768,2],
		itemsMobile       : [479,2],
		pagination:false,
		responsiveRefreshRate : 100,
		afterInit : function(el){
		  el.find(".owl-item").eq(0).addClass("synced");
		}
	  });
	 
	  function syncPosition(el){
		var current = this.currentItem;
		$("#sync2")
		  .find(".owl-item")
		  .removeClass("synced")
		  .eq(current)
		  .addClass("synced")
		if($("#sync2").data("owlCarousel") !== undefined){
		  center(current)
		}
	  }
	 
	  $("#sync2").on("click", ".owl-item", function(e){
		e.preventDefault();
		var number = $(this).data("owlItem");
		sync1.trigger("owl.goTo",number);
	  });
	 
	  function center(number){
		var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
		var num = number;
		var found = false;
		for(var i in sync2visible){
		  if(num === sync2visible[i]){
			var found = true;
		  }
		}
	 
		if(found===false){
		  if(num>sync2visible[sync2visible.length-1]){
			sync2.trigger("owl.goTo", num - sync2visible.length+2)
		  }else{
			if(num - 1 === -1){
			  num = 0;
			}
			sync2.trigger("owl.goTo", num);
		  }
		} else if(num === sync2visible[sync2visible.length-1]){
		  sync2.trigger("owl.goTo", sync2visible[1])
		} else if(num === sync2visible[0]){
		  sync2.trigger("owl.goTo", num-1)
		}
		
	  }
	 
	});	 


	//Portfolio filter 

	$(window).load(function () {
	    var $container = $('.portfolio-wrap');
	    var $filter = $('#filter');
	    // Initialize isotope 
	    $container.isotope({
	        filter: '*',
	        layoutMode: 'fitRows',
	        animationOptions: {
	            duration: 750,
	            easing: 'linear'
	        }
	    });
	    // Filter items when filter link is clicked
	    $filter.find('a').click(function () {
	        var selector = $(this).attr('data-filter');
	        $filter.find('a').removeClass('current');
	        $(this).addClass('current');
	        $container.isotope({
	            filter: selector,
	            animationOptions: {
	                animationDuration: 750,
	                easing: 'linear',
	                queue: false,
	            }
	        });
	        return false;
	    });	
	});


	// Portfolio Isotope
		
	  jQuery(document).ready(function($){  
	  
		var container = $('.portfolio-wrap');	
		
			function splitColumns() { 
				var winWidth = $(window).width(), 
					columnNumb = 1;
				
				
				if (winWidth > 1024) {
					columnNumb = 4;
				} else if (winWidth > 900) {
					columnNumb = 2;
				} else if (winWidth > 479) {
					columnNumb = 2;
				} else if (winWidth < 479) {
					columnNumb = 1;
				}
				
				return columnNumb;
			}		
			
			function setColumns() { 
				var winWidth = $(window).width(), 
					columnNumb = splitColumns(), 
					postWidth = Math.floor(winWidth / columnNumb);
				
				container.find('.portfolio-box').each(function () { 
					$(this).css( { 
						width : postWidth + 'px' 
					});
				});
			}		
			
			function setProjects() { 
				setColumns();
				container.isotope('reLayout');
			}		
			
			container.imagesLoaded(function () { 
				setColumns();
			});
			
		
			$(window).bind('resize', function () { 
				setProjects();			
			});

	});	
	 
	 



	//Responsive video
	
	$(".video-container").fitVids();
	
	//Twitter Carousel

	$(document).ready(function() {
	 
	  var sync1 = $("#sync3");
	  var sync2 = $("#sync4");
	 
	  sync1.owlCarousel({
		singleItem : true,
		slideSpeed : 1000,
		navigation: false,
		pagination:false,
		afterAction : syncPosition,
		responsiveRefreshRate : 200
	  });

	  
	  sync2.owlCarousel({
		items : 4,
		itemsDesktop      : [1199,4],
		itemsDesktopSmall     : [979,4],
		itemsTablet       : [768,2],
		itemsMobile       : [479,2],
		pagination:false,
		responsiveRefreshRate : 100,
		afterInit : function(el){
		  el.find(".owl-item").eq(0).addClass("synced");
		}
	  });
	 
	  function syncPosition(el){
		var current = this.currentItem;
		$("#sync4")
		  .find(".owl-item")
		  .removeClass("synced")
		  .eq(current)
		  .addClass("synced")
		if($("#sync4").data("owlCarousel") !== undefined){
		  center(current)
		}
	  }
	 
	  $("#sync4").on("click", ".owl-item", function(e){
		e.preventDefault();
		var number = $(this).data("owlItem");
		sync1.trigger("owl.goTo",number);
	  });
	 
	  function center(number){
		var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
		var num = number;
		var found = false;
		for(var i in sync2visible){
		  if(num === sync2visible[i]){
			var found = true;
		  }
		}
	 
		if(found===false){
		  if(num>sync2visible[sync2visible.length-1]){
			sync2.trigger("owl.goTo", num - sync2visible.length+2)
		  }else{
			if(num - 1 === -1){
			  num = 0;
			}
			sync2.trigger("owl.goTo", num);
		  }
		} else if(num === sync2visible[sync2visible.length-1]){
		  sync2.trigger("owl.goTo", sync2visible[1])
		} else if(num === sync2visible[0]){
		  sync2.trigger("owl.goTo", num-1)
		}
		
	  }
	 
	});	 
	
	
	//Tooltip

	$(document).ready(function() {
		$(".tipped").tipper();
	});		
	
	
	//Google map

	jQuery(document).ready(function(){
		var e=new google.maps.LatLng(44.789511,20.43633),
			o={zoom:14,center:new google.maps.LatLng(44.789511,20.43633),
			mapTypeId:google.maps.MapTypeId.ROADMAP,
			mapTypeControl:!1,
			scrollwheel:!1,
			draggable:!0,
			navigationControl:!1
		},
			n=new google.maps.Map(document.getElementById("google_map"),o);
			google.maps.event.addDomListener(window,"resize",function(){var e=n.getCenter();
			google.maps.event.trigger(n,"resize"),n.setCenter(e)});
			
			var g='<div class="map-tooltip"><h6>themis</h6><p>Checking out our office too?</p></div>',a=new google.maps.InfoWindow({content:g})
			,t=new google.maps.MarkerImage("images/map-pin.png",new google.maps.Size(40,70),
			new google.maps.Point(0,0),new google.maps.Point(20,55)),
			i=new google.maps.LatLng(44.789511,20.43633),
			p=new google.maps.Marker({position:i,map:n,icon:t,zIndex:3});
			google.maps.event.addListener(p,"click",function(){a.open(n,p)}),
			$(".button-map").click(function(){$("#google_map").slideToggle(300,function(){google.maps.event.trigger(n,"resize"),n.setCenter(e)}),
			$(this).toggleClass("close-map show-map")});

	}); 	
	
	
	
	
	 // Portfolio Ajax

	 
			$(window).load(function() {
			'use strict';		  
			  var loader = $('.expander-wrap');
			if(typeof loader.html() == 'undefined'){
				$('<div class="expander-wrap"><div id="expander-wrap" class="container clearfix relative"><p class="cls-btn"><a class="close">X</a></p><div/></div></div>').css({opacity:0}).hide().insertAfter('.portfolio');
				loader = $('.expander-wrap');
			}
			$('.expander').on('click', function(e){
				e.preventDefault();
				e.stopPropagation();
				var url = $(this).attr('href');



				loader.slideUp(function(){
					$.get(url, function(data){
						var portfolioContainer = $('.portfolio');
						var topPosition = portfolioContainer.offset().top;
						var bottomPosition = topPosition + portfolioContainer.height();
						$('html,body').delay(600).animate({ scrollTop: bottomPosition - -10}, 800);
						var container = $('#expander-wrap>div', loader);
						
						container.html(data);
						$('.project-wrap-slider').flexslider({
							animation: "fade",
							selector: ".slider-project-ajax .slide",
							controlNav: false,
							directionNav: true ,
							slideshowSpeed: 5000,  
						});
						
					
						loader.slideDown(function(){
							if(typeof keepVideoRatio == 'function'){
								keepVideoRatio('.video-container > iframe');
							}
						}).delay(1000).animate({opacity:1}, 200);
					});
				});
			});
			
			$('.close', loader).on('click', function(){
				loader.delay(300).slideUp(function(){
					var container = $('#expander-wrap>div', loader);
					container.html('');
					$(this).css({opacity:0});
					
				});
				var portfolioContainer = $('.portfolio');
					var topPosition = portfolioContainer.offset().top;
					$('html,body').delay(0).animate({ scrollTop: topPosition - 70}, 500);
			});

	});	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
 

	// Switcher CSS 
	  $(document).ready(function() {
	"use strict";
		$("#hide, #show").click(function () {
			if ($("#show").is(":visible")) {
			   
				$("#show").animate({
					"margin-left": "-300px"
				}, 300, function () {
					$(this).hide();
				});
				
				$("#switch").animate({
					"margin-left": "0px"
				}, 300).show();
			} else {
				$("#switch").animate({
					"margin-left": "-300px"
				}, 300, function () {
					$(this).hide();
				});
				$("#show").show().animate({
					"margin-left": "0"
				}, 300);
			}
		});
						  
	});	
	
	
	
	
	
	

	
  })(jQuery); 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





	