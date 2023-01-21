$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > $('header .htop').outerHeight(!0) + 150) {
            $('.htop2').show();
        } else if ($(this).scrollTop() < $('header .htop').outerHeight(!0) + 150) {
            $('.htop2').hide();
        }
    })
    if ($(window).width() > 1049) $(".owl-item").css("width", "auto");
    else {
        $(".button-mob").click(function() {
            $(".button-mob").fadeOut(0).promise().done(function() {
                $("p.m-hidden").fadeIn()
            })
        });
        var t = $(".market-header").offset().top - 200,
            e = !1;
        $(window).scroll(function() {
            if ($(window).scrollTop() > t && !e) {
                e = !0;
                var i = !1;
                ! function t(e) {
                    1 == e && (e = 2), 9 == e && t(1 + (e = 1)), i && 1 == e || ($(".design-item[data-id=" + e + "]").find(".b-circle").addClass("animated bounce"), setTimeout(function() {
                        $(".design-item[data-id=" + e + "]").find(".b-circle").removeClass("animated bounce"), (i || 1 != e) && t(e + 1)
                    }, 2e3))
                }(1), i = !0
            }
        })
    }

    function i(t, e, i, n) {
        $.ajax({
            type: "POST",
            url: "mail2.php",
            data: {
                email: t,
                phone: e,
                keyword: i,
                link: n
            }
        })
    }
    $(".sostav-item").hover(function() {
        $(this).find(".sostav-body").addClass("active")
    }, function() {
        $(this).find(".sostav-body").removeClass("active")
    }), $(".m-item").hover(function() {
        $(this).addClass('active')
        $(this).find('span').css('opacity', '1');
    }, function() {
        $(this).removeClass('active')
        $(this).find('span').css('opacity', '0');
    }), $("body").on("click", "#cbtn", function() {
        var t, e, n = $(".email-now").val(),
            o = $(".phone-now").val(),
            a = $(".keyword2").val(),
            s = 0;
        "" != o && "" != n || ($(".email-now, .phone-now").css("background", "#D66161"), s++), 0 == s && (t = n, e = o, $.ajax({
            type: "POST",
            url: "send-file.php",
            data: {
                email: t,
                phone: e
            },
            success: function() {
                $(".cform-block").animate({
                    opacity: 0
                }, 500, function() {
                    $(".conversion .cform").append('<div class="transform" style="position: absolute;top: 50%;left: 50%;width: 100%;text-align:  center;">На указанную почту отправлено письмо с вложением!</div>')
                })
            }
        }), i(n, o, a))
    }), $("body").on("click", "#sendMailButton", function() {
        var t, e, n = $(".mail-email").val(),
            o = $(".mail-phone").val(),
            a = $(".mail-phone").val(),
            s = 0;
        "" != o && "" != n || ($(".mail-email, .mail-phone").css("background", "#D66161"), s++), 0 == s && (t = n, e = o, $.ajax({
            type: "POST",
            url: "send-file.php",
            data: {
                email: t,
                phone: e
            },
            success: function() {
                $(".mail-modal ul").animate({
                    opacity: 0
                }, 500, function() {
                    $(".mail-modal").append('<div class="transform" style="position: absolute;top: 50%;left: 50%;width: 100%;text-align:  center;">На указанную почту отправлено письмо с вложением!</div>')
                })
            }
        }), i(n, o, a))
    }), $("body").on("click", ".wpp-href", function(t) {
        t.preventDefault();
        var e = $(this).data("id");
        $(".modal2[data-id=" + e + "]").fadeIn(), $(".wpp-modal-block").css("opacity", "1").addClass("animated zoomIn")
    }), $("#topluch1").animate({
        opacity: 1
    }, 1500, function() {
        $("#topluch2").animate({
            opacity: 1
        }, 1e3, function() {
            $("#topluch3").animate({
                opacity: 1
            }, 1e3), $("#topluch1").css("-webkit-animation", "leaves 2s ease-in-out infinite alternate", "animation", "leaves 2s ease-in-out infinite alternate")
        })
    }), $("body").on("click", ".cont-label", function() {
        $(".first-q input[type=radio]:checked").val(), $(".second-q input[type=radio]:checked").val(), $(".third-q input[type=radio]:checked").val();
        $(".next-btn").css("border", "2px solid #00b5ff").removeClass("wpulse-button").addClass("pulse-button")
    }), $("body").on("click", ".check_input", function() {
        $(".next-btn2").css("border", "2px solid #00b5ff").removeClass("wpulse-button").addClass("pulse-button")
    }), $(".game-phone").keyup(function() {
        var t = $(this).val().length;
        $(this).val();
        t >= 11 && $(".next-btn3").css("border", "2px solid #00b5ff").removeClass("wpulse-button").addClass("pulse-button")
    }), $("body").on("click", "#start-btn", function() {
        $(".fadeOut-block").fadeOut().promise().done(function() {
            $(".game-center,.next-btn, .close-btn").fadeIn(), $(".first-q .step2-gif").show(), setTimeout(function() {
                var t, e;
                t = 1, (e = function() {
                    $(".queue[data-id=" + t + "]").animate({
                        opacity: 1
                    }, 50).promise().done(function() {
                        t++, e(), 45 == t && ($(".first-q .step2-gif").hide(), $(".first-q .step3-gif").show())
                    })
                })()
            }, 300)
        }), s = 0
    }), $("body").on("click", ".check_input", function(t) {
        t.preventDefault();
        var e = $(this).data("id");
        $(".radio" + e + " input:radio").prop("checked") ? $(".radio" + e + "  input:radio").prop("checked", !1) : $(".radio" + e + "  input:radio").prop("checked", !0)
    });
    var n, o, a, s = 0;
    if ($("body").on("click", ".next-btn", function() {
            $(".second-q .step2-gif").show(), $(".second-q .step3-gif").hide(), $(".quiz1 input:radio").is(":checked") ? ($(".next-btn").hide(), $(".next-btn2, .back-btn1, .close-btn").show(), $(".check-radio").empty(), $("#percent33").css("top", "58%"), $("#percent33").css("width", "75%"), $(".first-q").addClass("animated slideOutRight").fadeOut().promise().done(function() {
                $(".second-q").addClass("animated slideInLeft").fadeIn(), $(".first-q").removeClass("slideOutRight")
            }), n = setInterval(function() {
                s < 34 && ($(".percent").empty().append(s + "%"), s++)
            }, 35), setTimeout(function() {
                var t, e;
                t = 1, (e = function() {
                    $(".queue2[data-id=" + t + "]").animate({
                        opacity: 1
                    }, 50).promise().done(function() {
                        t++, e(), 45 == t && ($(".second-q .step2-gif").hide(), $(".second-q .step3-gif").show())
                    })
                })()
            }, 1e3)) : ($(".check-radio").empty(), $(".check-radio").append("Пожалуйста, выберете один из представленных вариантов!"))
        }), $("body").on("click", ".next-btn2", function() {
            $(".third-q .step2-gif").show(), $(".third-q .step3-gif").hide(), $(".quiz2 input:radio").is(":checked") ? ($(".next-btn2, .back-btn1").hide(), $(".next-btn3, .back-btn2, .close-btn").show(), $("#percent33").css("display", "none"), $("#percent66").fadeIn(0).promise().done(function() {
                $("#percent66").css("top", "51%"), $("#percent66").css("width", "85%")
            }), $(".second-q").removeClass("slideInleft").addClass("slideOutRight").fadeOut().promise().done(function() {
                $(".third-q").addClass("animated slideInLeft").fadeIn(), $(".second-q").removeClass("slideOutRight")
            }), o = setInterval(function() {
                s < 67 && ($(".percent").empty().append(s + "%"), s++)
            }, 35), setTimeout(function() {
                var t, e;
                t = 1, (e = function() {
                    $(".queue3[data-id=" + t + "]").animate({
                        opacity: 1
                    }, 100).promise().done(function() {
                        t++, e(), 39 == t && ($(".third-q .step2-gif").hide(), $(".third-q .step3-gif").show())
                    })
                })()
            }, 1e3)) : ($(".check-radio").empty(), $(".check-radio").append("Пожалуйста, выберете один из представленных вариантов!"))
        }), $("body").on("click", ".next-btn3", function() {
            $(".last-q .step3-gif").hide(), $(".last-q .step4-gif").show(), "" == $(".game-phone").val() ? $(".game-phone").css("background", "#D66161") : ($(".next-btn3, .next-btn, .back-btn2, .close-btn").hide(), $(".ok-btn, .step4-gif").show(), $("#percent66").fadeOut().promise().done(function() {
                $("#percent100").fadeIn()
            }), $(".third-q").removeClass("slideInleft").addClass("slideOutRight").fadeOut().promise().done(function() {
                $(".last-q").addClass("animated slideInLeft").fadeIn()
            }), a = setInterval(function() {
                s < 101 && ($(".percent").empty().append(s + "%"), s++)
            }, 35), setTimeout(function() {
                var t, e;
                t = 1, (e = function() {
                    $(".queue4[data-id=" + t + "]").animate({
                        opacity: 1
                    }, 100).promise().done(function() {
                        t++, e(), 31 == t && ($(".last-q .step4-gif").hide(), $(".last-q .step3-gif").show(), setTimeout(function() {
                            $(".manager").animate({
                                opacity: 1
                            }, 1e3)
                        }, 500))
                    })
                })()
            }, 1e3));
            var t, e, i, n, o, d, c, l, r, p, f = $(".first-q input[type=radio]:checked").val(),
                u = $(".radio1 input[type=radio]:checked").val(),
                m = $(".radio2 input[type=radio]:checked").val(),
                b = $(".radio3 input[type=radio]:checked").val(),
                h = $(".radio4 input[type=radio]:checked").val(),
                k = $(".radio5 input[type=radio]:checked").val(),
                v = $(".radio6 input[type=radio]:checked").val(),
                y = $(".radio7 input[type=radio]:checked").val(),
                g = $(".game-phone").val();
            t = f, e = u, i = m, n = b, o = h, d = k, c = v, l = y, r = g, $.ajax({
                type: "POST",
                url: "game.php",
                data: {
                    firstq: t,
                    secondq1: e,
                    secondq2: i,
                    secondq3: n,
                    secondq4: o,
                    secondq5: d,
                    secondq6: c,
                    secondq7: l,
                    game_phone: r,
                    keyword: p
                },
                success: function() {}
            })
        }), $("body").on("click", ".back-btn1", function() {
            $(".next-btn, .next-btn2").css("border", "2px solid #fff").addClass("wpulse-button").removeClass("pulse-button"), $(".second-q").addClass("animated slideOutRight").fadeOut().promise().done(function() {
                $(".first-q").addClass("slideInLeft").fadeIn(), $(".second-q").removeClass("slideOutRight"), $(".next-btn2, .back-btn1").hide(), $(".next-btn, .close-btn").show(), $(".first-q .step2-gif").show(), $(".first-q .step3-gif").hide()
            })
        }), $("body").on("click", ".back-btn2", function() {
            s = 66, $(".next-btn, .next-btn2").css("border", "2px solid #fff").addClass("wpulse-button").removeClass("pulse-button"), $(".third-q").addClass("animated slideOutRight").fadeOut().promise().done(function() {
                $(".second-q").addClass("slideInLeft").fadeIn(), $(".third-q").removeClass("slideOutRight"), $(".next-btn3, .back-btn2").hide(), $(".next-btn2, .back-btn1, .close-btn").show(), $(".second-q .step2-gif").show(), $(".second-q .step3-gif").hide()
            })
        }), $("body").on("click", ".close-btn", function() {
            setTimeout(function() {
                s = 0
            }, 1e3), clearInterval(n), clearInterval(o), clearInterval(a), $(".game-center").fadeOut().promise().done(function() {
                $(".fadeOut-block").fadeIn(), $(".first-q, .second-q, .third-q, .last-q").removeClass("animated slideInLeft slideOutRight").fadeOut().promise().done(function() {
                    $(".first-q").fadeIn(), $(".next-btn").show(), $(".next-btn2, .next-btn3, .back-btn1, .back-btn2, .ok-btn").hide(), $("#percent33").show().css("top", "77%").css("width", "50%"), $("#percent66").hide().css("top", "60%").css("width", "70%"), $(".queue, .queue2, .queue3, .queue4").css("opacity", "0"), $(".game-phone").val(""), $(".percent").empty().append("0%"), $("#percent100").fadeOut(), $("input:radio").prop("checked", !1), $(".first-q .step2-gif, .second-q .step2-gif, .third-q .step2-gif, .last-q .step4-gif").show(), $(".first-q .step3-gif, .second-q .step3-gif, .third-q .step3-gif").hide(), $(".next-btn, .next-btn2").css("border", "2px solid #fff").addClass("wpulse-button").removeClass("pulse-button")
                })
            })
        }), $("body").on("click", ".ok-btn", function() {
            setTimeout(function() {
                s = 0
            }, 1e3), clearInterval(n), clearInterval(o), clearInterval(a), $(".game-center").fadeOut().promise().done(function() {
                $(".fadeOut-block").fadeIn(), $(".first-q, .second-q, .third-q, .last-q").removeClass("animated slideInLeft slideOutRight").fadeOut().promise().done(function() {
                    $(".first-q").fadeIn(), $(".first-q .step2-gif, .second-q .step2-gif, .third-q .step2-gif, .last-q .step4-gif").show(), $(".first-q .step3-gif, .second-q .step3-gif, .third-q .step3-gif").hide(), $(".next-btn").show(), $(".next-btn2, .next-btn3, .back-btn1, .back-btn2, .ok-btn").hide(), $(".queue, .queue2, .queue3, .queue4").css("opacity", "0"), $("#percent33").show().css("top", "77%").css("width", "50%"), $("#percent66").hide().css("top", "60%").css("width", "70%"), $(".game-phone").val(""), $(".percent").empty().append("0%"), $("#percent100").fadeOut(), $("input:radio").prop("checked", !1), $(".next-btn, .next-btn2").css("border", "2px solid #fff").addClass("wpulse-button").removeClass("pulse-button")
                })
            })
        }), $("body").on("mouseenter", ".green_block", function() {
            var t = $(this).data("id");
            $(".green_block[data-id=" + t + "]").css("opacity", "1"), $(".black_block[data-id=" + t + "]").css("opacity", "0"), $(".text_block[data-id=" + t + "]").css("fill", "#000"), $(".text_block[data-id=" + t + "]").css("text-shadow", "0 0 10px rgba(0, 0 ,0 ,0.5)")
        }), $("body").on("mouseleave", ".green_block", function() {
            var t = $(this).data("id");
            $(".green_block[data-id=" + t + "]").css("opacity", "0"), $(".black_block[data-id=" + t + "]").css("opacity", "1"), $(".text_block[data-id=" + t + "]").css("fill", "#60ff00")
        }), $("body").on("mouseenter", ".text_block", function() {
            var t = $(this).data("id");
            $(".green_block[data-id=" + t + "]").css("opacity", "1"), $(".black_block[data-id=" + t + "]").css("opacity", "0"), $(".text_block[data-id=" + t + "]").css("fill", "#000")
        }), $("body").on("mouseleave", ".text_block", function() {
            var t = $(this).data("id");
            $(".green_block[data-id=" + t + "]").css("opacity", "0"), $(".black_block[data-id=" + t + "]").css("opacity", "1"), $(".text_block[data-id=" + t + "]").css("fill", "#60ff00")
        }), $("body").on("click", "#mobOffer", function() {
            var t = $(this).data("id");
            $("body").addClass("body-fix"), $(".modal2[data-id=" + t + "]").fadeIn(), $(".order-modal-block").css("opacity", "1").addClass("animated zoomIn")
        }), $(window).scroll(function() {
            $("#mobOffer").stop().animate({
                marginTop: $(window).scrollTop() + "px",
                marginLeft: $(window).scrollLeft() + "px"
            }, "fast")
        }), $(".mvfade[data-id=1]").show(), $(window).width() < 670 && $("body").on("click", ".mvclick", function() {
            var t = $(this).data("id");
            $(".mvfade").hide().promise().done(function() {
                $(".mvfade[data-id=" + t + "]").show()
            })
        }), $("body").on("click", ".read-more", function() {
            $(".ac_text").show(), $(".read-more").hide().promise().done(function() {
                $(".read-more2").show()
            })
        }), $("body").on("click", ".read-more2", function() {
            $(".ac_text").hide(), $(".read-more2").hide().promise().done(function() {
                $(".read-more").show()
            })
        }), $("body").on("click", ".share", function(t) {
            t.preventDefault(), $(".share_block").fadeToggle()
        }), $(window).width() < 1049) {
        var d = $("#statistics").offset().top,
            c = !1;
        $(window).scroll(function() {
            $(window).scrollTop() > d && !c && (c = !0, $(".st-anim[data-id=1]").css({
                top: "0",
                transform: "rotate(0"
            }).promise().done(function() {
                $(".st-anim[data-id=1]").animate({
                    opacity: 1
                }, 1e3, function() {
                    $(".st-txt[data-id=1]").animate({
                        opacity: 1
                    }, 1e3, function() {
                        $(".st-anim[data-id=2]").css({
                            top: "0",
                            transform: "rotate(0"
                        }).promise().done(function() {
                            $(".st-anim[data-id=2]").animate({
                                opacity: 1
                            }, 1e3, function() {
                                $(".st-txt[data-id=2]").animate({
                                    opacity: 1
                                }, 1e3, function() {
                                    $(".st-anim[data-id=3]").css({
                                        top: "0",
                                        transform: "rotate(0"
                                    }).promise().done(function() {
                                        $(".st-anim[data-id=3]").animate({
                                            opacity: 1
                                        }, 1e3, function() {
                                            $(".st-txt[data-id=3]").animate({
                                                opacity: 1
                                            }, 1e3, function() {
                                                $(".st-anim[data-id=4]").css({
                                                    top: "0",
                                                    transform: "rotate(0"
                                                }).promise().done(function() {
                                                    $(".st-anim[data-id=4]").animate({
                                                        opacity: 1
                                                    }, 1e3, function() {
                                                        $(".st-txt[data-id=4]").animate({
                                                            opacity: 1
                                                        }, 1e3)
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
            }))
        });
        var l = $("#kinds").offset().top,
            r = !1;
        $(window).scroll(function() {
            $(window).scrollTop() > l && !c && ($(".mlamp_block").hasClass("a-check") || ($(".mlamp_block").addClass("a-check"), function t(e) {
                1 == e && (e = 2), 10 == e && t(1 + (e = 1)), r && 1 == e || ($(".mlb[data-id=" + e + "] img").css({
                    filter: "brightness(0) invert(1)"
                }), $(".mlb[data-id=" + e + "] div:last-child").css({
                    color: "#60ff00"
                }), e % 2 == 0 ? $("#mlamp_luch").fadeIn() : $("#mlamp_luch").fadeOut(), setTimeout(function() {
                    $(".mlb img").css({
                        filter: "none"
                    }), $(".mlb div:last-child").css({
                        color: "#fff"
                    }), (r || 1 != e) && t(e + 1)
                }, 2e3))
            }(1), r = !0))
        })
    }
    $('.person_hover').hover(
        function() {
            $('.petr_info').removeClass('active');
        },
        function() {
            $('.petr_info').addClass('active');
        });
    $('.form1 .but').click(function() {
        $('.form1').addClass('active');
        setTimeout(function() {
            if ($('.form1').hasClass('active')) {
                $('.phone_form').slideDown();
                $('.form2').addClass('moveTogether');
            }
        }, 600);
    });

    $('.form2 .but').click(function() {
        $('.form2').addClass('active');
        setTimeout(function() {
            if ($('.form2').hasClass('active')) {
                $('.smile_form').slideDown();
            }
        }, 600);
    });

    $("body").click(function(event) {
        if ($(event.target).closest(".form1 .but, .phone_form").length === 0) {
            $('.phone_form').slideUp();
            $('.form2').removeClass('moveTogether');
            setTimeout(function() {
                $('.form1').removeClass('active');
                $('.phone_form').slideUp();
                $('.form2').removeClass('moveTogether');
            }, 600);
        }
    });
    $("body").click(function(event) {
        if ($(event.target).closest(".form2 .but, .smile_form").length === 0) {
            $('.smile_form').slideUp();
            setTimeout(function() {
                $('.form2').removeClass('active');
                $('.smile_form').slideUp();
            }, 600);
        }
    });

    setInterval(function() {
        $('#phone_fixicon').addClass('animated jello');
        setTimeout(function() {
            $('#phone_fixicon').removeClass('animated jello');
        }, 1500)
        setTimeout(function() {
            $('#smile_fixicon').addClass('animated tada');
            setTimeout(function() {
                $('#smile_fixicon').removeClass('animated tada');
            }, 1500)
        }, 2000);
    }, 5000);
});