$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > $('header .htop').outerHeight(!0) + 150) {
            $('.htop2').show();
        } else if ($(this).scrollTop() < $('header .htop').outerHeight(!0) + 150) {
            $('.htop2').hide();
        }
    })
    if ($(window).width() > 1049) {
        $('.owl-item').css('width', 'auto');

    } else {
        $('.button-mob').click(function() {
            $('.button-mob').fadeOut(0).promise().done(function() {
                $('p.m-hidden').fadeIn()
            })
        });
        var scrollPosM = $('.market-header').offset().top - 200;
        var onceM = !1;
        $(window).scroll(function() {
            var scrolled = $(window).scrollTop();
            if ((scrolled > scrollPosM) && !onceM) {
                onceM = !0;
                var once = !1;

                function ggg() {
                    animateOn(1);
                    once = !0
                }
                ggg();

                function animateOn(activeTxt) {
                    if (activeTxt == 1) {
                        activeTxt = 2
                    }
                    if (activeTxt == 10) {
                        activeTxt = 1;
                        animateOn(activeTxt + 1)
                    }
                    if (once && activeTxt == 1) {
                        return
                    }
                    $('.b-img[data-id=' + activeTxt + ']').addClass('active');
                    setTimeout(function() {
                        $('.b-img[data-id=' + activeTxt + ']').removeClass('active');
                        if (!once && activeTxt == 1) {
                            return
                        }
                        animateOn(activeTxt + 1)
                    }, 2500)
                }



                var once222 = !1;

                function ggg222() {
                    animateOn222(1);
                    once222 = !0
                }
                ggg222();

                function animateOn222(activeTxt) {
                    if (activeTxt == 1) {
                        activeTxt = 2
                    }
                    if (activeTxt == 4) {
                        activeTxt = 1;
                        animateOn222(activeTxt + 1)
                    }
                    if (once222 && activeTxt == 1) {
                        return
                    }
                    $('.branding-item[data-mob=' + activeTxt + ']').addClass('active');
                    $('.branding-item[data-mob=' + activeTxt + ']').find('.brandin-header img').addClass('animated bounce');
                    setTimeout(function() {
                        $('.branding-item[data-mob=' + activeTxt + ']').removeClass('active');
                        $('.branding-item[data-mob=' + activeTxt + ']').find('.brandin-header img').removeClass('animated bounce');
                        if (!once222 && activeTxt == 1) {
                            return
                        }
                        animateOn222(activeTxt + 1)
                    }, 2500)
                }
            }
        })
    }
    $(".sostav-item").hover(function() {
        $(this).find('.sostav-body').addClass('active')
    }, function() {
        $(this).find('.sostav-body').removeClass('active')
    });
    $(".m-item").hover(function() {
        $(this).addClass('active')
        $(this).find('span').css('opacity', '1');
    }, function() {
        $(this).removeClass('active')
        $(this).find('span').css('opacity', '0');
    });
    $("body").on("click", "#cbtn", function() {
        var email = $(".email-now").val();
        var phone = $(".phone-now").val();
        var keyword = $(".keyword2").val();
        var link = $(".link").val();
        var source = $(".source").val();
        var error = 0;
        if ((phone == "" || email == "")) {
            $(".email-now, .phone-now").css("background", "#D66161");
            error++
        }
        if (error == 0) {
            SendFile(email, phone);
            SendInfo(email, phone, keyword, link, source)
        }
    });

    function SendFile(email, phone) {
        $.ajax({
            type: "POST",
            url: "send-file.php",
            data: {
                email: email,
                phone: phone
            },
            success: function() {
                $('.sendnum1').animate({
                    opacity: 0
                }, 500, function() {
                    $('.sendnum3 .cform').append('<div class="transform" style="position: absolute;top: 50%;left: 50%;width: 100%;text-align:  center;">На указанную почту отправлено письмо с вложением!</div>')
                })
            }
        })
    }
    $("body").on("click", "#sendMailButton", function() {
        var email = $(".mail-email").val();
        var phone = $(".mail-phone").val();
        var keyword = $(".mail-phone").val();
        var link = $(".link").val();
        var source = $(".source").val();
        var error = 0;
        if ((phone == "" || email == "")) {
            $(".mail-email, .mail-phone").css("background", "#D66161");
            error++
        }
        if (error == 0) {
            SendFile2(email, phone);
            SendInfo(email, phone, keyword, link, source)
        }
    });
    function SendFile2(email, phone) {
        $.ajax({
            type: "POST",
            url: "send-file.php",
            data: {
                email: email,
                phone: phone
            },
            success: function() {
                $('.mail-modal ul').animate({
                    opacity: 0
                }, 500, function() {
                    $('.mail-modal').append('<div class="transform" style="position: absolute;top: 50%;left: 50%;width: 100%;text-align:  center;">На указанную почту отправлено письмо с вложением!</div>')
                })
            }
        })
    }

    function SendInfo(email, phone, keyword, link, source) {
        $.ajax({
            type: "POST",
            url: "mail2.php",
            data: {
                email: email,
                phone: phone,
                keyword: keyword,
                link: link,
                source: source
            },
        })
    }
    $("body").on("click", ".wpp-href", function(e) {
        e.preventDefault();
        var id = $(this).data("id");
        $('.modal2[data-id=' + id + ']').fadeIn();
        $('.wpp-modal-block').css('opacity', '1').addClass('animated zoomIn')
    });
    $("#topluch1, #top_luch1").animate({
        opacity: 1
    }, 1500, function() {
        $("#topluch2").animate({
            opacity: 1
        }, 1000, function() {
            $("#topluch3").animate({
                opacity: 1
            }, 1000);
            $("#topluch1, #top_luch1").css("-webkit-animation", "leaves 2s ease-in-out infinite alternate", "animation", "leaves 2s ease-in-out infinite alternate")
        })
    });
    $("body").on("click", ".cont-label", function() {
        var firstq = $('.first-q input[type=radio]:checked').val();
        var secondq = $('.second-q input[type=radio]:checked').val();
        var thirdq = $('.third-q input[type=radio]:checked').val();
        $('.next-btn').css('border', '2px solid #00b5ff').removeClass('wpulse-button').addClass('pulse-button')
    });
    $("body").on("click", ".check_input", function() {
        $('.next-btn2').css('border', '2px solid #00b5ff').removeClass('wpulse-button').addClass('pulse-button')
    });
    $(".game-phone").keyup(function() {
        var a = $(this).val().length;
        var val = $(this).val();
        if (a >= 11) {
            $('.next-btn3').css('border', '2px solid #00b5ff').removeClass('wpulse-button').addClass('pulse-button')
        }
    })
    $('body').on("click", "#start-btn", function() {
        $('.fadeOut-block').fadeOut().promise().done(function() {
            $('.game-center,.next-btn, .close-btn').fadeIn();
            $('.first-q .step2-gif').show();
            setTimeout(function() {
                afterReveal()
            }, 300)
        });
        count = 0
    });

    function afterReveal() {
        var currentCount = 1;
        var doStuff = function() {
            $('.queue[data-id=' + currentCount + ']').animate({
                opacity: 1
            }, 50).promise().done(function() {
                currentCount++;
                doStuff();
                if (currentCount == 45) {
                    $('.first-q .step2-gif').hide();
                    $('.first-q .step3-gif').show()
                }
            })
        };
        (function loopingFunction() {
            doStuff()
        })()
    }
    $('body').on("click", ".check_input", function(e) {
        e.preventDefault();
        var id = $(this).data("id");
        if ($(".radio" + id + " input:radio").prop('checked')) {
            $(".radio" + id + "  input:radio").prop("checked", !1)
        } else {
            $(".radio" + id + "  input:radio").prop("checked", !0)
        }
    });
    var count = 0;
    var time1, time2, time3;
    $('body').on("click", ".next-btn", function() {
        $('.second-q .step2-gif').show();
        $('.second-q .step3-gif').hide();
        if (!($('.quiz1 input:radio').is(':checked'))) {
            $('.check-radio').empty();
            $('.check-radio').append('Пожалуйста, выберете один из представленных вариантов!')
        } else {
            $('.next-btn').hide();
            $('.next-btn2, .back-btn1, .close-btn').show();
            $('.check-radio').empty();
            $('#percent33').css('top', '58%');
            $('#percent33').css('width', '75%');
            $('.first-q').addClass('animated slideOutRight').fadeOut().promise().done(function() {
                $('.second-q').addClass('animated slideInLeft').fadeIn();
                $('.first-q').removeClass('slideOutRight')
            });
            time1 = setInterval(function() {
                if (count < 34) {
                    $('.percent').empty().append(count + '%');
                    count++
                }
            }, 35);
            setTimeout(function() {
                afterReveal2()
            }, 1000)
        }
    });

    function afterReveal2() {
        var currentCount2 = 1;
        var doStuff2 = function() {
            $('.queue2[data-id=' + currentCount2 + ']').animate({
                opacity: 1
            }, 50).promise().done(function() {
                currentCount2++;
                doStuff2();
                if (currentCount2 == 45) {
                    $('.second-q .step2-gif').hide();
                    $('.second-q .step3-gif').show()
                }
            })
        };
        (function loopingFunction() {
            doStuff2()
        })()
    }
    $('body').on("click", ".next-btn2", function() {
        $('.third-q .step2-gif').show();
        $('.third-q .step3-gif').hide();
        if (!($('.quiz2 input:radio').is(':checked'))) {
            $('.check-radio').empty();
            $('.check-radio').append('Пожалуйста, выберете один из представленных вариантов!')
        } else {
            $('.next-btn2, .back-btn1').hide();
            $('.next-btn3, .back-btn2, .close-btn').show();
            $('#percent33').css('display', 'none');
            $('#percent66').fadeIn(0).promise().done(function() {
                $('#percent66').css('top', '51%');
                $('#percent66').css('width', '85%')
            });
            $('.second-q').removeClass('slideInleft').addClass('slideOutRight').fadeOut().promise().done(function() {
                $('.third-q').addClass('animated slideInLeft').fadeIn();
                $('.second-q').removeClass('slideOutRight')
            });
            time2 = setInterval(function() {
                if (count < 67) {
                    $('.percent').empty().append(count + '%');
                    count++
                }
            }, 35);
            setTimeout(function() {
                afterReveal3()
            }, 1000)
        }
    });

    function afterReveal3() {
        var currentCount3 = 1;
        var doStuff3 = function() {
            $('.queue3[data-id=' + currentCount3 + ']').animate({
                opacity: 1
            }, 100).promise().done(function() {
                currentCount3++;
                doStuff3();
                if (currentCount3 == 39) {
                    $('.third-q .step2-gif').hide();
                    $('.third-q .step3-gif').show()
                }
            })
        };
        (function loopingFunction() {
            doStuff3()
        })()
    }
    $('body').on("click", ".next-btn3", function() {
        $('.last-q .step3-gif').hide();
        $('.last-q .step4-gif').show();
        var phone = $(".game-phone").val();
        if (phone == "") {
            $(".game-phone").css("background", "#D66161")
        } else {
            $('.next-btn3, .next-btn, .back-btn2, .close-btn').hide();
            $('.ok-btn, .step4-gif').show();
            $('#percent66').fadeOut().promise().done(function() {
                $('#percent100').fadeIn()
            });
            $('.third-q').removeClass('slideInleft').addClass('slideOutRight').fadeOut().promise().done(function() {
                $('.last-q').addClass('animated slideInLeft').fadeIn()
            });
            time3 = setInterval(function() {
                if (count < 101) {
                    $('.percent').empty().append(count + '%');
                    count++
                }
            }, 35);
            setTimeout(function() {
                afterReveal4()
            }, 1000)
            var firstq = $('.first-q input[type=radio]:checked').val();
            var secondq1 = $('.radio1 input[type=radio]:checked').val();
            var secondq2 = $('.radio2 input[type=radio]:checked').val();
            var secondq3 = $('.radio3 input[type=radio]:checked').val();
            var secondq4 = $('.radio4 input[type=radio]:checked').val();
            var secondq5 = $('.radio5 input[type=radio]:checked').val();
            var secondq6 = $('.radio6 input[type=radio]:checked').val();
            var secondq7 = $('.radio7 input[type=radio]:checked').val();
            var game_phone = $('.game-phone').val();
            var keyword = $(".keyword").val();
            var link = $(".link").val();
            var source = $(".source").val();
            SendOrder(firstq, secondq1, secondq2, secondq3, secondq4, secondq5, secondq6, secondq7, game_phone, source, keyword, link)
        }
    });

    function afterReveal4() {
        var currentCount4 = 1;
        var doStuff4 = function() {
            $('.queue4[data-id=' + currentCount4 + ']').animate({
                opacity: 1
            }, 100).promise().done(function() {
                currentCount4++;
                doStuff4();
                if (currentCount4 == 31) {
                    $('.last-q .step4-gif').hide();
                    $('.last-q .step3-gif').show();
                    setTimeout(function() {
                        $('.manager').animate({
                            opacity: 1
                        }, 1000)
                    }, 500)
                }
            })
        };
        (function loopingFunction() {
            doStuff4()
        })()
    }

    function SendOrder(firstq, secondq1, secondq2, secondq3, secondq4, secondq5, secondq6, secondq7, game_phone, keyword, link, source) {
        $.ajax({
            type: "POST",
            url: "game.php",
            data: {
                firstq: firstq,
                secondq1: secondq1,
                secondq2: secondq2,
                secondq3: secondq3,
                secondq4: secondq4,
                secondq5: secondq5,
                secondq6: secondq6,
                secondq7: secondq7,
                game_phone: game_phone,
                keyword: keyword,
                link: link,
                source: source
            },
            success: function() {}
        })
    }
    $('body').on("click", ".back-btn1", function() {
        $('.next-btn, .next-btn2').css('border', '2px solid #fff').addClass('wpulse-button').removeClass('pulse-button');
        $('.second-q').addClass('animated slideOutRight').fadeOut().promise().done(function() {
            $('.first-q').addClass('slideInLeft').fadeIn();
            $('.second-q').removeClass('slideOutRight')
            $('.next-btn2, .back-btn1').hide();
            $('.next-btn, .close-btn').show();
            $('.first-q .step2-gif').show();
            $('.first-q .step3-gif').hide()
        })
    });
    $('body').on("click", ".back-btn2", function() {
        count = 66;
        $('.next-btn, .next-btn2').css('border', '2px solid #fff').addClass('wpulse-button').removeClass('pulse-button');
        $('.third-q').addClass('animated slideOutRight').fadeOut().promise().done(function() {
            $('.second-q').addClass('slideInLeft').fadeIn();
            $('.third-q').removeClass('slideOutRight');
            $('.next-btn3, .back-btn2').hide();
            $('.next-btn2, .back-btn1, .close-btn').show();
            $('.second-q .step2-gif').show();
            $('.second-q .step3-gif').hide()
        })
    });
    $('body').on("click", ".close-btn", function() {
        setTimeout(function() {
            count = 0
        }, 1000);
        clearInterval(time1);
        clearInterval(time2);
        clearInterval(time3);
        $('.game-center').fadeOut().promise().done(function() {
            $('.fadeOut-block').fadeIn();
            $('.first-q, .second-q, .third-q, .last-q').removeClass('animated slideInLeft slideOutRight').fadeOut().promise().done(function() {
                $('.first-q').fadeIn();
                $('.next-btn').show();
                $('.next-btn2, .next-btn3, .back-btn1, .back-btn2, .ok-btn').hide();
                $('#percent33').show().css('top', '77%').css('width', '50%');
                $('#percent66').hide().css('top', '60%').css('width', '70%');
                $('.queue, .queue2, .queue3, .queue4').css('opacity', '0');
                $(".game-phone").val("");
                $('.percent').empty().append('0%');
                $('#percent100').fadeOut();
                $("input:radio").prop("checked", !1);
                $('.first-q .step2-gif, .second-q .step2-gif, .third-q .step2-gif, .last-q .step4-gif').show();
                $('.first-q .step3-gif, .second-q .step3-gif, .third-q .step3-gif').hide();
                $('.next-btn, .next-btn2').css('border', '2px solid #fff').addClass('wpulse-button').removeClass('pulse-button')
            })
        })
    });
    $('body').on("click", ".ok-btn", function() {
        setTimeout(function() {
            count = 0
        }, 1000);
        clearInterval(time1);
        clearInterval(time2);
        clearInterval(time3);
        $('.game-center').fadeOut().promise().done(function() {
            $('.fadeOut-block').fadeIn();
            $('.first-q, .second-q, .third-q, .last-q').removeClass('animated slideInLeft slideOutRight').fadeOut().promise().done(function() {
                $('.first-q').fadeIn();
                $('.first-q .step2-gif, .second-q .step2-gif, .third-q .step2-gif, .last-q .step4-gif').show();
                $('.first-q .step3-gif, .second-q .step3-gif, .third-q .step3-gif').hide();
                $('.next-btn').show();
                $('.next-btn2, .next-btn3, .back-btn1, .back-btn2, .ok-btn').hide();
                $('.queue, .queue2, .queue3, .queue4').css('opacity', '0');
                $('#percent33').show().css('top', '77%').css('width', '50%');
                $('#percent66').hide().css('top', '60%').css('width', '70%');
                $(".game-phone").val("");
                $('.percent').empty().append('0%');
                $('#percent100').fadeOut();
                $("input:radio").prop("checked", !1);
                $('.next-btn, .next-btn2').css('border', '2px solid #fff').addClass('wpulse-button').removeClass('pulse-button')
            })
        })
    });
    $("body").on("mouseenter", ".green_block", function() {
        var id = $(this).data("id");
        $('.green_block[data-id=' + id + ']').css('opacity', '1');
        $('.black_block[data-id=' + id + ']').css('opacity', '0');
        $('.text_block[data-id=' + id + ']').css('fill', '#000');
        $('.text_block[data-id=' + id + ']').css('text-shadow', '0 0 10px rgba(0, 0 ,0 ,0.5)')
    });
    $("body").on("mouseleave", ".green_block", function() {
        var id = $(this).data("id");
        $('.green_block[data-id=' + id + ']').css('opacity', '0');
        $('.black_block[data-id=' + id + ']').css('opacity', '1');
        $('.text_block[data-id=' + id + ']').css('fill', '#60ff00')
    });
    $("body").on("mouseenter", ".text_block", function() {
        var id = $(this).data("id");
        $('.green_block[data-id=' + id + ']').css('opacity', '1');
        $('.black_block[data-id=' + id + ']').css('opacity', '0');
        $('.text_block[data-id=' + id + ']').css('fill', '#000')
    });
    $("body").on("mouseleave", ".text_block", function() {
        var id = $(this).data("id");
        $('.green_block[data-id=' + id + ']').css('opacity', '0');
        $('.black_block[data-id=' + id + ']').css('opacity', '1');
        $('.text_block[data-id=' + id + ']').css('fill', '#60ff00')
    });
    $("body").on("click", "#mobOffer", function() {
        var id = $(this).data("id")
        $('body').addClass('body-fix');
        $('.modal2[data-id=' + id + ']').fadeIn();
        $('.order-modal-block').css('opacity', '1').addClass('animated zoomIn')
    });
    $(window).scroll(function() {
        $("#mobOffer").stop().animate({
            "marginTop": ($(window).scrollTop()) + "px",
            "marginLeft": ($(window).scrollLeft()) + "px"
        }, "fast")
    });
    $('.mvfade[data-id=' + 1 + ']').show();
    if ($(window).width() < 670) {
        $("body").on("click", ".mvclick", function() {
            var id = $(this).data("id");
            $('.mvfade').hide().promise().done(function() {
                $('.mvfade[data-id=' + id + ']').show()
            })
        })
    }
    $("body").on("click", ".read-more", function() {
        $('.ac_text').show();
        $('.read-more').hide().promise().done(function() {
            $('.read-more2').show()
        })
    });
    $("body").on("click", ".read-more2", function() {
        $('.ac_text').hide();
        $('.read-more2').hide().promise().done(function() {
            $('.read-more').show()
        })
    });
    $('body').on("click", ".share", function(e) {
        e.preventDefault();
        $('.share_block').fadeToggle()
    });
    if ($(window).width() < 1049) {
        var scrollPos = $('#statistics').offset().top;
        var once = !1;
        $(window).scroll(function() {
            var scrolled = $(window).scrollTop();
            if ((scrolled > scrollPos) && !once) {
                once = !0;
                $('.st-anim[data-id=1]').css({
                    'top': '0',
                    'transform': 'rotate(0'
                }).promise().done(function() {
                    $('.st-anim[data-id=1]').animate({
                        opacity: 1
                    }, 1000, function() {
                        $('.st-txt[data-id=1]').animate({
                            opacity: 1
                        }, 1000, function() {
                            $('.st-anim[data-id=2]').css({
                                'top': '0',
                                'transform': 'rotate(0'
                            }).promise().done(function() {
                                $('.st-anim[data-id=2]').animate({
                                    opacity: 1
                                }, 1000, function() {
                                    $('.st-txt[data-id=2]').animate({
                                        opacity: 1
                                    }, 1000, function() {
                                        $('.st-anim[data-id=3]').css({
                                            'top': '0',
                                            'transform': 'rotate(0'
                                        }).promise().done(function() {
                                            $('.st-anim[data-id=3]').animate({
                                                opacity: 1
                                            }, 1000, function() {
                                                $('.st-txt[data-id=3]').animate({
                                                    opacity: 1
                                                }, 1000, function() {
                                                    $('.st-anim[data-id=4]').css({
                                                        'top': '0',
                                                        'transform': 'rotate(0'
                                                    }).promise().done(function() {
                                                        $('.st-anim[data-id=4]').animate({
                                                            opacity: 1
                                                        }, 1000, function() {
                                                            $('.st-txt[data-id=4]').animate({
                                                                opacity: 1
                                                            }, 1000)
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            }
        });
        var scrollPos2 = $('#kinds').offset().top;
        var once2 = !1;

        function ggg() {
            $(window).scroll(function() {
                var scrolled2 = $(window).scrollTop();
                if ((scrolled2 > scrollPos2) && !once) {
                    if (!$('.mlamp_block').hasClass('a-check')) {
                        $('.mlamp_block').addClass('a-check');
                        animateOn(1);
                        once2 = !0
                    }
                }
            })
        }
        ggg();

        function animateOn(activeTxt) {
            if (activeTxt == 1) {
                activeTxt = 2
            }
            if (activeTxt == 10) {
                activeTxt = 1;
                animateOn(activeTxt + 1)
            }
            if (once2 && activeTxt == 1) {
                return
            }
            $('.mlb[data-id=' + activeTxt + '] img').css({
                filter: 'brightness(0) invert(1)'
            });
            $('.mlb[data-id=' + activeTxt + '] div:last-child').css({
                color: '#60ff00'
            });
            if (activeTxt % 2 == 0) {
                $("#mlamp_luch").fadeIn()
            } else {
                $("#mlamp_luch").fadeOut()
            }
            setTimeout(function() {
                $('.mlb img').css({
                    filter: 'none'
                });
                $('.mlb div:last-child').css({
                    color: '#fff'
                });
                if (!once2 && activeTxt == 1) {
                    return
                }
                animateOn(activeTxt + 1)
            }, 2000)
        }
    }

    $('.person_hover').hover(
        function(){
            $('.petr_info').removeClass('active');
        },
        function(){
            $('.petr_info').addClass('active');
    });
 $('.form1 .but').click(function () {
        $('.form1').addClass('active');
        setTimeout(function () {
            if($('.form1').hasClass('active')) {
                $('.phone_form').slideDown();
				$('.form2').addClass('moveTogether');
            }
        },600);
    });

    $('.form2 .but').click(function () {
        $('.form2').addClass('active');
        setTimeout(function () {
            if($('.form2').hasClass('active')) {
                $('.smile_form').slideDown();
            }
        },600);
    });

    $("body").click(function (event) {
        if ($(event.target).closest(".form1 .but, .phone_form").length === 0) {
            $('.phone_form').slideUp();
			$('.form2').removeClass('moveTogether');
            setTimeout(function () {
                $('.form1').removeClass('active');
                $('.phone_form').slideUp();
			$('.form2').removeClass('moveTogether');
            },600);
        }
    });
    $("body").click(function (event) {
        if ($(event.target).closest(".form2 .but, .smile_form").length === 0) {
            $('.smile_form').slideUp();
            setTimeout(function () {
                $('.form2').removeClass('active');
                $('.smile_form').slideUp();
            },600);
        }
    });

    setInterval(function () {
        $('#phone_fixicon').addClass('animated jello');
        setTimeout(function () {
            $('#phone_fixicon').removeClass('animated jello');
        }, 1500)
        setTimeout(function () {
            $('#smile_fixicon').addClass('animated tada');
            setTimeout(function () {
                $('#smile_fixicon').removeClass('animated tada');
            }, 1500)
        }, 2000);
    }, 5000);



});