jQuery(document).ready(function($) {
    setTimeout(function () {
        $('.hb-line').addClass('active');
    }, 500)
    var lim;
	var checkText=true;
        var text_anim='Хотите заказать интернет-магазин? Ответьте на несколько вопросов по разработке уникального продукта именно для ВАС!';
    function AnimText(index){
        var c=document.getElementById('anim-text');
        lim=text_anim.length;
        if(index==lim){
            return
        }
        c.innerHTML=c.innerHTML+text_anim[index];
        setTimeout(function(){
            AnimText(index+1);
        },80);
    }
    var hijacking = $('body').data('hijacking'),
        animationType = $('body').data('animation'),
        delta = 0,
        scrollThreshold = 1,
        actual = 1,
        animating = !1;
    var sectionsAvailable = $('.cd-section'),
        verticalNav = $('.cd-vertical-nav'),
        downArrow = $('.downArrow'),
        prevArrow = verticalNav.find('a.cd-prev'),
        nextArrow = verticalNav.find('a.cd-next');
    nextArrow2 = downArrow.find('a.down-arrow');
    var MQ = deviceType(),
        bindToggle = !1;
    bindEvents(MQ, !0);
    $(window).on('resize', function() {
        MQ = deviceType();
        bindEvents(MQ, bindToggle);
        if (MQ == 'mobile') bindToggle = !0;
        if (MQ == 'desktop') bindToggle = !1
    });

    function bindEvents(MQ, bool) {
        if (MQ == 'desktop' && bool) {
            if (hijacking == 'on') {
                initHijacking();
                $(window).on('DOMMouseScroll mousewheel', scrollHijacking)
            } else {
                scrollAnimation();
                $(window).on('scroll', scrollAnimation)
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
                            luch++
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
                        $('.waitActive').addClass('activeDashed')
                    }, 100)
                }, 650)
            });
            $(document).on('keydown', function(event) {
                if (event.which == '40' && !nextArrow.hasClass('inactive')) {
                    event.preventDefault();
                    nextSection()
                } else if (event.which == '38' && (!prevArrow.hasClass('inactive') || (prevArrow.hasClass('inactive') && $(window).scrollTop() != sectionsAvailable.eq(0).offset().top))) {
                    event.preventDefault();
                    prevSection()
                }
            });
            checkNavigation()
        } else if (MQ == 'mobile') {
            resetSectionStyle();
            $(window).off('DOMMouseScroll mousewheel', scrollHijacking);
            $(window).off('scroll', scrollAnimation);
            prevArrow.off('click', prevSection);
            nextArrow.off('click', nextSection);
            $(document).off('keydown')
        }
    }

    function scrollAnimation() {
        (!window.requestAnimationFrame) ? animateSection(): window.requestAnimationFrame(animateSection)
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
            (offset >= 0 && offset < windowHeight) ? actualBlock.addClass('visible'): actualBlock.removeClass('visible')
        });
        checkNavigation()
    }

    function transformSection(element, translateY, scaleValue, rotateXValue, opacityValue, boxShadow) {
        element.velocity({
            translateY: translateY + 'vh',
            scale: scaleValue,
            rotateX: rotateXValue,
            opacity: opacityValue,
            boxShadowBlur: boxShadow + 'px',
            translateZ: 0,
        }, 0)
    }

    function initHijacking() {
        var visibleSection = sectionsAvailable.filter('.visible'),
            topSection = visibleSection.prevAll('.cd-section'),
            bottomSection = visibleSection.nextAll('.cd-section'),
            animationParams = selectAnimation(animationType, !1),
            animationVisible = animationParams[0],
            animationTop = animationParams[1],
            animationBottom = animationParams[2];
        visibleSection.children('div').velocity(animationVisible, 1, function() {
            visibleSection.css('opacity', 1);
            topSection.css('opacity', 1);
            bottomSection.css('opacity', 1)
        });
        topSection.children('div').velocity(animationTop, 0);
        bottomSection.children('div').velocity(animationBottom, 0)
    }
    var animate_on = 0;

    function scrollHijacking(event) {
        if (event.originalEvent.detail < 0 || event.originalEvent.wheelDelta > 0) {
            delta--;
            (Math.abs(delta) >= scrollThreshold) && prevSection()
        } else {
            delta++;
            (delta >= scrollThreshold) && nextSection()
        }
        return !1
    }

    function animateOn1() {
        var luch = 1;
        setInterval(function() {
            if (luch < 6) {
                $('#lp-luch' + luch + ' img').animate({
                    opacity: 1
                }, 1000, function() {});
                luch++
            }
        }, 1000);
        $("#lp-luch1 img").css("-webkit-animation", "leaves 2s ease-in-out infinite alternate", "animation", "leaves 2s ease-in-out infinite alternate")
        $('.l-text1, .l-text2, .l-text3, .l-text4').animate({
            opacity: 1
        }, 1000);
        $('.r-text1, .r-text2, .r-text3, .r-text4, .r-text5').animate({
            opacity: 1
        }, 1000);
        setTimeout(function() {
            $('.waitActive').addClass('activeDashed')
        }, 100)
    }
    var luch2 = 1;
    var active_g = 1;

    function animateOn2() {
        if (!$('.svg1').hasClass('a-check')) {
            function timer() {
                if (active_g == 10) {
                    active_g = 1
                }
                if (active_g < 10) {
                    anim()
                }
            }
        }
        var t;

        function timerOn() {
            t = setInterval(function() {
                timer()
            }, 3000)
        }
        timerOn();
        timer();
        $("body").on("mouseenter", ".green_block", function() {
            var id = $(this).data("id");
            $('.text_block').css('fill', '#60ff00');
            $('.green_block').css('opacity', '0');
            $('.black_block').css('opacity', '1');
            $('.green_block[data-id=' + id + ']').css('opacity', '1');
            $('.black_block[data-id=' + id + ']').css('opacity', '0');
            $('.text_block[data-id=' + id + ']').css('fill', '#000');
            $('.text_block[data-id=' + id + ']').css('text-shadow', '0 0 10px rgba(0, 0 ,0 ,0.5)');
            clearInterval(t)
        });
        $("body").on("mouseleave", ".green_block", function() {
            var id = $(this).data("id");
            $('.green_block').css('opacity', '0');
            $('.black_block').css('opacity', '1');
            $('.text_block').css('fill', '#60ff00')
            id++;
            var id2 = id;
            if (id2 == 10) {
                id2 = 1
            }
            active_g = id2;
            t = setInterval(function() {
                timer()
            }, 3000)
        });
        $("body").on("mouseenter", ".text_block", function() {
            var id = $(this).data("id");
            $('.green_block').css('opacity', '0');
            $('.black_block').css('opacity', '1');
            $('.text_block').css('fill', '#60ff00');
            $('.green_block[data-id=' + id + ']').css('opacity', '1');
            $('.black_block[data-id=' + id + ']').css('opacity', '0');
            $('.text_block[data-id=' + id + ']').css('fill', '#000');
            clearInterval(t)
        });
        $("body").on("mouseleave", ".text_block", function() {
            var id = $(this).data("id");
            $('.green_block').css('opacity', '0');
            $('.black_block').css('opacity', '1');
            $('.text_block').css('fill', '#60ff00');
            id++;
            var id2 = id;
            if (id2 == 10) {
                id2 = 1
            }
            active_g = id2;
            t = setInterval(function() {
                timer()
            }, 3000)
        });

        function anim() {
            $('.svg1').addClass('a-check');
            $('.black_block[data-id=' + active_g + ']').css({
                opacity: 0
            });
            $('.text_block[data-id=' + active_g + ']').css('fill', '#000');
            $('.green_block[data-id=' + active_g + ']').animate({
                opacity: 1
            }, 600, function() {
                setTimeout(function() {
                    $('.black_block[data-id=' + active_g + ']').animate({
                        opacity: 1
                    }, 600);
                    $('.text_block[data-id=' + active_g + ']').css('fill', '#60ff00');
                    $('.green_block[data-id=' + active_g + ']').animate({
                        opacity: 0
                    }, 600, function() {
                        active_g++
                    })
                }, 800)
            })
        }
        setInterval(function() {
            if (luch2 < 4) {
                $('#fluch-' + luch2 + ' img').animate({
                    opacity: 1
                }, 1000);
                luch2++
            }
        }, 1000);
        $("#fluch-1").css("-webkit-animation", "leaves 2s ease-in-out infinite alternate", "animation", "leaves 2s ease-in-out infinite alternate")
        var left_luch1 = 1;
        setInterval(function() {
            if (left_luch1 < 3) {
                $('#left-luch' + left_luch1 + ' img').animate({
                    opacity: 1
                }, 1000);
                left_luch1++
            }
        }, 1000);
        $("#left-luch1 img").css("-webkit-animation", "leaves 2s ease-in-out infinite alternate", "animation", "leaves 2s ease-in-out infinite alternate")
    }

    function animateOn3() {
        var p_animate = 6;
        $('.strelka').animate({
            opacity: 1
        }, 1000, function() {
            timer2();
            timerOn()
        });
        if (!$('.line6').hasClass('a-check')) {
            function timer2() {
                if (p_animate == 0) {
                    p_animate = 6
                }
                if (p_animate <= 6 && p_animate != 0) {
                    anim()
                }
            }
        }

        function timerOn() {
            setInterval(function() {
                timer2()
            }, 2500)
        }
        var last_animate = 0;

        function anim() {
            $('.line' + p_animate).addClass('a-check').css('width', '55px');
            setTimeout(function() {
                $('.kicon' + last_animate).animate({
                    opacity: 0
                }, 700);
                $('.kicon' + p_animate).animate({
                    opacity: 1
                }, 800, function() {
                    setTimeout(function() {
                        $('.line' + p_animate).css('width', '0');
                        last_animate = p_animate;
                        p_animate--
                    }, 200)
                })
            }, 400)
        }
        var left_luch = 1;
        setInterval(function() {
            if (left_luch < 3) {
                $('#leftluch' + left_luch + ' img').animate({
                    opacity: 1
                }, 1000);
                left_luch++
            }
        }, 1000);
        $("#leftluch1 img").css("-webkit-animation", "leaves 2s ease-in-out infinite alternate", "animation", "leaves 2s ease-in-out infinite alternate")
    }
    var luch3 = 1;
    var luch4 = 1;

    function animateOn4() {
        $('.partners-box.first').addClass('active').animate({opacity: 1}, 1500, function () {
            $('.partners-box.second').addClass('active').animate({opacity: 1}, 1500, function () {
                $('.partners-box.third').addClass('active').animate({opacity: 1}, 1500, function () {

                })
            })
        })
        setInterval(function() {
            if (luch3 < 3) {
                $('#comluch-' + luch3 + ' img').animate({
                    opacity: 1
                }, 1000);
                luch3++
            }
        }, 1000);
        $("#comluch-1").css("-webkit-animation", "leaves 2s ease-in-out infinite alternate", "animation", "leaves 2s ease-in-out infinite alternate")
        setInterval(function() {
            if (luch4 < 4) {
                $('#bluch' + luch4 + ' img').animate({
                    opacity: 1
                }, 1000);
                luch4++
            }
        }, 1000);
        $("#bluch1 img").css("-webkit-animation", "leaves 2s ease-in-out infinite alternate", "animation", "leaves 2s ease-in-out infinite alternate")
        if (!$('.petr').hasClass('a-check')) {
            $('.petr').addClass('animated-team  petr-on a-check').animate({
                opacity: 1
            }, 2500, function() {
                $('.petr').removeClass('animated-team  petr-on');
                $('#dos-rhand').addClass('animated-team  dos-on').animate({
                    opacity: 1
                }, 2500, function() {
                    $('#dos-rhand').removeClass('animated-team  dos-on');
                    $('#andriy-rhand').addClass('animated-team  andriy-on').animate({
                        opacity: 1
                    }, 2500, function() {
                        $('#andriy-rhand').removeClass('animated-team  andriy-on');
                        $('#yuliya-rhand').addClass('animated-team  yuliya-on').animate({
                            opacity: 1
                        }, 2500, function() {
                            $('#yuliya-rhand').removeClass('animated-team  yuliya-on');
                            $('#dmitrii-lhand').addClass('animated-team  dmitrii-on').animate({
                                opacity: 1
                            }, 2500, function() {
                                $('#dmitrii-lhand').removeClass('animated-team  dmitrii-on')
                            })
                        })
                    })
                })
            });
            setInterval(function() {
                $('.petr').addClass('animated-team  petr-on').animate({
                    opacity: 1
                }, 2500, function() {
                    $('.petr').removeClass('animated-team  petr-on');
                    $('#dos-rhand').addClass('animated-team  dos-on').animate({
                        opacity: 1
                    }, 2500, function() {
                        $('#dos-rhand').removeClass('animated-team  dos-on');
                        $('#andriy-rhand').addClass('animated-team  andriy-on').animate({
                            opacity: 1
                        }, 2500, function() {
                            $('#andriy-rhand').removeClass('animated-team  andriy-on');
                            $('#yuliya-rhand').addClass('animated-team  yuliya-on').animate({
                                opacity: 1
                            }, 2500, function() {
                                $('#yuliya-rhand').removeClass('animated-team  yuliya-on');
                                $('#dmitrii-lhand').addClass('animated-team  dmitrii-on').animate({
                                    opacity: 1
                                }, 2500, function() {
                                    $('#dmitrii-lhand').removeClass('animated-team  dmitrii-on')
                                })
                            })
                        })
                    })
                })
            }, 15000)
        }
    }

    $('.like_project').click(function() {
        $(this).children('i').toggleClass('active')
    });

    if($(window).width() < 1049) {
        $("body").on("click", "#carousel-portfolio .item", function () {
            var id = $(this).data("id")
            $('body').addClass('body-fix');
            $('.customNavigation a').css('opacity', '0');
            $('.content-modal').empty();
            $('.content-modal').append('<img src="assets/img/portfolio/modal/modal' + id + '.jpg">');
            if (id == 2 || id == 5 || id == 6 || id == 7) {
                $('.content-modal img').addClass('help_img')
            }
            $('.portfolio-modal').fadeIn();
            $('.main-modal-block').css('opacity', '1').addClass('animated zoomIn');
            $('.pshadow' + id).css({
                opacity: 1
            });
            if ($(window).width() > 1049) {
                $(window).off('DOMMouseScroll mousewheel', scrollHijacking)
            }
        });
    } else {
        $("body").on("click","#carousel-portfolio .item",function(e){
            e.preventDefault();
            var image_id=$(this).data('id');
            var href_project = $(this).data('href');
            var modal = $('.modal[data-id=modal-portfolio]');
            var image = $('<img>',{
                src : `assets/img/portfolio/modal/modal${image_id}.jpg`
                // ,
                // css : {"margin-top" : $('.h_top').outerHeight(true)+"px"}
            });
            $(modal).fadeIn();
            $(modal).find('.image').empty();
            $(modal).find('.image').append(image);
            // $('header .h_top').css({"z-index" : 101});
            var want_btn = $('<div>',{
                class : 'btn modal_link',
                text : 'ХОЧУ ПОДОБНЫЙ',
                "data-id" : "zakaz"
            });
            var site_btn = $('<a>',{
                class : 'btn',
                text : 'ПЕРЕЙТИ НА САЙТ',
                target : "_blank",
                href : href_project
            });
            $('.line_btn').html(want_btn);
            if (href_project) {
                $('.line_btn').append(site_btn);
            }
            $('.like_project i').removeClass('active')
            $(window).off('DOMMouseScroll mousewheel');
            $('.modal-portfolio').scrollTop(0);
        });
    }
    $("body").on("mouseenter", "#carousel-portfolio .item", function() {
        var id = $(this).data("id")
        $('.pshadow' + id).css({
            opacity: 1
        })
    });
    $("body").on("mouseleave", "#carousel-portfolio .item", function() {
        var id = $(this).data("id")
        $('.pshadow' + id).css({
            opacity: 0
        })
    });
    $("body").on("click", ".close-pop", function() {
        setTimeout(function() {
            $('body').removeClass('body-fix')
        }, 320);
        $('.customNavigation a').css('opacity', '1');
        $('.modal, .modal2').fadeOut();
        if ($(window).width() > 1049) {
            $(window).on('DOMMouseScroll mousewheel', scrollHijacking)
        }
    });
    $("body").on("click", ".close-modal, .close_modal", function() {
        setTimeout(function() {
            $('body').removeClass('body-fix')
        }, 320);
        $('.customNavigation a').css('opacity', '1');
        $('.modal, .modal2').fadeOut();
        if ($(window).width() > 1049) {
            $(window).on('DOMMouseScroll mousewheel', scrollHijacking)
        }
    });
    $("body").on("click", "#sendmButton", function() {
        var id = $(this).data("id");
        $('body').addClass('body-fix');
        $('.modal2[data-id=' + id + ']').fadeIn();
        $('.order-modal-block').css('opacity', '1').addClass('animated zoomIn')
    });
    $("body").on("click", ".btn-zakaz", function() {
        var id = $(this).data("id");
        $('body').addClass('body-fix');
        $('.modal2[data-id=' + id + ']').fadeIn();
        $('.order-modal-block').css('opacity', '1').addClass('animated zoomIn')
    });
    $('body').on("click", ".order-btn, .order-btn2", function() {
        var id = $(this).data("id");
        $('.modal2[data-id=' + id + ']').fadeIn();
        $('.zakaz-modal-block').css('opacity', '1').addClass('animated zoomIn');
        if ($(window).width() > 1049) {
            $(window).off('DOMMouseScroll mousewheel', scrollHijacking)
        }
    });
    $("body").on("click", "#sendmButton2", function() {
        var id = $(this).data("id")
        $('body').addClass('body-fix');
        $('.modal2').fadeIn();
        $('.order-modal-block').css('opacity', '1').addClass('animated zoomIn')
    });
    $("body").on("click", "#cbtn2", function() {
        var id = $(this).data("id")
        $('body').addClass('body-fix');
        $('.modal2[data-id=' + id + ']').fadeIn();
        $('.mail-modal-block').css('opacity', '1').addClass('animated zoomIn')
    });

    function prevSection(event) {
        typeof event !== 'undefined' && event.preventDefault();
        var visibleSection = sectionsAvailable.filter('.visible'),
            middleScroll = (hijacking == 'off' && $(window).scrollTop() != visibleSection.offset().top) ? !0 : !1;
        visibleSection = middleScroll ? visibleSection.next('.cd-section') : visibleSection;
        var animationParams = selectAnimation(animationType, middleScroll, 'prev');
        unbindScroll(visibleSection.prev('.cd-section'), animationParams[3]);
        if (!animating && !visibleSection.is(":first-child")) {
            animating = !0;
            if (animate_on != 0) animate_on--;
            visibleSection.removeClass('visible').children('div').velocity(animationParams[2], animationParams[3], animationParams[4]).end().prev('.cd-section').addClass('visible').children('div').velocity(animationParams[0], animationParams[3], animationParams[4], function() {
                animating = !1;
                if (hijacking == 'off') $(window).on('scroll', scrollAnimation)
            });
            actual = actual - 1
        }
        if (animate_on == 0) {
            $('.forma, .forma .form1, .forma .form2 ').removeClass('active');
            $('.phone_form,.smile_form ').slideUp();
            $('.form2').removeClass('moveTogether');
        }
        resetScroll()
    }
    var hash = window.location.hash;
    var firstAnimate = !1;
    if (!firstAnimate && hash == '#structure') {
        nextSection();
        firstAnimate = !0
    } else if (!firstAnimate && hash == '#portfolio') {
        nextSection();
        setTimeout(function() {
            nextSection()
        }, 1500);
        firstAnimate = !0
    } else if (!firstAnimate && hash == '#online-store') {
        nextSection();
        setTimeout(function() {
            nextSection()
        }, 1500);
        setTimeout(function() {
            nextSection()
        }, 3000);
        firstAnimate = !0
    } else if (!firstAnimate && hash == '#admin-panel') {
        nextSection();
        setTimeout(function() {
            nextSection()
        }, 1500);
        setTimeout(function() {
            nextSection()
        }, 3000);
        setTimeout(function() {
            nextSection()
        }, 4500);
        firstAnimate = !0
    }
    else if (!firstAnimate && hash == '#part') {
        nextSection();
        setTimeout(function() {
            nextSection()
        }, 1500);
        setTimeout(function() {
            nextSection()
        }, 3000);
        setTimeout(function() {
            nextSection()
        }, 4500);
        setTimeout(function() {
            nextSection()
        }, 6000);
        firstAnimate = !0
    }

    function nextSection(event) {
        typeof event !== 'undefined' && event.preventDefault();
        var visibleSection = sectionsAvailable.filter('.visible'),
            middleScroll = (hijacking == 'off' && $(window).scrollTop() != visibleSection.offset().top) ? !0 : !1;
        var animationParams = selectAnimation(animationType, middleScroll, 'next');
        unbindScroll(visibleSection.next('.cd-section'), animationParams[3]);
        if (!animating && !visibleSection.is(":last-of-type")) {
            animating = !0;
            visibleSection.removeClass('visible').children('div').velocity(animationParams[1], animationParams[3], animationParams[4]).end().next('.cd-section').addClass('visible').children('div').velocity(animationParams[0], animationParams[3], animationParams[4], function() {
                animate_on++;
                if (animate_on == 1) {
                    animateOn1();
                	if(checkText){
                        setTimeout(function () {
                            AnimText(0)
                        },1000)
                        checkText=false;
                    }
                    $('.step-gif,.qitem-r').removeClass('opac').addClass('bounceInUp');
                    $('.wimg').removeClass('opac').addClass('zoomIn2');
                }
                if (animate_on == 2) {
                    $('.ctitle').removeClass('opac').addClass('bounceInDown');
                    $('.cform').removeClass('opac').addClass('bounceInUp');
                }
                if (animate_on == 3) {
                    animateOn2();
                    $('.bl-item1').removeClass('opac').addClass('bounceInLeft');
                    $('.bl-item2').removeClass('opac').addClass('bounceInRight');
                } else if (animate_on == 4) {
                    animateOn3();
                    animate_on = 4;
                } else if (animate_on == 5) {
                    animateOn4();
                    animate_on = 5
                }
                animating = !1;
                if (hijacking == 'off') $(window).on('scroll', scrollAnimation)
            });
            actual = actual + 1
        }
        if (!$('.forma').hasClass('active')) {
            $('.forma').addClass('active');
        }
        resetScroll()
    }

    function unbindScroll(section, time) {
        if (hijacking == 'off') {
            $(window).off('scroll', scrollAnimation);
            (animationType == 'catch') ? $('body, html').scrollTop(section.offset().top): section.velocity("scroll", {
                duration: time
            })
        }
    }

    function resetScroll() {
        delta = 0;
        checkNavigation()
    }

    function checkNavigation() {
        (sectionsAvailable.filter('.visible').is(':first-of-type')) ? prevArrow.addClass('inactive'): prevArrow.removeClass('inactive');
        (sectionsAvailable.filter('.visible').is(':last-of-type')) ? nextArrow.addClass('inactive'): nextArrow.removeClass('inactive')
    }

    function resetSectionStyle() {
        sectionsAvailable.children('div').each(function() {
            $(this).attr('style', '')
        })
    }

    function deviceType() {
        return window.getComputedStyle(document.querySelector('body'), '::before').getPropertyValue('content').replace(/"/g, "").replace(/'/g, "")
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
                    animationBottom = 'translateNone'
                } else {
                    animationTop = 'rotation';
                    easing = 'easeInCubic'
                }
                break;
            case 'gallery':
                animDuration = 1500;
                if (middleScroll) {
                    animationTop = 'scaleDown.moveUp.scroll';
                    animationVisible = 'scaleUp.moveUp.scroll';
                    animationBottom = 'scaleDown.moveDown.scroll'
                } else {
                    animationVisible = (direction == 'next') ? 'scaleUp.moveUp' : 'scaleUp.moveDown';
                    animationTop = 'scaleDown.moveUp';
                    animationBottom = 'scaleDown.moveDown'
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
                break
        }
        return [animationVisible, animationTop, animationBottom, animDuration, easing]
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
                        boxShadowBlur = 400 * (1 + sectionOffset / windowHeight)
                    } else if (sectionOffset >= -0.9 * windowHeight && sectionOffset < -0.1 * windowHeight) {
                        scale = 0.9;
                        translateY = -(9 / 8) * (sectionOffset + 0.1 * windowHeight) * 100 / windowHeight;
                        boxShadowBlur = 40
                    } else {
                        scale = 1 + sectionOffset / windowHeight;
                        translateY = 0;
                        boxShadowBlur = -400 * sectionOffset / windowHeight
                    }
                    break;
                case 'catch':
                    if (sectionOffset >= -windowHeight && sectionOffset < -0.75 * windowHeight) {
                        translateY = 100;
                        boxShadowBlur = (1 + sectionOffset / windowHeight) * 160
                    } else {
                        translateY = -(10 / 7.5) * sectionOffset * 100 / windowHeight;
                        boxShadowBlur = -160 * sectionOffset / (3 * windowHeight)
                    }
                    break;
                case 'opacity':
                    translateY = 0;
                    scale = (sectionOffset + 5 * windowHeight) * 0.2 / windowHeight;
                    opacity = (sectionOffset + windowHeight) / windowHeight;
                    break
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
                        boxShadowBlur = 400 * sectionOffset / windowHeight
                    } else if (sectionOffset >= 0.1 * windowHeight && sectionOffset < 0.9 * windowHeight) {
                        scale = 0.9;
                        translateY = -(9 / 8) * (sectionOffset - 0.1 * windowHeight / 9) * 100 / windowHeight;
                        boxShadowBlur = 40
                    } else {
                        scale = sectionOffset / windowHeight;
                        translateY = -100;
                        boxShadowBlur = 400 * (1 - sectionOffset / windowHeight)
                    }
                    break;
                case 'catch':
                    if (sectionOffset >= 0 && sectionOffset < windowHeight / 2) {
                        boxShadowBlur = sectionOffset * 80 / windowHeight
                    } else {
                        boxShadowBlur = 80 * (1 - sectionOffset / windowHeight)
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
                    break
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
                    break
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
                    break
            }
        }
        return [translateY, scale, rotateX, opacity, boxShadowBlur]
    }
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
})