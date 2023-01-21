jQuery(document).ready(function($) {

    $("body").on("click", ".modal_link", function(e) {
        e.preventDefault();
        var id = $(this).attr("href");
        $('.modal2[data-id=' + id + ']').fadeIn();
        $('.zakaz-modal-text-block').css('opacity', '1').addClass('animated zoomIn');
        if ($(window).width() > 1049) {
            $(window).off('DOMMouseScroll mousewheel', scrollHijacking);
        }
    });

    setTimeout(function () {
        $('.hb-line').addClass('active');
    }, 500)
    var lim;
    function AnimText(index){
        var text_anim='Собери свою СЭД';
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
    var onetrue = false;
    function animateOnNew() {
        setInterval(function() {
            if (luch2 < 4) {
                $('#fluch-' + luch2 + ' img').animate({
                    opacity: 1
                }, 1000);
                luch2++
            }
        }, 1000);
        $("#fluch-1").css("-webkit-animation", "leaves 2s ease-in-out infinite alternate", "animation", "leaves 2s ease-in-out infinite alternate")
        var once2 = !1;
        $("#left-luch1 img").css("-webkit-animation", "leaves 2s ease-in-out infinite alternate", "animation", "leaves 2s ease-in-out infinite alternate")

        if(!onetrue){
            onetrue = true;
            $('.po-f-item').removeClass('active').animate({opacity: '1'}, 1000, function() {
                $('.pp1 .p-border').addClass('active').animate({opacity: '1'}, 1000, function() {
                    $('.pp1 .ab-img').addClass('active').animate({opacity: '1'}, 1000, function() {
                        $('.pp2 .p-border').addClass('active').animate({opacity: '1'}, 1000, function() {
                            $('.pp2 .ab-img').addClass('active').animate({opacity: '1'}, 1000, function() {
                                $('.pp3 .p-border').addClass('active').animate({opacity: '1'}, 1000, function() {
                                    $('.pp3 .ab-img').addClass('active').animate({opacity: '1'}, 1000, function() {
                                        $('.pp4 .p-border').addClass('active').animate({opacity: '1'}, 1000, function() {
                                            $('.pp4 .ab-img').addClass('active').animate({opacity: '1'}, 1000, function() {
                                                $('.pp5 .p-border').addClass('active').animate({opacity: '1'}, 1000, function() {
                                                    $('.pp5 .ab-img').addClass('active').animate({opacity: '1'}, 1000, function() {
                                                        $('.po-f-item, .ab-img').css('transition', '0s');
                                                        $(window).mousemove(function(e) {
                                                            var change;
                                                            var xpos=e.clientX;var ypos=e.clientY;var left= change*20;
                                                            var  xpos=xpos*2;ypos=ypos*2;
                                                            // $('.ab-paral').css('top',((145+(ypos/100))+"%"));
                                                            $('.ab-paral').css('left',(( 0+(xpos/140))+"px"));

                                                            // $('.ab-paral2').css('top',((152+(ypos/100))+"%"));
                                                            $('.ab-paral2').css('right',(( 0+(xpos/120))+"px"));

                                                            // $('.ab-paral3').css('top',((139+(ypos/100))+"%"));
                                                            $('.ab-paral3').css('left',(( 0+(xpos/100))+"px"));

                                                            // $('.ab-paral4').css('top',((131+(ypos/100))+"%"));
                                                            $('.ab-paral4').css('right',(( 0+(xpos/150))+"px"));

                                                            // $('.ab-paral5').css('top',((152+(ypos/100))+"%"));
                                                            $('.ab-paral5').css('left',(( 0+(xpos/160))+"px"));

                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }
    }
    var one_an1 = true;
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
        $("#lp-luch1 img").css("-webkit-animation", "leaves 2s ease-in-out infinite alternate", "animation", "leaves 2s ease-in-out infinite alternate");
        $('.b2').animate({
            opacity: '1'
        }, 1000, function() {
            $('.b3').css("-webkit-animation", "leaves 2s ease-in-out infinite alternate", "animation", "leaves 2s ease-in-out infinite alternate").animate({
                opacity: '1'
            }, 1000, function() {
                $('.b1').animate({
                    opacity: '1'
                }, 1000, function() {});
            });
        });
        $('.po1 .home2').addClass('active').animate({opacity: '1'}, 2000, function() {
            $('.po1 .home3').addClass('active').animate({opacity: '1'}, 1000, function() {
                $('.po1 .po-num').addClass('active').animate({opacity: '1'}, 1000, function() {
                    $('.po1 .mm-blick').addClass('active animated zoomIn');
                    $('.po1 .an-imgg').addClass('active animated tada').animate({opacity: '1'}, 1000, function() {
                        $('.po2 .home2').addClass('active').animate({opacity: '1'}, 2000, function() {
                            $('.po2 .home3').addClass('active').animate({opacity: '1'}, 1000, function() {
                                $('.po2 .po-num').addClass('active').animate({opacity: '1'}, 1000, function() {
                                    $('.po2 .mm-blick').addClass('active animated zoomIn');
                                    $('.po2 .an-imgg').addClass('active animated tada').animate({opacity: '1'}, 1000, function() {
                                        $('.po3 .home2').addClass('active').animate({opacity: '1'}, 2000, function() {
                                            $('.po3 .home3').addClass('active').animate({opacity: '1'}, 1000, function() {
                                                $('.po3 .po-num').addClass('active').animate({opacity: '1'}, 1000, function() {
                                                    $('.po3 .mm-blick').addClass('active animated zoomIn');
                                                    $('.po3 .an-imgg').addClass('active animated tada').animate({opacity: '1'}, 1000, function() {
                                                        onceMMob = true;
                                                        function ggg() {
                                                            animateOn2(1);
                                                            once = true;
                                                        }
                                                        if (one_an1){
                                                            one_an1 = false;
                                                            ggg();
                                                        }

                                                        function animateOn2(activeTxt) {
                                                            if (activeTxt == 1) {
                                                                activeTxt = 2;
                                                            }
                                                            if (activeTxt == 5) {
                                                                activeTxt = 1;
                                                                animateOn2(activeTxt + 1);
                                                            }
                                                            if (onceMMob && activeTxt == 1) {
                                                                return;
                                                            }
                                                            $('.ac-block[data-id=' + activeTxt + ']').addClass('animated bounce');
                                                            setTimeout(function() {
                                                                $('.ac-block[data-id=' + activeTxt + ']').removeClass('animated bounce');
                                                                if (!onceMMob && activeTxt == 1) {
                                                                    return;
                                                                }
                                                                animateOn2(activeTxt + 1);
                                                            }, 2700);
                                                        };
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });

        var t2;

        function timerOn() {
            t2 = setInterval(function() {
                timer2()
            }, 2000)
        }
        timerOn();
        $("body").on("mouseenter", ".kind-txt", function() {
            var id = $(this).data("id");
            $('.kind-txt').css({
                'background': 'transparent',
                'border': '1px solid #fff',
                'border-left': '0'
            });
            $('.kind-txt2,  .kind-number').css('color', '#fff');
            $('.kind-title').css({
                'color': '#fff',
                'text-shadow': '-6px -5px 30px rgba(103, 109, 83, 1), 3px 7px 30px rgba(103, 109, 83, 1)'
            });
            $('.kind-title, .go_to').css('color', '#60ff00');
            $('.kind-txt-img').hide();
            if (id == 2 || id == 3) {
                $('.kind-txt[data-id=' + id + ']').css({
                    'border': '1px solid #60ff00',
                    'border-left': '0'
                });
                $('.kind-txt-img[data-id=' + id + ']').show();
                $('.kind-txt2[data-id=' + id + '], .go_to[data-id=' + id + ']').css('color', '#000');
                $('.kind-number[data-id=' + id + ']').css('color', '#60ff00');
                $('.kind-title[data-id=' + id + ']').css({
                    'color': '#000',
                    'text-shadow': '0px 0px 0px rgba(103, 109, 83, 1), 0px 0px 0px rgba(103, 109, 83, 1)'
                });
                $('.kinds-imgs').hide().promise().done(function() {
                    $('.kinds-imgs[data-id=' + id + ']').show();
                    id++
                })
            } else {
                $('.kind-txt-img').hide();
                $('.kind-txt[data-id=' + id + ']').css({
                    'background': '#60ff00',
                    'border': '1px solid #60ff00',
                    'border-left': '0'
                });
                $('.kind-txt2[data-id=' + id + '], .go_to[data-id=' + id + ']').css('color', '#000');
                $('.kind-number[data-id=' + id + ']').css('color', '#60ff00');
                $('.kind-title[data-id=' + id + ']').css({
                    'color': '#000',
                    'text-shadow': '0px 0px 0px rgba(103, 109, 83, 1), 0px 0px 0px rgba(103, 109, 83, 1)'
                });
                $('.kinds-imgs').hide().promise().done(function() {
                    $('.kinds-imgs[data-id=' + id + ']').show();
                    id++
                })
            }
            id++;
            var id2 = id;
            if (id2 == 5) {
                id2 = 1
            }
            p_animate = id2;
            clearInterval(t2)
        });
        $("body").on("mouseleave", ".kind-txt", function() {
            var id = $(this).data("id");
            id++;
            var id2 = id;
            if (id2 == 5) {
                id2 = 1
            }
            p_animate = id2;
            clearInterval(t2);
            t2 = setInterval(function() {
                timer2()
            }, 2000)
        })
    }
    var luch2 = 1;
    var onetrue2 = false;

    var one_an3 = true;
    function animateOn2() {
        onceMMob222 = true;
        function ggg222() {
            animateOn222(1);
            once222 = true;
        }

        if(one_an3){
            one_an3 = false;
            ggg222();
        }
        console.log(one_an3)

        function animateOn222(activeTxt) {
            if (activeTxt == 1) {
                activeTxt = 2;
            }
            if (activeTxt == 9) {
                activeTxt = 1;
                animateOn222(activeTxt + 1);
            }
            if (onceMMob222 && activeTxt == 1) {
                return;
            }
            $('.cc-item[data-id=' + activeTxt + ']').addClass('active');
            $('.cc-item[data-id=' + activeTxt + '] .c-2 .f-none').addClass('animated bounce');
            $('.cc-item[data-id=' + activeTxt + '] .c-pulse').addClass('active');
            setTimeout(function() {
                $('.cc-item[data-id=' + activeTxt + ']').removeClass('active');
                $('.cc-item[data-id=' + activeTxt + '] .c-2 .f-none').removeClass('animated bounce');
                $('.cc-item[data-id=' + activeTxt + '] .c-pulse').removeClass('active');
                if (!onceMMob222 && activeTxt == 1) {
                    return;
                }
                animateOn222(activeTxt + 1);
            }, 3000);
        };

    }
    function animateOn3() {
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

    var one_an = true;
    function animateOn4() {
        $('.bg-box[data-id=' + 2 + ']').addClass('active').find('.bg-c').addClass('animated tada').animate({opacity: 1}, 1500, function () {
            $('.bg-box[data-id=' + 3 + ']').addClass('active').find('.bg-c').addClass('animated tada').animate({opacity: 1}, 1500, function () {
                $('.bg-box[data-id=' + 4 + ']').addClass('active').find('.bg-c').addClass('animated tada').animate({opacity: 1}, 1500, function () {
                    $('.bg-box[data-id=' + 5 + ']').addClass('active').find('.bg-c').addClass('animated tada').animate({opacity: 1}, 1500, function () {
                        $('.bg-box[data-id=' + 6 + ']').addClass('active').find('.bg-c').addClass('animated tada').animate({opacity: 1}, 1500, function () {
                            $('.bg-box[data-id=' + 7 + ']').addClass('active').find('.bg-c').addClass('animated tada').animate({opacity: 1}, 1500, function () {
                                onceMMob22 = true;
                                function ggg22() {
                                    animateOn22(1);
                                    once22 = true;
                                }
                                if(one_an){
                                    one_an = false;
                                    ggg22();

                                }


                                function animateOn22(activeTxt) {
                                    if (activeTxt == 1) {
                                        activeTxt = 2;
                                    }
                                    if (activeTxt == 8) {
                                        activeTxt = 1;
                                        animateOn22(activeTxt + 1);
                                    }
                                    if (onceMMob22 && activeTxt == 1) {
                                        return;
                                    }
                                    $('.bg-box[data-id=' + activeTxt + '] .bg-c').addClass('bounce');
                                    setTimeout(function() {
                                        $('.bg-box[data-id=' + activeTxt + '] .bg-c').removeClass('bounce');
                                        if (!onceMMob22 && activeTxt == 1) {
                                            return;
                                        }
                                        animateOn22(activeTxt + 1);
                                    }, 1500);
                                };

                            });
                        });
                    });
                });
            });
        });
    }
    function animateOn5() {
        $('.partners-box.first').addClass('active').animate({opacity: 1}, 1500, function () {
            $('.partners-box.second').addClass('active').animate({opacity: 1}, 1500, function () {
                $('.partners-box.third').addClass('active').animate({opacity: 1}, 1500, function () {

                })
            })
        })
    }
    $("body").on("click", "#carousel-portfolio .item", function() {
        var id = $(this).data("id")
        $('body').addClass('body-fix');
        $('.content-modal').empty();
        $('.content-modal').append('<img src="assets/img/portfolio/modal/modal' + id + '.jpg">');
        if (id == 1 || id == 3 || id == 5 || id == 7 || id == 9 || id == 14 || id == 20 || id == 21) {
            $('.content-modal img').addClass('help_img')
        }
        $('.modal').fadeIn();
        $('.main-modal-block').css('opacity', '1').addClass('animated zoomIn');
        $('.customNavigation a').css('opacity', '0');
        $('.pshadow' + id).css({
            opacity: 1
        });
        if ($(window).width() > 1049) {
            $(window).off('DOMMouseScroll mousewheel', scrollHijacking)
        }
    });
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
    $("body").on("click", ".close-modal", function() {
        setTimeout(function() {
            $('body').removeClass('body-fix')
        }, 320);
        $('.customNavigation a').css('opacity', '1');
        $('.modal, .modal2').fadeOut();
        if ($(window).width() > 1049) {
            $(window).on('DOMMouseScroll mousewheel', scrollHijacking)
        }
    });
    $("body").on("click", "#sendmButton, .sed-but, .zak, .sed-but22", function() {
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
    // $("body").on("click", "#cbtn2", function() {
    //     var id = $(this).data("id")
    //     $('.modal2[data-id=' + id + ']').fadeIn();
    //     $('.mail-modal-block').css('opacity', '1').addClass('animated zoomIn')
    // });

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
        if(animate_on == 0){$('.forma, .forma .form1, .forma .form2 ').removeClass('active');$('.phone_form,.smile_form ').slideUp();$('.form2').removeClass('moveTogether');}
        resetScroll()
    }
    var ahref = 0;
    var hash = window.location.hash;
    var firstAnimate = false;
    if (!firstAnimate && hash == '#structure') {
        nextSection()
    }
    if (!firstAnimate && hash == '#portfolio') {
        nextSection();
        setTimeout(function() {
            nextSection()
        }, 1000)
    }
    if (!firstAnimate && hash == '#preim') {
        nextSection();
        setTimeout(function() {
            nextSection()
        }, 1000);
        setTimeout(function() {
            nextSection()
        }, 2000)
    }
    if (!firstAnimate && hash == '#company') {
        nextSection();
        setTimeout(function() {
            nextSection()
        }, 1000);
        setTimeout(function() {
            nextSection()
        }, 2000);
        setTimeout(function() {
            nextSection()
        }, 3000)
    }
    if (!firstAnimate && hash == '#part') {
        nextSection();
        setTimeout(function() {
            nextSection()
        }, 1000);
        setTimeout(function() {
            nextSection()
        }, 2000);
        setTimeout(function() {
            nextSection()
        }, 3000);
        setTimeout(function() {
            nextSection()
        }, 4000)
    }
    if (!firstAnimate && hash == '#vygod') {
        nextSection();
        setTimeout(function() {
            nextSection()
        }, 1000);
        setTimeout(function() {
            nextSection()
        }, 2000);
        setTimeout(function() {
            nextSection()
        }, 3000);
        setTimeout(function() {
            nextSection()
        }, 4000);
    }
    if (!firstAnimate && hash == '#part') {
        nextSection();
        setTimeout(function() {
            nextSection()
        }, 1000);
        setTimeout(function() {
            nextSection()
        }, 2000);
        setTimeout(function() {
            nextSection()
        }, 3000);
        setTimeout(function() {
            nextSection()
        }, 4000);
        setTimeout(function() {
            nextSection()
        }, 5000);
    }
    if (!firstAnimate && hash == '#statistics') {
        nextSection();
        setTimeout(function() {
            nextSection()
        }, 1000);
        setTimeout(function() {
            nextSection()
        }, 2000);
        setTimeout(function() {
            nextSection()
        }, 3000);
        setTimeout(function() {
            nextSection()
        }, 4000);
        setTimeout(function() {
            nextSection()
        }, 5000);
        setTimeout(function() {
            nextSection()
        }, 6000);
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
                    animateOn1()
                    $('.ctitle').removeClass('opac').addClass('bounceInDown');
                    $('.cform').removeClass('opac').addClass('bounceInUp');
                }
                if (animate_on == 2) {
                    animateOnNew()
                }
                if (animate_on == 3) {
                    animateOn2()
                    $('.bt').removeClass('opac').addClass('bounceInUp');
                } else if (animate_on == 4) {
                    animateOn3();
                    animate_on = 4
                    $('.sed-call').removeClass('opac').addClass('fadeInUp');
                    setTimeout(function () {
                        $('.sed-but').removeClass('opac').addClass('fadeInUp').css({'pointer-events':'none'});
						setTimeout(function () {
							$('.sed-but').removeClass('fadeInUp').css({'pointer-events':'all'});
						}, 1500);
                    }, 800);
                } else if (animate_on == 5) {
                    animateOn4();
                    animate_on = 5;
                }
                else if (animate_on == 6) {
                    animateOn5();
                    animate_on = 6
                }
                animating = !1;
                if (hijacking == 'off') $(window).on('scroll', scrollAnimation)
            });
            actual = actual + 1
        }
        if(!$('.forma').hasClass('active')){$('.forma').addClass('active');}
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