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

	
	


	
	//Parallax
	
	$(document).ready(function(){
			$('.parallax-home').parallax("50%", 0.4);
			$('.parallax-1').parallax("50%", 0.4);
			$('.parallax-2').parallax("50%", 0.4);
			$('.parallax-3').parallax("50%", 0.4);
			$('.parallax-4').parallax("50%", 0.4);
			$('.parallax-5').parallax("50%", 0.4);
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
			
			var g='<div class="map-tooltip"><h6>Hypnos</h6><p>Checking out our office too?</p></div>',a=new google.maps.InfoWindow({content:g})
			,t=new google.maps.MarkerImage("images/map-pin.png",new google.maps.Size(40,70),
			new google.maps.Point(0,0),new google.maps.Point(20,55)),
			i=new google.maps.LatLng(44.789511,20.43633),
			p=new google.maps.Marker({position:i,map:n,icon:t,zIndex:3});
			google.maps.event.addListener(p,"click",function(){a.open(n,p)}),
			$(".button-map").click(function(){$("#google_map").slideToggle(300,function(){google.maps.event.trigger(n,"resize"),n.setCenter(e)}),
			$(this).toggleClass("close-map show-map")});

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
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





	