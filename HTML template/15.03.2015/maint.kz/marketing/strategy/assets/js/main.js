jQuery(document).ready(function($) {
    // form_anim
    setTimeout(function () {
        $('.hb-line').addClass('active');
    },5000)
    var lim;
    function AnimText(index){
        var text_anim='Ответьте на несколько вопросов по созданию идеального логотипа для Вашей компании!';
        var c=document.getElementById('Anim_text');
        lim=text_anim.length;
        if(index==lim){
            return
        }
        c.innerHTML=c.innerHTML+text_anim[index];
        setTimeout(function(){
            AnimText(index+1);
        },80);
    }
    var offset=[
        $('#off1').offset().top+100,
        $('#off2').offset().top+100,
        $('#off3').offset().top+100,
        $('#off4').offset().top+100,
        $('#off5').offset().top+100,
        $('#off6').offset().top+100,
        $('.item[datatype=1]').offset().top+100,
        $('.item[datatype=2]').offset().top+100,
        $('.item[datatype=3]').offset().top+100,
        $('.item[datatype=4]').offset().top+100,
        $('.item[datatype=5]').offset().top+100,
        $('.item[datatype=6]').offset().top+100,
        $('.border_grad[data-id="1"]').offset().top+100,
        $('.border_grad[data-id="2"]').offset().top+100,
        $('.border_grad[data-id="3"]').offset().top+100
    ];
    if($(window).width()<=1049){
        $('#rev_bd').children().eq(6).addClass('invert');
        $('#rev_bd').children().eq(5).addClass('invert');
        $('.button-mob').click(function() {
            $('.button-mob').fadeOut(0).promise().done(function() {
                $('p.m-hidden').fadeIn();
                $('.button-mob-1').css({display:'block'});
            });
            txt_com=1;
        });
        $('.button-mob-1').click(function() {
            $('.button-mob-1').fadeOut(0).promise().done(function() {
                $('p.m-hidden').fadeOut();
                $('.button-mob').fadeIn();
            });
            txt_com=0;
        });
        animIcn1(1,'mob','.list');
    }
    function go_list2(num) {
        $('.item[datatype='+num+'] .list1').addClass('active');
        setTimeout(function () {
            $('.item[datatype='+num+'] .list2').addClass('active');
            setTimeout(function () {
                $('.item[datatype='+num+'] .list').removeClass('opac');
            },610);
        },610);
    }
    function animIcn1(index,mode,tag){
        if(mode=='pc'){
            if(index==4){
                index=1;
            }
        }
        if(mode=='mob'){
            if(index==7){
                index=1;
            }
        }
        $(tag+'[data-id='+index+']').addClass('tada');
        setTimeout(function () {
            $(tag+'[data-id='+index+']').removeClass('tada');
            animIcn1(index+1,mode,tag);
        },3000);
    }
    $(window).scroll(function(){
        var scrollBottom= $(window).scrollTop() + $(window).height();
        if($(window).width()<=1049){
            if(scrollBottom>offset[0]){
                $('#off1').children('.icon_an').addClass('top');
                $('#off1').find('.blk_anim ').addClass('active');
            }
            if(scrollBottom>offset[1]){
                $('#off2').find('span').removeClass('opac');
            }
            if(scrollBottom>offset[2]){
                $('#off3').children('.icon_an').addClass('top');
                $('#off3').find('.blk_anim ').addClass('active');
            }
            if(scrollBottom>offset[3]){
                $('#off4').find('span').removeClass('opac');
            }
            if(scrollBottom>offset[4]){
                $('#off5').children('.icon_an').addClass('top');
                $('#off5').find('.blk_anim ').addClass('active');
            }
            if(scrollBottom>offset[5]){
                $('#off6').find('span').removeClass('opac');
            }
            if(scrollBottom>offset[6]){
                go_list2(1);
            }
            if(scrollBottom>offset[7]){
                go_list2(2);
            }
            if(scrollBottom>offset[8]){
                go_list2(3);
            }
            if(scrollBottom>offset[9]){
                go_list2(4);
            }
            if(scrollBottom>offset[10]){
                go_list2(5);
            }
            if(scrollBottom>offset[11]){
                go_list2(6);
            }
            if(scrollBottom>offset[12]){
                gradGo(1)
            }
            if(scrollBottom>offset[13]){
                gradGo(2)
            }
            if(scrollBottom>offset[14]){
                gradGo(3)
            }
        }
    })


    $('body').on('click','.line_tran .item',function (e) {
        parent=$(this).parent().parent();
        if($(parent).hasClass('active')){
            $(parent).children('.txt').slideUp();
            $(parent).removeClass('active');
            $(this).addClass('rott');
        }else{
            // $(parent).css({'height':'auto'});
            $(parent).children('.txt').slideDown();
            $(parent).addClass('active');
            $(this).removeClass('rott');
        }
    });
    var hijacking = $('body').data('hijacking'),
        animationType = $('body').data('animation'),
        delta = 0,
        scrollThreshold = 1,
        actual = 1,
        animating = false;
    var sectionsAvailable = $('.cd-section'),
        verticalNav = $('.cd-vertical-nav'),
        downArrow = $('.downArrow'),
        prevArrow = verticalNav.find('a.cd-prev'),
        nextArrow = verticalNav.find('a.cd-next');
    nextArrow2 = downArrow.find('a.down-arrow');
    var MQ = deviceType(),
        bindToggle = false;
    bindEvents(MQ, true);
    $(window).on('resize', function() {
        MQ = deviceType();
        bindEvents(MQ, bindToggle);
        if (MQ == 'mobile') bindToggle = true;
        if (MQ == 'desktop') bindToggle = false;
    });
    $(window).mousemove(function(e) {
        var change;
        var xpos=e.clientX;var ypos=e.clientY;var left= change*20;
        var  xpos=xpos*2;ypos=ypos*2;
        $('.parallax').css('transform','translate3d('+(0+(xpos/500))+'px,'+(0+(ypos/500))+'px,0)');
        $('.parallax2').css('transform','translate3d('+(0-(xpos/500))+'px,'+(0-(ypos/500))+'px,0)');
        $('.parallax3').css('transform','translate3d('+(0-(xpos/500))+'px,'+(0+(ypos/500))+'px,0)');
        $('.parallax4').css('transform','translate3d('+(0+(xpos/500))+'px,'+(0-(ypos/500))+'px,0)');
        // $('.parallax2').css('bottom',((0+(ypos/40))+"px"));
        // $('.parallax2').css('right',((0+(xpos/40))+"px"))
        // $('.parallax3').css('top',(('-15%'+(ypos/40))+"%"));
        // $('.parallax3').css('left',(( 0+(xpos/80))+"px"));
        // $('.parallax4').css('bottom',((0+(ypos/50))+"px"));
        // $('.parallax4').css('right',(( 0+(xpos/80))+"px"));
    });
    function bindEvents(MQ, bool) {
        if (MQ == 'desktop' && bool) {
            if (hijacking == 'on') {
                initHijacking();
                $(window).on('DOMMouseScroll mousewheel', scrollHijacking);
            } else {
                scrollAnimation();
                $(window).on('scroll', scrollAnimation);
            }
            prevArrow.on('click', prevSection);
            nextArrow.on('click', nextSection);
            nextArrow2.on('click', nextSection);
            $('body').on('click', nextArrow2, function() {
                setTimeout(function() {
                    var luch = 1;
                    setInterval(function() {
                        if (luch < 7) {
                            $('#lp-luch' + luch + ' img').animate({
                                opacity: 1
                            }, 1000, function() {});
                            luch++;
                        }
                    }, 1000);
                    $("#lp-luch1 img").css("-webkit-animation", "leaves 2s ease-in-out infinite alternate", "animation", "leaves 2s ease-in-out infinite alternate")
                    $('.l-text1, .l-text2, .l-text3, .l-text4').animate({
                        opacity: 1
                    }, 1000);
                    $('.r-text1, .r-text2, .r-text3, .r-text4, .r-text5 ').animate({
                        opacity: 1
                    }, 1000);
                    setTimeout(function() {
                        $('.waitActive').addClass('activeDashed');
                    }, 100);
                }, 650);
            });
            $(document).on('keydown', function(event) {
                if (event.which == '40' && !nextArrow.hasClass('inactive')) {
                    event.preventDefault();
                    nextSection();
                } else if (event.which == '38' && (!prevArrow.hasClass('inactive') || (prevArrow.hasClass('inactive') && $(window).scrollTop() != sectionsAvailable.eq(0).offset().top))) {
                    event.preventDefault();
                    prevSection();
                }
            });
            checkNavigation();
        } else if (MQ == 'mobile') {
            resetSectionStyle();
            $(window).off('DOMMouseScroll mousewheel', scrollHijacking);
            $(window).off('scroll', scrollAnimation);
            prevArrow.off('click', prevSection);
            nextArrow.off('click', nextSection);
            $(document).off('keydown');
        }
    }

    function scrollAnimation() {
        (!window.requestAnimationFrame) ? animateSection(): window.requestAnimationFrame(animateSection);
    }

    function animateSection() {
        var scrollTop = $(window).scrollTop(),
            windowHeight = $(window).height(),
            windowWidth = $(window).width();
        sectionsAvailable.each(function() {
            var actualBlock = $(this),
                offset = scrollTop - actualBlock.offset().top;
            var animationValues = setSectionAnimation(offset, windowHeight, animationType);
            transformSection(actualBlock.children('div'), animationValues[0], animationValues[1], animationValues[2], animationValues[3], animationValues[4]);
            (offset >= 0 && offset < windowHeight) ? actualBlock.addClass('visible'): actualBlock.removeClass('visible');
        });
        checkNavigation();
    }

    function transformSection(element, translateY, scaleValue, rotateXValue, opacityValue, boxShadow) {
        element.velocity({
            translateY: translateY + 'vh',
            scale: scaleValue,
            rotateX: rotateXValue,
            opacity: opacityValue,
            boxShadowBlur: boxShadow + 'px',
            translateZ: 0,
        }, 0);
    }

    function initHijacking() {
        var visibleSection = sectionsAvailable.filter('.visible'),
            topSection = visibleSection.prevAll('.cd-section'),
            bottomSection = visibleSection.nextAll('.cd-section'),
            animationParams = selectAnimation(animationType, false),
            animationVisible = animationParams[0],
            animationTop = animationParams[1],
            animationBottom = animationParams[2];
        visibleSection.children('div').velocity(animationVisible, 1, function() {
            visibleSection.css('opacity', 1);
            topSection.css('opacity', 1);
            bottomSection.css('opacity', 1);
        });
        topSection.children('div').velocity(animationTop, 0);
        bottomSection.children('div').velocity(animationBottom, 0);
    }
    var animate_on = 0;

    function scrollHijacking(event) {
        if (event.originalEvent.detail < 0 || event.originalEvent.wheelDelta > 0) {
            delta--;
            (Math.abs(delta) >= scrollThreshold) && prevSection();
        } else {
            delta++;
            (delta >= scrollThreshold) && nextSection();
        }
        return false;
    }

    function anim_mob_step(active) {
        if (active == 7){
            anim_mob_step(1);
        }
        setTimeout(function () {
            $('#li_m_'+active+' .step').addClass('active');
            anim_mob_step(active + 1);
        },2000);
    }

    function anim_mob_line(active) {
        if (active == 7){
            anim_mob_line(1);
        }
        $("#fun_m_li"+active+ " hr").addClass('active');
        setTimeout(function () {
            $("#fun_m_li"+active+" .span").addClass('active');
            setTimeout(function () {
                anim_mob_line(active + 1);
            },750);
        },750);
    }
    function anim_lin(num_lin){
        if(num_lin==7){
            return
        }
        if(num_lin==1){
            setTimeout(function () {
                $('#fun_li'+num_lin+' hr').addClass('active');
                setTimeout(function () {
                    $('#fun_li'+num_lin+' span').addClass('active');
                },100);
                anim_lin(num_lin+1);
            },400)
        }else{
            setTimeout(function () {
                $('#fun_li'+num_lin+' hr').addClass('active');
                setTimeout(function () {
                    $('#fun_li'+num_lin+' span').addClass('active');
                },100);
                anim_lin(num_lin+1);
            },400)
        }
    }
    var go_listonec=false;
    function animateOn1() {
        oncefunc(go_listonec,'go_list');
        go_listonec=true;
    }
    var luch2 = 1;

    function ggg(active) {
        if (active == 7){
            ggg(1);
        }
        $('#cl' + active + ' .cloud').addClass('active');
        $('#cl' + active + ' .step').removeClass('active');
        setTimeout(function () {
            $('#cl' + active + ' .cloud-a').addClass('active');
            $('#cl' + active + ' h1').addClass('active');
        },760);
        setTimeout(function() {
            $('#cl' + active + ' .cloud-a').removeClass('active');
            $('#cl' + active + ' h1').removeClass('active');
            setTimeout(function () {
                $('#cl' + active + ' .cloud').removeClass('active');
            },760);
            setTimeout(function () {
                $('#cl' + active + ' .step').addClass('active');
            },1000);
            ggg(active + 1);
        }, 2270);
    }
    function go_list(num) {
        if(num==4){
            return
        }
        $('#list'+num+' .list1').addClass('active');
        setTimeout(function () {
            $('#list'+num+' .list2').addClass('active');
            setTimeout(function () {
                $('#list'+num+' .list').removeClass('opac');
                go_list(num+1)
            },610);
        },610);
    }
    function gosss() {
        sss(2,'#list1 .shap_grad');
        setTimeout(sss(5,'#list2 .shap_grad'),500);
        setTimeout(sss(6,'#list3 .shap_grad'),700);
        setTimeout(animIcn1(1,'pc','.list'),2000);
    }
    function sss(icon,tag) {
        count_p=$(tag).children('p').length;
        count_img=$(tag).children('img').length;
        if(count_p>=count_img){
            limit=count_p;
        }else {
            limit=count_img;
        }
        if(icon==limit){
            icon=0;
        }
        chek=$(tag).find('.opac').length;
        if(chek!=0){
            $(tag).children('p').eq(icon).removeClass('opac');
            $(tag).children('img').eq(icon).removeClass('opac');
            setTimeout(function () {
                $(tag).children('img').eq(icon).css({'transition':'none'});
                sss(icon+1,tag)
            },1000);
        }else{
            return
        }
    }
    var time;
    var animIcn1once=false;
    function lineOn(index) {
        $('.hr_dots').css({'width':'100%'});
        setTimeout(function () {
            numb(1);
        },400);
        setTimeout(function () {
            numb(2);
        },1100);
        setTimeout(function () {
            numb(3);
        },2000);
        if(index==0){
            setTimeout(function () {
                lineOn(1);
            },3800);
        }
        if(index==1){
            time=2;
            carr(1);
        }
        if(index==2){
            time=3;
            carr(2);
            recarr(1);
        }
        if(index==3){
            time=4;
            carr(3);
            recarr(2);
        }
        if(index==4){
            oncefunc(animIcn1once,'animIcn1');
            animIcn1once=true;
            lineOn(1);
            recarr(3);
        }

    }

    function numb(index) {
        $('#block-'+index).children('.nums').removeClass('opac');
    }
    function carr(index) {
        element=$('.x3block').children().eq(index-1);
        $(element).css({'margin-bottom':'4em'});
        setTimeout(function () {
            $(element).children('.dial').children('.circl').eq(1).removeClass('opac');
        },1600);
        setTimeout(function () {
            $(element).children('.dial').children('.circl').eq(0).removeClass('opac');
            setTimeout(function () {
                lineOn(time);
            },2200);
        },1800);
    }
    var lineOnonce=false;
    function animateOn2() {
        oncefunc(lineOnonce,'lineOn');
        lineOnonce=true;
    }
    function recarr(index) {
        element1=$('.x3block').children().eq(index-1);
        $(element1).children('.dial').children('.circl').eq(0).addClass('fadeOut opac');
        setTimeout(function () {
            $(element1).css({'margin-bottom':'0'});
            $(element1).children('.dial').children('.circl').eq(1).addClass('fadeOut opac');
        },800);
    }


    function gradGo(index,mode){
        if(index==4){
            return
        }
        $('.border_grad[data-id='+index+']').children('.bor-t').addClass('act1');
        $('.border_grad[data-id='+index+']').children('.bor-b').addClass('act1');
        setTimeout(function () {
            $('.border_grad[data-id='+index+']').children('.bor-t').addClass('active');
            $('.border_grad[data-id='+index+']').children('.bor-b').addClass('active');
            setTimeout(function () {
                $('.border_grad[data-id='+index+']').children('.ooo').eq(0).removeClass('opac');
                $('.border_grad[data-id='+index+']').children('.ooo').eq(4).removeClass('opac');
            },100)
            setTimeout(function () {
                $('.border_grad[data-id='+index+']').children('.ooo').eq(1).removeClass('opac');
                $('.border_grad[data-id='+index+']').children('.ooo').eq(3).removeClass('opac');
                setTimeout(function () {
                    $('.border_grad[data-id='+index+']').children('.ooo').eq(2).removeClass('opac');
                    if(mode=='pc'){
                        gradGo(index+1,mode);
                    }
                },200);
            },300);
        },1000);
    }
    var gradGoonce=false;
    function animateOn3() {
        oncefunc(gradGoonce,'gradGo');
        gradGoonce=true;
    }

    function anim(activeText) {
        if (activeText == 1) {
            activeText = 2;
        }
        if (activeText == 16) {
            activeText = 1;
            anim(activeText + 1);
        }
        if (once && activeText == 1) {
            return;
        }
        $('.pi_text[data-id=' + activeText + ']').css({
            color: '#60ff00'
        });
        setTimeout(function() {
            $('.pi_text').css({
                color: '#fff'
            });
            if (!once && activeText == 1) {
                return;
            }
            anim(activeText + 1);
        }, 2000);
    }
    var once = false;

    function anim(activeText) {
        if (activeText == 1) {
            activeText = 2;
        }
        if (activeText == 16) {
            activeText = 1;
            anim(activeText + 1);
        }
        if (once && activeText == 1) {
            return;
        }
        $('.pi_text[data-id=' + activeText + ']').css({
            color: '#60ff00'
        });
        setTimeout(function() {
            $('.pi_text').css({
                color: '#fff'
            });
            if (!once && activeText == 1) {
                return;
            }
            anim(activeText + 1);
        }, 2000);
    }
    var luch3 = 1;
    var luch4 = 1;
    var bubleIcnonce=false;
    function bubles(index) {
        if(index==4){
            return
        }
        $('#icn_'+index).addClass('top');
        setTimeout(function () {
            $('#text_'+index).children().eq(0).removeClass('opac');
            $('#text_'+index).children().eq(1).removeClass('opac');
            setTimeout(function () {
                $('#icn_'+index).children('img').removeClass('opac');
                $('#icn_'+index).find('.blk_anim').addClass('active');
                bubles(index+1);
            },600);
        },1200);
    }
    function bubles1(index) {
        if(index==3){
            oncefunc(bubleIcnonce,'bubleIcn');
            bubleIcnonce=true;
            return
        }
        $('#icn_'+index).addClass('top');
        setTimeout(function () {
            $('#text_'+index).children().eq(0).removeClass('opac');
            $('#text_'+index).children().eq(1).removeClass('opac');
            setTimeout(function () {
                $('#icn_'+index).children('img').removeClass('opac');
                $('#icn_'+index).find('.blk_anim').addClass('active');
                bubles1(index-1);
            },600);
        },1200);
    }
    function oncefunc(once,name_func,params) {
        if(once){
            return
        }else{
            if(name_func=='lineOn'){
                lineOn(0);
            }
            if(name_func=='go_list'){
                go_list(1);
                gosss();
            }
            if(name_func=='gradGo'){
                gradGo(1,'pc');
            }
            if(name_func=='animIcn1'){
                animIcn1(1,'pc','.ins');
            }
            if(name_func=='bubleIcn'){
                bubleIcn(1);
            }
        }
    }
    function bubleIcn(index) {
        if(index==7){
            index=1;
        }
        $('.icnn[data-id='+index+']').addClass('bounce');
        setTimeout(function () {
            $('.icnn[data-id='+index+']').removeClass('bounce');
            bubleIcn(index+1);
        },3000);

    }
    function bublesIcn(index) {
        if(index==7){
            return
        }
        $('#icn_'+index).addClass('active');
        // $('#text_'+index).children().eq(0).children().eq(0).addClass('none opac');
        // $('#text_'+index).children().eq(0).children().eq(1).removeClass('none opac');
        setTimeout(function () {
            $('#icn_'+index).removeClass('active');
            // $('#text_'+index).children().eq(0).children().eq(0).removeClass('none opac');
            // $('#text_'+index).children().eq(0).children().eq(1).addClass('none opac');
            bublesIcn(index+1);
        },1000)
    }
    function animateOn4() {
        bubles(1);
        bubles1(6);
    }
    function animateOn5() {
        $('.animated-img3,.animated-img2,.animated-img,.button-bg,.download').addClass('active');
        $("#comluch-8").css("-webkit-animation", "leaves 2s ease-in-out infinite alternate", "animation", "leaves 2s ease-in-out infinite alternate")
    }
    function animateOn6() {
        $('.partners-box.first').addClass('active').animate({opacity: 1}, 1500, function () {
            $('.partners-box.second').addClass('active').animate({opacity: 1}, 1500, function () {
                $('.partners-box.third').addClass('active').animate({opacity: 1}, 1500, function () {

                })
            })
        })
    }
    $("body").on("click", "#carousel-portfolio .m-item", function() {
        var id = $(this).data("id")
        $('body').addClass('body-fix');
        $('.content-modal').empty();
        $('.content-modal').append('<img src="assets/img/portfolio/modal/modal' + id + '.jpg">');
        if ($(window).width() > 1049) {
            $('.content-modal img').addClass('help_img');
        }
        $('.modal').fadeIn();
        $('.main-modal-block').css('opacity', '1').addClass('animated zoomIn');
        $('.customNavigation a').css('opacity', '0');
        if ($(window).width() > 1049) {
            $(window).off('DOMMouseScroll mousewheel', scrollHijacking);
        }
    });
    $("body").on("mouseenter", "#carousel-portfolio .item", function() {
        var id = $(this).data("id")
        $('.pshadow' + id).css({
            opacity: 1
        });
    });
    $("body").on("mouseleave", "#carousel-portfolio .item", function() {
        var id = $(this).data("id")
        $('.pshadow' + id).css({
            opacity: 0
        });
    });
    $("body").on("click", ".close-pop", function() {
        setTimeout(function() {
            $('body').removeClass('body-fix');
        }, 320);
        $('.customNavigation a').css('opacity', '1');
        $('.modal, .modal2').fadeOut();
        if ($(window).width() > 1049) {
            $(window).on('DOMMouseScroll mousewheel', scrollHijacking);
        }
    });
    $("body").on("click", ".close-modal", function() {
        setTimeout(function() {
            $('body').removeClass('body-fix');
        }, 320);
        $('.customNavigation a').css('opacity', '1');
        $('.modal, .modal2').fadeOut();
        if ($(window).width() > 1049) {
            $(window).on('DOMMouseScroll mousewheel', scrollHijacking);
        }
    });
    $("body").on("click", "#sendmButton", function() {
        var id = $(this).data("id");
        $('body').addClass('body-fix');
        $('.modal2[data-id=' + id + ']').fadeIn();
        $('.order-modal-block').css('opacity', '1').addClass('animated zoomIn');
    });
    $('body').on("click", ".order-btn", function() {
        var id = $(this).data("id");
        $('.modal2[data-id=' + id + ']').fadeIn();
        $('.zakaz-modal-block').css('opacity', '1').addClass('animated zoomIn');
        if ($(window).width() > 1049) {
            $(window).off('DOMMouseScroll mousewheel', scrollHijacking);
        }
    });
    $("body").on("click", "#cbtn2", function() {
        var id = $(this).data("id")
        $('body').addClass('body-fix');
        $('.modal2[data-id=' + id + ']').fadeIn();
        $('.mail-modal-block').css('opacity', '1').addClass('animated zoomIn');
    });
    $('body').on("click", ".iphoneh", function() {
        var id = $(this).data("id");
        $('.modal2[data-id=' + id + ']').fadeIn();
        $('.zakaz-modal-block').css('opacity', '1').addClass('animated zoomIn');
        if ($(window).width() > 1049) {
            $(window).off('DOMMouseScroll mousewheel', scrollHijacking);
        }
    });

    function prevSection(event) {
        typeof event !== 'undefined' && event.preventDefault();
        var visibleSection = sectionsAvailable.filter('.visible'),
            middleScroll = (hijacking == 'off' && $(window).scrollTop() != visibleSection.offset().top) ? true : false;
        visibleSection = middleScroll ? visibleSection.next('.cd-section') : visibleSection;
        var animationParams = selectAnimation(animationType, middleScroll, 'prev');
        unbindScroll(visibleSection.prev('.cd-section'), animationParams[3]);
        if (!animating && !visibleSection.is(":first-child")) {
            animating = true;
            if (animate_on != 0) animate_on--;
            visibleSection.removeClass('visible').children('div').velocity(animationParams[2], animationParams[3], animationParams[4]).end().prev('.cd-section').addClass('visible').children('div').velocity(animationParams[0], animationParams[3], animationParams[4], function() {
                animating = false;
                if (hijacking == 'off') $(window).on('scroll', scrollAnimation);
            });
            actual = actual - 1;
        }
        if(animate_on == 0){
            $('.forma, .forma .form1, .forma .form2 ').removeClass('active');
            $('.phone_form,.smile_form ').slideUp();
            $('.form2').removeClass('moveTogether');
        }
        resetScroll();
    }
    var ahref = 0;
    var hash = window.location.hash;
    var firstAnimate = false;
    if (!firstAnimate && hash == '#instrument') {
        nextSection();
    }
    if (!firstAnimate && hash == '#sostavv') {
        nextSection();
        setTimeout(function() {
            nextSection();
        }, 1500);
        setTimeout(function() {
            nextSection();
        }, 3000);
    }
    if (!firstAnimate && hash == '#sluchai') {
        nextSection();
        setTimeout(function() {
            nextSection();
        }, 1500);
        setTimeout(function() {
            nextSection();
        }, 3000);
        setTimeout(function() {
            nextSection();
        }, 4500);
    }
    if (!firstAnimate && hash == '#about') {
        nextSection();
        setTimeout(function() {
            nextSection();
        }, 1500);
        setTimeout(function() {
            nextSection();
        }, 3000);
        setTimeout(function() {
            nextSection();
        }, 4500);
        setTimeout(function() {
            nextSection();
        }, 6000);
    }
    if (!firstAnimate && hash == '#part') {
        nextSection();
        setTimeout(function() {
            nextSection();
        }, 1500);
        setTimeout(function() {
            nextSection();
        }, 3000);
        setTimeout(function() {
            nextSection();
        }, 4500);
        setTimeout(function() {
            nextSection();
        }, 6000);
        setTimeout(function() {
            nextSection();
        }, 7500);
        setTimeout(function() {
            nextSection();
        }, 9000);
    }
    if (!firstAnimate && hash == '#statistics') {
        nextSection();
        setTimeout(function() {
            nextSection();
        }, 1500);
        setTimeout(function() {
            nextSection();
        }, 3000);
        setTimeout(function() {
            nextSection();
        }, 4500);
        setTimeout(function() {
            nextSection();
        }, 6000);
        setTimeout(function() {
            nextSection();
        }, 7500);
        setTimeout(function() {
            nextSection();
        }, 9000);
        setTimeout(function() {
            nextSection();
        }, 1100);
    }

    function nextSection(event) {
        typeof event !== 'undefined' && event.preventDefault();
        var visibleSection = sectionsAvailable.filter('.visible'),
            middleScroll = (hijacking == 'off' && $(window).scrollTop() != visibleSection.offset().top) ? true : false;
        var animationParams = selectAnimation(animationType, middleScroll, 'next');
        unbindScroll(visibleSection.next('.cd-section'), animationParams[3]);
        if (!animating && !visibleSection.is(":last-of-type")) {
            animating = true;
            visibleSection.removeClass('visible').children('div').velocity(animationParams[1], animationParams[3], animationParams[4]).end().next('.cd-section').addClass('visible').children('div').velocity(animationParams[0], animationParams[3], animationParams[4], function() {
                animate_on++;
                if (animate_on == 1) {
                    animateOn1();
                }
                if (animate_on == 2) {
                    animateOn2();
                }
                if (animate_on == 3) {
                    animateOn3();
                }
                if (animate_on == 4) {
                    animateOn4();
                }
                if(animate_on == 5){
                    animateOn5();
                }
                if(animate_on == 6){
                    animateOn6();
                }
                animating = false;
                if (hijacking == 'off') $(window).on('scroll', scrollAnimation);
            });
            actual = actual + 1;
        }
        if(!$('.forma').hasClass('active')){$('.forma').addClass('active');}
        resetScroll();
    }

    function unbindScroll(section, time) {
        if (hijacking == 'off') {
            $(window).off('scroll', scrollAnimation);
            (animationType == 'catch') ? $('body, html').scrollTop(section.offset().top): section.velocity("scroll", {
                duration: time
            });
        }
    }

    function resetScroll() {
        delta = 0;
        checkNavigation();
    }

    function checkNavigation() {
        (sectionsAvailable.filter('.visible').is(':first-of-type')) ? prevArrow.addClass('inactive'): prevArrow.removeClass('inactive');
        (sectionsAvailable.filter('.visible').is(':last-of-type')) ? nextArrow.addClass('inactive'): nextArrow.removeClass('inactive');
    }

    function resetSectionStyle() {
        sectionsAvailable.children('div').each(function() {
            $(this).attr('style', '');
        });
    }

    function deviceType() {
        return window.getComputedStyle(document.querySelector('body'), '::before').getPropertyValue('content').replace(/"/g, "").replace(/'/g, "");
    }

    function selectAnimation(animationName, middleScroll, direction) {
        var animationVisible = 'translateNone',
            animationTop = 'translateUp',
            animationBottom = 'translateDown',
            easing = 'ease',
            animDuration = 800;
        switch (animationName) {
            case 'scaleDown':
                animationTop = 'scaleDown';
                easing = 'easeInCubic';
                break;
            case 'rotate':
                if (hijacking == 'off') {
                    animationTop = 'rotation.scroll';
                    animationBottom = 'translateNone';
                } else {
                    animationTop = 'rotation';
                    easing = 'easeInCubic';
                }
                break;
            case 'gallery':
                animDuration = 1500;
                if (middleScroll) {
                    animationTop = 'scaleDown.moveUp.scroll';
                    animationVisible = 'scaleUp.moveUp.scroll';
                    animationBottom = 'scaleDown.moveDown.scroll';
                } else {
                    animationVisible = (direction == 'next') ? 'scaleUp.moveUp' : 'scaleUp.moveDown';
                    animationTop = 'scaleDown.moveUp';
                    animationBottom = 'scaleDown.moveDown';
                }
                break;
            case 'catch':
                animationVisible = 'translateUp.delay';
                break;
            case 'opacity':
                animDuration = 700;
                animationTop = 'hide.scaleUp';
                animationBottom = 'hide.scaleDown';
                break;
            case 'fixed':
                animationTop = 'translateNone';
                easing = 'easeInCubic';
                break;
            case 'parallax':
                animationTop = 'translateUp.half';
                easing = 'easeInCubic';
                break;
        }
        return [animationVisible, animationTop, animationBottom, animDuration, easing];
    }

    function setSectionAnimation(sectionOffset, windowHeight, animationName) {
        var scale = 1,
            translateY = 100,
            rotateX = '0deg',
            opacity = 1,
            boxShadowBlur = 0;
        if (sectionOffset >= -windowHeight && sectionOffset <= 0) {
            translateY = (-sectionOffset) * 100 / windowHeight;
            switch (animationName) {
                case 'scaleDown':
                    scale = 1;
                    opacity = 1;
                    break;
                case 'rotate':
                    translateY = 0;
                    break;
                case 'gallery':
                    if (sectionOffset >= -windowHeight && sectionOffset < -0.9 * windowHeight) {
                        scale = -sectionOffset / windowHeight;
                        translateY = (-sectionOffset) * 100 / windowHeight;
                        boxShadowBlur = 400 * (1 + sectionOffset / windowHeight);
                    } else if (sectionOffset >= -0.9 * windowHeight && sectionOffset < -0.1 * windowHeight) {
                        scale = 0.9;
                        translateY = -(9 / 8) * (sectionOffset + 0.1 * windowHeight) * 100 / windowHeight;
                        boxShadowBlur = 40;
                    } else {
                        scale = 1 + sectionOffset / windowHeight;
                        translateY = 0;
                        boxShadowBlur = -400 * sectionOffset / windowHeight;
                    }
                    break;
                case 'catch':
                    if (sectionOffset >= -windowHeight && sectionOffset < -0.75 * windowHeight) {
                        translateY = 100;
                        boxShadowBlur = (1 + sectionOffset / windowHeight) * 160;
                    } else {
                        translateY = -(10 / 7.5) * sectionOffset * 100 / windowHeight;
                        boxShadowBlur = -160 * sectionOffset / (3 * windowHeight);
                    }
                    break;
                case 'opacity':
                    translateY = 0;
                    scale = (sectionOffset + 5 * windowHeight) * 0.2 / windowHeight;
                    opacity = (sectionOffset + windowHeight) / windowHeight;
                    break;
            }
        } else if (sectionOffset > 0 && sectionOffset <= windowHeight) {
            translateY = (-sectionOffset) * 100 / windowHeight;
            switch (animationName) {
                case 'scaleDown':
                    scale = (1 - (sectionOffset * 0.3 / windowHeight)).toFixed(5);
                    opacity = (1 - (sectionOffset / windowHeight)).toFixed(5);
                    translateY = 0;
                    boxShadowBlur = 40 * (sectionOffset / windowHeight);
                    break;
                case 'rotate':
                    opacity = (1 - (sectionOffset / windowHeight)).toFixed(5);
                    rotateX = sectionOffset * 90 / windowHeight + 'deg';
                    translateY = 0;
                    break;
                case 'gallery':
                    if (sectionOffset >= 0 && sectionOffset < 0.1 * windowHeight) {
                        scale = (windowHeight - sectionOffset) / windowHeight;
                        translateY = -(sectionOffset / windowHeight) * 100;
                        boxShadowBlur = 400 * sectionOffset / windowHeight;
                    } else if (sectionOffset >= 0.1 * windowHeight && sectionOffset < 0.9 * windowHeight) {
                        scale = 0.9;
                        translateY = -(9 / 8) * (sectionOffset - 0.1 * windowHeight / 9) * 100 / windowHeight;
                        boxShadowBlur = 40;
                    } else {
                        scale = sectionOffset / windowHeight;
                        translateY = -100;
                        boxShadowBlur = 400 * (1 - sectionOffset / windowHeight);
                    }
                    break;
                case 'catch':
                    if (sectionOffset >= 0 && sectionOffset < windowHeight / 2) {
                        boxShadowBlur = sectionOffset * 80 / windowHeight;
                    } else {
                        boxShadowBlur = 80 * (1 - sectionOffset / windowHeight);
                    }
                    break;
                case 'opacity':
                    translateY = 0;
                    scale = (sectionOffset + 5 * windowHeight) * 0.2 / windowHeight;
                    opacity = (windowHeight - sectionOffset) / windowHeight;
                    break;
                case 'fixed':
                    translateY = 0;
                    break;
                case 'parallax':
                    translateY = (-sectionOffset) * 50 / windowHeight;
                    break;
            }
        } else if (sectionOffset < -windowHeight) {
            translateY = 100;
            switch (animationName) {
                case 'scaleDown':
                    scale = 1;
                    opacity = 1;
                    break;
                case 'gallery':
                    scale = 1;
                    break;
                case 'opacity':
                    translateY = 0;
                    scale = 0.8;
                    opacity = 0;
                    break;
            }
        } else {
            translateY = -100;
            switch (animationName) {
                case 'scaleDown':
                    scale = 0;
                    opacity = 0.7;
                    translateY = 0;
                    break;
                case 'rotate':
                    translateY = 0;
                    rotateX = '90deg';
                    break;
                case 'gallery':
                    scale = 1;
                    break;
                case 'opacity':
                    translateY = 0;
                    scale = 1.2;
                    opacity = 0;
                    break;
                case 'fixed':
                    translateY = 0;
                    break;
                case 'parallax':
                    translateY = -50;
                    break;
            }
        }
        return [translateY, scale, rotateX, opacity, boxShadowBlur];
    }
    // var scrollmpos1 = $('.market-header-item span').offset().top - 50;
    // $(window).scroll(function() {
    //     var scrolledm2 = $(window).scrollTop();
    //     if (scrolledm2 > scrollmpos1) {
    //         alert();
    //     }
    // }); var once=!0


});
$.Velocity.RegisterEffect("translateUp", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: '-100%'
        }, 1]
    ]
});
$.Velocity.RegisterEffect("translateDown", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: '100%'
        }, 1]
    ]
});
$.Velocity.RegisterEffect("translateNone", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: '0',
            opacity: '1',
            scale: '1',
            rotateX: '0',
            boxShadowBlur: '0'
        }, 1]
    ]
});
$.Velocity.RegisterEffect("scaleDown", {
    defaultDuration: 1,
    calls: [
        [{
            opacity: '0',
            scale: '0.7',
            boxShadowBlur: '40px'
        }, 1]
    ]
});
$.Velocity.RegisterEffect("rotation", {
    defaultDuration: 1,
    calls: [
        [{
            opacity: '0',
            rotateX: '90',
            translateY: '-100%'
        }, 1]
    ]
});
$.Velocity.RegisterEffect("rotation.scroll", {
    defaultDuration: 1,
    calls: [
        [{
            opacity: '0',
            rotateX: '90',
            translateY: '0'
        }, 1]
    ]
});
$.Velocity.RegisterEffect("scaleDown.moveUp", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: '-10%',
            scale: '0.9',
            boxShadowBlur: '40px'
        }, 0.20],
        [{
            translateY: '-100%'
        }, 0.60],
        [{
            translateY: '-100%',
            scale: '1',
            boxShadowBlur: '0'
        }, 0.20]
    ]
});
$.Velocity.RegisterEffect("scaleDown.moveUp.scroll", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: '-100%',
            scale: '0.9',
            boxShadowBlur: '40px'
        }, 0.60],
        [{
            translateY: '-100%',
            scale: '1',
            boxShadowBlur: '0'
        }, 0.40]
    ]
});
$.Velocity.RegisterEffect("scaleUp.moveUp", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: '90%',
            scale: '0.9',
            boxShadowBlur: '40px'
        }, 0.20],
        [{
            translateY: '0%'
        }, 0.60],
        [{
            translateY: '0%',
            scale: '1',
            boxShadowBlur: '0'
        }, 0.20]
    ]
});
$.Velocity.RegisterEffect("scaleUp.moveUp.scroll", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: '0%',
            scale: '0.9',
            boxShadowBlur: '40px'
        }, 0.60],
        [{
            translateY: '0%',
            scale: '1',
            boxShadowBlur: '0'
        }, 0.40]
    ]
});
$.Velocity.RegisterEffect("scaleDown.moveDown", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: '10%',
            scale: '0.9',
            boxShadowBlur: '40px'
        }, 0.20],
        [{
            translateY: '100%'
        }, 0.60],
        [{
            translateY: '100%',
            scale: '1',
            boxShadowBlur: '0'
        }, 0.20]
    ]
});
$.Velocity.RegisterEffect("scaleDown.moveDown.scroll", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: '100%',
            scale: '0.9',
            boxShadowBlur: '40px'
        }, 0.60],
        [{
            translateY: '100%',
            scale: '1',
            boxShadowBlur: '0'
        }, 0.40]
    ]
});
$.Velocity.RegisterEffect("scaleUp.moveDown", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: '-90%',
            scale: '0.9',
            boxShadowBlur: '40px'
        }, 0.20],
        [{
            translateY: '0%'
        }, 0.60],
        [{
            translateY: '0%',
            scale: '1',
            boxShadowBlur: '0'
        }, 0.20]
    ]
});
$.Velocity.RegisterEffect("translateUp.delay", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: '0%'
        }, 0.8, {
            delay: 100
        }],
    ]
});
$.Velocity.RegisterEffect("hide.scaleUp", {
    defaultDuration: 1,
    calls: [
        [{
            opacity: '0',
            scale: '1.2'
        }, 1]
    ]
});
$.Velocity.RegisterEffect("hide.scaleDown", {
    defaultDuration: 1,
    calls: [
        [{
            opacity: '0',
            scale: '0.8'
        }, 1]
    ]
});
$.Velocity.RegisterEffect("translateUp.half", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: '-50%'
        }, 1]
    ]
});