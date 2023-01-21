$(document).ready(function (){
	setTimeout(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 100);
		$(".preloader").fadeOut(function () {
			OnTopLamp();
		});
	}, 2100);

	$('#mobOffer').click(function(){
       $('#offer').modal(); 
    });

	$('.linkToModal').click(function(e){
		e.preventDefault();
		var href = $(this).attr('href');
		$(href).modal();
	});
});

function linkHover(){
    $(".link:nth-child(1)").hover(function() {
        $(".imageShow1").hide();
        $(".imageHide1").show();
}, function(){
       $(".imageShow1").show();
       $(".imageHide1").hide(); 
    });
    $(".link:nth-child(2)").hover(function() {
        $(".imageShow2").hide();
        $(".imageHide2").show();
}, function(){
       $(".imageShow2").show();
       $(".imageHide2").hide(); 
    });
    $(".link:nth-child(3)").hover(function() {
        $(".imageShow3").hide();
        $(".imageHide3").show();
}, function(){
       $(".imageShow3").show();
       $(".imageHide3").hide(); 
    });
    
    $(".modal-block .link:nth-child(1)").hover(function() {
        $(".imageShow1").hide();
        $(".imageHide1").show();
}, function(){
       $(".imageShow1").show();
       $(".imageHide1").hide(); 
    });
    $(".modal-block .link:nth-child(2)").hover(function() {
        $(".imageShow2").hide();
        $(".imageHide2").show();
}, function(){
       $(".imageShow2").show();
       $(".imageHide2").hide(); 
    });
    $(".modal-block .link:nth-child(3)").hover(function() {
        $(".imageShow3").hide();
        $(".imageHide3").show();
}, function(){
       $(".imageShow3").show();
       $(".imageHide3").hide(); 
    });  
    
    $('#sendButton').click(function() {
        $('.form_header .phoneArea').addClass('afterClickColor');
    });
    $('#sendButton2').click(function() {
        $('.form_modal .phoneArea2').addClass('afterClickColor');
    });
    $('#fsend').click(function() {
        $('.form_footer .fphone').addClass('afterClickColor');
    });
    
}
linkHover();
function OnTopLamp() { 
    if($(window).width() >= 622) {
				$($(".header-h, .header-b .left-block,.header-b .right-block, hr")).animate({opacity: 1}, 2400);

            $("#icon-r7").delay(100).animate({opacity:1, bottom:'0px'}, 500, function () {
                $("#icon-r7").delay(100).animate({left: '0px'}, 500, function () {

                $("#icon-l6").delay(100).animate({opacity:1, bottom:'0px'}, 500, function () {
                        $("#icon-l6").delay(100).animate({left: '0px'}, 500);
                });
                $("#icon-r6").delay(100).animate({opacity:1, bottom:'0px'}, 500, function () {
                    $("#icon-r6").delay(100).animate({right: '0px'}, 500);
                });

                setTimeout(function(){
                    $("#icon-l5").delay(100).animate({opacity:1, bottom:'0px'}, 500, function () {
                        $("#icon-l5").delay(100).animate({left: '0px'}, 500);
                    });
                    $("#icon-r5").delay(100).animate({opacity:1, bottom:'0px'}, 500, function () {
                        $("#icon-r5").delay(100).animate({right: '0px'}, 500);
                    });

                }, 500);

                setTimeout(function(){
                $("#icon-l3").delay(100).animate({opacity:1, bottom:'0px'}, 500);
                $("#icon-r3").delay(100).animate({opacity:1, bottom:'0px'}, 500);
                }, 1000);

                setTimeout(function(){
                $("#icon-l4").delay(100).animate({opacity:1, bottom:'0px'}, 500, function () {
                    $("#icon-l4").delay(100).animate({left: '0px'}, 500);
                });
                $("#icon-r4").delay(100).animate({opacity:1, bottom:'0px'}, 500, function () {
                    $("#icon-r4").delay(100).animate({right: '0px'}, 500);
                });
                }, 1500);

                setTimeout(function(){
                $("#icon-l2").delay(100).animate({opacity:1, bottom:'0px'}, 500);
                $("#icon-r2").delay(100).animate({opacity:1, bottom:'0px'}, 500);
                }, 2000);

                setTimeout(function(){
                $("#icon-l1").delay(100).animate({opacity:1, bottom:'0px'}, 500);
                $("#icon-r1").delay(100).animate({opacity:1, bottom:'0px'}, 500);
                }, 2500);

             });
        });


        $(window).mousemove(function(e) {
        	var change;
        	var xpos=e.clientX;var ypos=e.clientY;var left= change*20;
        	var  xpos=xpos;ypos=ypos;
        	$('.papki').css('bottom',((1+(ypos/200))+"%"));
        	$('.papki').css('right',((-9+(xpos/200))+"%"));
        	$('.butylka').css('bottom',((3+(ypos/200))+"%"));
        	$('.butylka').css('left',((15+(xpos/200))+"%"));
        });



        $(window).scroll(function () {
        var topOfWindow = $(window).scrollTop(),
            bottomOfWindow = topOfWindow + $(window).height();

        $('.work .content').each(function () {
            var scrollPos = $(this).offset().top;
            setTimeout(function(){
                
            
            if(scrollPos <= bottomOfWindow && scrollPos >= topOfWindow){
                    $(".circle1").animate({ opacity: 1}, 1200, function () {
                    $(".circle2").animate({opacity: 1}, 1200, function () {
                    $(".circle3").animate({opacity: 1}, 1200, function () {
                    $(".circle4").animate({opacity: 1}, 1200, function () {
                    $(".circle5").animate({opacity: 1}, 1200);
                    });
                    });
                    });
                });
            }
        }, 2000);
        });
    });

    } 
    else {
        $(".circle1").css("opacity", "1");
        $(".circle2").css("opacity", "1");
        $(".circle3").css("opacity", "1");
        $(".circle4").css("opacity", "1");
        $(".circle5").css("opacity", "1");
        $("#icon-l6").css("opacity", "1");
        $("#icon-l5").css("opacity", "1");
        $("#icon-l4").css("opacity", "1");
        $("#icon-l3").css("opacity", "1");
        $("#icon-l2").css("opacity", "1");
        $("#icon-l1").css("opacity", "1");
        $("#icon-r7").css("opacity", "1");
        $("#icon-r6").css("opacity", "1");
        $("#icon-r5").css("opacity", "1");
        $("#icon-r4").css("opacity", "1");
        $("#icon-r3").css("opacity", "1");
        $("#icon-r2").css("opacity", "1");
        $("#icon-r1").css("opacity", "1");
        $(".header-b .left-block").css("opacity", "1");
        $(".header-b .right-block").css("opacity", "1");
    }
    if($(window).width() <= 992) {
        $(".our-work").addClass("container"); 
    }
    if($(window).width() <= 399) {
        $(".web .dot-nav span, .mobile .dot-nav span").addClass("nav-r-r"); 
    }
    $(window).scroll(function(){
      $("#mobOffer").stop().animate({"marginTop": ($(window).scrollTop()) + "px", "marginLeft":($(window).scrollLeft()) + "px"}, "fast" );
        });
    $(window).scroll(function(){
      $("#water").stop().animate({"marginTop": ($(window).scrollTop()) + "px", "marginLeft":($(window).scrollLeft()) + "px"}, "fast" );
        });
}


