$(document).ready(function(){$(window).scroll(function(){if($(this).scrollTop()>$('header .htop').outerHeight(!0)+150){$('.htop2').show()}else if($(this).scrollTop()<$('header .htop').outerHeight(!0)+150){$('.htop2').hide()}})
    window.onerror=myOnError;function myOnError(msg,url,lno){return!0}
    $("body").on("click","#cbtn",function(){var email=$(".email-now").val();var phone=$(".phone-now").val();var keyword=$(".keyword2").val();var link=$(".link").val();var error=0;if((phone==""||email=="")){$(".email-now, .phone-now").css("background","#D66161");error++}
        if(error==0){SendFile(email,phone);SendInfo(email,phone,keyword,link)}});function SendFile(email,phone){$.ajax({type:"POST",url:"send-file.php",data:{email:email,phone:phone},success:function(){$('.cform-block').animate({opacity:0},500,function(){$('.conversion .cform').append('<div class="transform" style="position: absolute;top: 50%;left: 50%;width: 100%;text-align:  center;">На указанную почту отправлено письмо с вложением!</div>')})}})}
    $("body").on("click","#sendMailButton",function(){var email=$(".mail-email").val();var phone=$(".mail-phone").val();var keyword=$(".mail-keyword").val();var link=$(".link").val();var error=0;if((phone==""||email=="")){$(".mail-email, .mail-phone").css("background","#D66161");error++}
        if(error==0){SendFile2(email,phone);SendInfo(email,phone,keyword,link)}});function SendFile2(email,phone){$.ajax({type:"POST",url:"send-file.php",data:{email:email,phone:phone},success:function(){$('.mail-modal ul').animate({opacity:0},500,function(){$('.mail-modal').append('<div class="transform" style="position: absolute;top: 50%;left: 50%;width: 100%;text-align:  center;">На указанную почту отправлено письмо с вложением!</div>')})}})}
    function SendInfo(email,phone,keyword,link){$.ajax({type:"POST",url:"mail2.php",data:{email:email,phone:phone,keyword:keyword,link:link},})}
    $("body").on("click",".wpp-href",function(e){e.preventDefault();var id=$(this).data("id");$('.modal2[data-id='+id+']').fadeIn();$('.wpp-modal-block').css('opacity','1').addClass('animated zoomIn')});$("#topluch1").animate({opacity:1},1500,function(){$("#topluch2").animate({opacity:1},1000,function(){$("#topluch3").animate({opacity:1},1000);$("#topluch1").css("-webkit-animation","leaves 2s ease-in-out infinite alternate","animation","leaves 2s ease-in-out infinite alternate")})});$("body").on("click",".cont-label",function(){var firstq=$('.first-q input[type=radio]:checked').val();var secondq=$('.second-q input[type=radio]:checked').val();var thirdq=$('.third-q input[type=radio]:checked').val();$('.next-btn').css('border','2px solid #60ff00').removeClass('wpulse-button').addClass('pulse-button')});$("body").on("click",".check_input",function(){$('.next-btn2').css('border','2px solid #60ff00').removeClass('wpulse-button').addClass('pulse-button')});$(".game-phone").keyup(function(){var a=$(this).val().length;var val=$(this).val();if(a>=11){$('.next-btn3').css('border','2px solid #60ff00').removeClass('wpulse-button').addClass('pulse-button')}})
    $('body').on("click","#start-btn, .white",function(){$('.lp-center, .lp .title').fadeOut();$('.quiz').fadeOut().promise().done(function(){$('.game-center,.next-btn, .close-btn').fadeIn();$('.first-q .step2-gif').show();setTimeout(function(){afterReveal()},300)});count=0});function afterReveal(){var currentCount=1;var doStuff=function(){$('.queue[data-id='+currentCount+']').animate({opacity:1},50).promise().done(function(){currentCount++;doStuff();if(currentCount==47){$('.first-q .step2-gif').hide();$('.first-q .step3-gif').show()}})};(function loopingFunction(){doStuff()})()}
    $('body').on("click",".check_input",function(e){e.preventDefault();var id=$(this).data("id");if($(".radio"+id+" input:radio").prop('checked')){$(".radio"+id+"  input:radio").prop("checked",!1)}else{$(".radio"+id+"  input:radio").prop("checked",!0)}});var count=0;var time1,time2,time3;$('body').on("click",".next-btn",function(){$('.second-q .step2-gif').show();$('.second-q .step3-gif').hide();if(!($('.quiz1 input:radio').is(':checked'))){$('.check-radio').empty();$('.check-radio').append('Пожалуйста, выберете один из представленных вариантов!')}else{$('.next-btn').hide();$('.next-btn2, .back-btn1, .close-btn').show();$('.check-radio').empty();$('#percent33').css('top','58%');$('#percent33').css('width','75%');$('.first-q').addClass('animated slideOutRight').fadeOut().promise().done(function(){$('.second-q').addClass('animated slideInLeft').fadeIn();$('.first-q').removeClass('slideOutRight')});time1=setInterval(function(){if(count<34){$('.percent').empty().append(count+'%');count++}},35);setTimeout(function(){afterReveal2()},1000)}});function afterReveal2(){var currentCount2=1;var doStuff2=function(){$('.queue2[data-id='+currentCount2+']').animate({opacity:1},50).promise().done(function(){currentCount2++;doStuff2();if(currentCount2==54){$('.second-q .step2-gif').hide();$('.second-q .step3-gif').show()}})};(function loopingFunction(){doStuff2()})()}
    $('body').on("click",".next-btn2",function(){$('.third-q .step2-gif').show();$('.third-q .step3-gif').hide();if(!($('.quiz2 input:radio').is(':checked'))){$('.check-radio').empty();$('.check-radio').append('Пожалуйста, выберете один  из представленных вариантов!')}else{$('.next-btn2, .back-btn1').hide();$('.next-btn3, .back-btn2, .close-btn').show();$('#percent33').css('display','none');$('#percent66').fadeIn(0).promise().done(function(){$('#percent66').css('top','51%');$('#percent66').css('width','85%')});$('.second-q').removeClass('slideInleft').addClass('slideOutRight').fadeOut().promise().done(function(){$('.third-q').addClass('animated slideInLeft').fadeIn();$('.second-q').removeClass('slideOutRight')});time2=setInterval(function(){if(count<67){$('.percent').empty().append(count+'%');count++}},35);setTimeout(function(){afterReveal3()},1000)}});function afterReveal3(){var currentCount3=1;var doStuff3=function(){$('.queue3[data-id='+currentCount3+']').animate({opacity:1},100).promise().done(function(){currentCount3++;doStuff3();if(currentCount3==21){$('.third-q .step2-gif').hide();$('.third-q .step3-gif').show()}})};(function loopingFunction(){doStuff3()})()}
    $('body').on("click",".next-btn3",function(){$('.last-q .step3-gif').hide();$('.last-q .step4-gif').show();var game_phone=$('.game-phone').val();if(game_phone==""){$(".game-phone").css("background","#D66161")}else{$('.next-btn3, .next-btn, .back-btn2, .close-btn').hide();$('.ok-btn, .step4-gif').show();$('#percent66').fadeOut().promise().done(function(){$('#percent100').fadeIn()});$('.third-q').removeClass('slideInleft').addClass('slideOutRight').fadeOut().promise().done(function(){$('.last-q').addClass('animated slideInLeft').fadeIn()});time3=setInterval(function(){if(count<101){$('.percent').empty().append(count+'%');count++}},35);setTimeout(function(){afterReveal4()},1000)
        var firstq=$('.first-q input[type=radio]:checked').val();var secondq1=$('.radio1 input[type=radio]:checked').val();var secondq2=$('.radio2 input[type=radio]:checked').val();var secondq3=$('.radio3 input[type=radio]:checked').val();var secondq4=$('.radio4 input[type=radio]:checked').val();var secondq5=$('.radio5 input[type=radio]:checked').val();var secondq6=$('.radio6 input[type=radio]:checked').val();var secondq7=$('.radio7 input[type=radio]:checked').val();var keyword=$('.keyword').val();var link=$('.link').val();SendOrder(firstq,secondq1,secondq2,secondq3,secondq4,secondq5,secondq6,secondq7,game_phone,keyword,link)}});function afterReveal4(){var currentCount4=1;var doStuff4=function(){$('.queue4[data-id='+currentCount4+']').animate({opacity:1},100).promise().done(function(){currentCount4++;doStuff4();if(currentCount4==31){$('.last-q .step4-gif').hide();$('.last-q .step3-gif').show();setTimeout(function(){$('.manager').animate({opacity:1},1000)},500)}})};(function loopingFunction(){doStuff4()})()}
    function SendOrder(firstq,secondq1,secondq2,secondq3,secondq4,secondq5,secondq6,secondq7,game_phone,keyword,link){$.ajax({type:"POST",url:"game.php",data:{firstq:firstq,secondq1:secondq1,secondq2:secondq2,secondq3:secondq3,secondq4:secondq4,secondq5:secondq5,secondq6:secondq6,secondq7:secondq7,game_phone:game_phone,keyword:keyword,link:link},success:function(){}})}
    $('body').on("click",".back-btn1",function(){$('.next-btn, .next-btn2').css('border','2px solid #fff').addClass('wpulse-button').removeClass('pulse-button');$('.second-q').addClass('animated slideOutRight').fadeOut().promise().done(function(){$('.first-q').addClass('slideInLeft').fadeIn();$('.second-q').removeClass('slideOutRight')
        $('.next-btn2, .back-btn1').hide();$('.next-btn, .close-btn').show();$('.first-q .step2-gif').show();$('.first-q .step3-gif').hide()})});$('body').on("click",".back-btn2",function(){count=66;$('.next-btn, .next-btn2').css('border','2px solid #fff').addClass('wpulse-button').removeClass('pulse-button');$('.third-q').addClass('animated slideOutRight').fadeOut().promise().done(function(){$('.second-q').addClass('slideInLeft').fadeIn();$('.third-q').removeClass('slideOutRight');$('.next-btn3, .back-btn2').hide();$('.next-btn2, .back-btn1, .close-btn').show();$('.second-q .step2-gif').show();$('.second-q .step3-gif').hide()})});$('body').on("click",".close-btn",function(){setTimeout(function(){count=0},1000);clearInterval(time1);clearInterval(time2);clearInterval(time3);$('.game-center').fadeOut().promise().done(function(){$('.lp-center, .lp .title, .quiz').fadeIn();$('.first-q, .second-q, .third-q, .last-q').removeClass('animated slideInLeft slideOutRight').fadeOut().promise().done(function(){$('.first-q').fadeIn();$('.next-btn').show();$('.next-btn2, .next-btn3, .back-btn1, .back-btn2, .ok-btn').hide();$('#percent33').show().css('top','77%').css('width','50%');$('#percent66').hide().css('top','60%').css('width','70%');$('.queue, .queue2, .queue3, .queue4').css('opacity','0');$(".game-phone").val("");$('.percent').empty().append('0%');$('#percent100').fadeOut();$("input:radio").prop("checked",!1);$('.first-q .step2-gif, .second-q .step2-gif, .third-q .step2-gif, .last-q .step4-gif').show();$('.first-q .step3-gif, .second-q .step3-gif, .third-q .step3-gif').hide();$('.next-btn, .next-btn2').css('border','2px solid #fff').addClass('wpulse-button').removeClass('pulse-button')})})});$('body').on("click",".ok-btn",function(){setTimeout(function(){count=0},1000);clearInterval(time1);clearInterval(time2);clearInterval(time3);$('.game-center').fadeOut().promise().done(function(){$('.lp-center, .lp .title, .quiz').fadeIn();$('.first-q, .second-q, .third-q, .last-q').removeClass('animated slideInLeft slideOutRight').fadeOut().promise().done(function(){$('.first-q').fadeIn();$('.first-q .step2-gif, .second-q .step2-gif, .third-q .step2-gif, .last-q .step4-gif').show();$('.first-q .step3-gif, .second-q .step3-gif, .third-q .step3-gif').hide();$('.next-btn').show();$('.next-btn2, .next-btn3, .back-btn1, .back-btn2, .ok-btn').hide();$('.queue, .queue2, .queue3, .queue4').css('opacity','0');$('#percent33').show().css('top','77%').css('width','50%');$('#percent66').hide().css('top','60%').css('width','70%');$(".game-phone").val("");$('.percent').empty().append('0%');$('#percent100').fadeOut();$("input:radio").prop("checked",!1);$('.next-btn, .next-btn2').css('border','2px solid #fff').addClass('wpulse-button').removeClass('pulse-button')})})});$.ajax({url:"load",}).done(function(data){$(".svg1").html(data)});$.ajax({url:"load2",}).done(function(data){$(".svg2").html(data)});$.ajax({url:"mload",}).done(function(data){$(".mob_svg").html(data)});$("body").on("click","#mobOffer",function(){var id=$(this).data("id")
        $('body').addClass('body-fix');$('.modal2[data-id='+id+']').fadeIn();$('.order-modal-block').css('opacity','1').addClass('animated zoomIn')});$(window).scroll(function(){$("#mobOffer").stop().animate({"marginTop":($(window).scrollTop())+"px","marginLeft":($(window).scrollLeft())+"px"},"fast")});$(window).mousemove(function(e){var change;var xpos=e.clientX;var ypos=e.clientY;var left=change*20;var xpos=xpos;ypos=ypos;$('#sluch1').css('top',((30+(ypos/600))+"%"));$('#sluch1').css('left',((0+(xpos/600))+"%"));$('#sluch2').css('top',((70+(ypos/600))+"%"));$('#sluch2').css('right',((70+(xpos/600))+"%"))
        $('#sluch3').css('top',((18+(ypos/600))+"%"));$('#sluch3').css('left',((75+(xpos/600))+"%"));$('#sluch4').css('top',((32+(ypos/600))+"%"));$('#sluch4').css('right',((4+(xpos/600))+"%"));$('#sluch5').css('top',((45+(ypos/600))+"%"));$('#sluch5').css('left',((77+(xpos/600))+"%"));$('#sluch6').css('right',((77+(xpos/600))+"%"));$('#sluch6').css('top',((10+(ypos/600))+"%"))});var t;var rotate;function timerOn(){if(rotate<10){$('.mgreen_block[data-id='+rotate+']').animate({opacity:1},1000);$('.mgreen_block').animate({opacity:0},500);$('.ms-text[data-id='+rotate+']').css('color','#60ff00');setTimeout(function(){$('.ms-text').css('color','#fff')},1200);if(rotate==5){$('.mob_svg').addClass('rotate');$('.before-r').fadeOut(500);$('.after-r').fadeIn(500)}
        rotate++}
        if(rotate==10){rotate=1;$('.mob_svg').removeClass('rotate');$('.before-r').fadeIn(500);$('.after-r').fadeOut(500)}}
    var scrollPos=$('.mob-svg').offset().top;var once=!1;$(window).scroll(function(){var scrolled=$(window).scrollTop();if((scrolled>scrollPos)&&!once){rotate=1;t=setInterval(function(){timerOn()},2000);once=!0}else if(scrolled<scrollPos){rotate=1;clearInterval(t)
        if($('.mob_svg').hasClass('rotate')){$('.mob_svg').removeClass('rotate');$('.before-r').fadeIn(500);$('.after-r').fadeOut(500)}
        once=!1}});var t2;var scrollPos2=$('.admin-title').offset().top-100;var once2=!1;$(window).scroll(function(){var scrolled=$(window).scrollTop();if((scrolled>scrollPos2)&&!once2){once2=!0;var id=2;t2=setInterval(function(){if(id<7){$('.mpens').hide().promise().done(function(){$('.mpens[data-id='+id+']').show()});id++}else if(id>=7){id=1}},2000)}else if(scrolled<scrollPos2){clearInterval(t2);id=1;$('.mpens').hide().promise().done(function(){$('.mpens[data-id='+id+']').show()});once2=!1}})
    $('body').on("click",".share",function(e){e.preventDefault();$('.share_block').fadeToggle()})})
$('.person_hover').hover(function(){$('.petr_info').removeClass('active')},function(){$('.petr_info').addClass('active')})