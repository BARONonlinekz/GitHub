jQuery(document).ready(function(a) {
    // form_anim
    setTimeout(function () {
        $('.hb-line').addClass('active');
    },5000)
    var lim;
    var checkText=true;
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
    var e = a("body").data("hijacking"),
        t = a("body").data("animation"),
        i = 0,
        n = 1,
        o = !1,
        s = a(".cd-section"),
        c = a(".cd-vertical-nav"),
        l = a(".downArrow"),
        d = c.find("a.cd-prev"),
        r = c.find("a.cd-next");
    nextArrow2 = l.find("a.down-arrow");
    var m = Y(),
        f = !1;

    function u(i, n) {
        var o, c, l, m, f, u, y;
        "desktop" == i && n ? ("on" == e ? (o = s.filter(".visible"), c = o.prevAll(".cd-section"), l = o.nextAll(".cd-section"), f = (m = R(t, !1))[0], u = m[1], y = m[2], o.children("div").velocity(f, 1, function() {
            o.css("opacity", 1), c.css("opacity", 1), l.css("opacity", 1)
        }), c.children("div").velocity(u, 0), l.children("div").velocity(y, 0), a(window).on("DOMMouseScroll mousewheel", w)) : (p(), a(window).on("scroll", p)), d.on("click", k), r.on("click", g), nextArrow2.on("click", g), a("body").on("click", nextArrow2, function() {
            setTimeout(function() {
                var e = 1;
                setInterval(function() {
                    e < 7 && (a("#lp-luch" + e + " img").animate({
                        opacity: 1
                    }, 1e3, function() {}), e++)
                }, 1e3), a("#lp-luch1 img").css("-webkit-animation", "leaves 2s ease-in-out infinite alternate", "animation", "leaves 2s ease-in-out infinite alternate"), a(".l-text1, .l-text2, .l-text3, .l-text4").animate({
                    opacity: 1
                }, 1e3), a(".r-text1, .r-text2, .r-text3, .r-text4, .r-text5 ").animate({
                    opacity: 1
                }, 1e3), setTimeout(function() {
                    a(".waitActive").addClass("activeDashed")
                }, 100)
            }, 650)
        }), a(document).on("keydown", function(e) {
            "40" != e.which || r.hasClass("inactive") ? "38" == e.which && (!d.hasClass("inactive") || d.hasClass("inactive") && a(window).scrollTop() != s.eq(0).offset().top) && (e.preventDefault(), k()) : (e.preventDefault(), g())
        }), S()) : "mobile" == i && (s.children("div").each(function() {
            a(this).attr("style", "")
        }), a(window).off("DOMMouseScroll mousewheel", w), a(window).off("scroll", p), d.off("click", k), r.off("click", g), a(document).off("keydown"))
    }
    $('.like_project').click(function() {
        $(this).children('i').toggleClass('active')
    });
    $("body").on("click",".carousel.pc .m-item",function(e){
        e.preventDefault();
        var image_id=$(this).data('id');
        var href_project = $(this).data('href');
        var modal = $('.modal[data-id=modal-portfolio]');
        var image = $('<img>',{
            src : `assets/img/portfolio/${image_id}.png`
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
    function p() {
        window.requestAnimationFrame ? window.requestAnimationFrame(y) : y()
    }

    function y() {
        var e = a(window).scrollTop(),
            i = a(window).height();
        a(window).width(), s.each(function() {
            var n, o, s, c, l, d, r = a(this),
                m = e - r.offset().top,
                f = function(a, e, t) {
                    var i = 1,
                        n = 100,
                        o = "0deg",
                        s = 1,
                        c = 0;
                    if (a >= -e && a <= 0) switch (n = 100 * -a / e, t) {
                        case "scaleDown":
                            i = 1, s = 1;
                            break;
                        case "rotate":
                            n = 0;
                            break;
                        case "gallery":
                            a >= -e && a < -.9 * e ? (i = -a / e, n = 100 * -a / e, c = 400 * (1 + a / e)) : a >= -.9 * e && a < -.1 * e ? (i = .9, n = -9 / 8 * (a + .1 * e) * 100 / e, c = 40) : (i = 1 + a / e, n = 0, c = -400 * a / e);
                            break;
                        case "catch":
                            a >= -e && a < -.75 * e ? (n = 100, c = 160 * (1 + a / e)) : (n = -10 / 7.5 * a * 100 / e, c = -160 * a / (3 * e));
                            break;
                        case "opacity":
                            n = 0, i = .2 * (a + 5 * e) / e, s = (a + e) / e
                    } else if (a > 0 && a <= e) switch (n = 100 * -a / e, t) {
                        case "scaleDown":
                            i = (1 - .3 * a / e).toFixed(5), s = (1 - a / e).toFixed(5), n = 0, c = a / e * 40;
                            break;
                        case "rotate":
                            s = (1 - a / e).toFixed(5), o = 90 * a / e + "deg", n = 0;
                            break;
                        case "gallery":
                            a >= 0 && a < .1 * e ? (i = (e - a) / e, n = -a / e * 100, c = 400 * a / e) : a >= .1 * e && a < .9 * e ? (i = .9, n = -9 / 8 * (a - .1 * e / 9) * 100 / e, c = 40) : (i = a / e, n = -100, c = 400 * (1 - a / e));
                            break;
                        case "catch":
                            c = a >= 0 && a < e / 2 ? 80 * a / e : 80 * (1 - a / e);
                            break;
                        case "opacity":
                            n = 0, i = .2 * (a + 5 * e) / e, s = (e - a) / e;
                            break;
                        case "fixed":
                            n = 0;
                            break;
                        case "parallax":
                            n = 50 * -a / e
                    } else if (a < -e) switch (n = 100, t) {
                        case "scaleDown":
                            i = 1, s = 1;
                            break;
                        case "gallery":
                            i = 1;
                            break;
                        case "opacity":
                            n = 0, i = .8, s = 0
                    } else switch (n = -100, t) {
                        case "scaleDown":
                            i = 0, s = .7, n = 0;
                            break;
                        case "rotate":
                            n = 0, o = "90deg";
                            break;
                        case "gallery":
                            i = 1;
                            break;
                        case "opacity":
                            n = 0, i = 1.2, s = 0;
                            break;
                        case "fixed":
                            n = 0;
                            break;
                        case "parallax":
                            n = -50
                    }
                    return [n, i, o, s, c]
                }(m, i, t);
            n = r.children("div"), o = f[0], s = f[1], c = f[2], l = f[3], d = f[4], n.velocity({
                translateY: o + "vh",
                scale: s,
                rotateX: c,
                opacity: l,
                boxShadowBlur: d + "px",
                translateZ: 0
            }, 0), m >= 0 && m < i ? r.addClass("visible") : r.removeClass("visible")
        }), S()
    }
    u(m, !0), a(window).on("resize", function() {
        u(m = Y(), f), "mobile" == m && (f = !0), "desktop" == m && (f = !1)
    });
    var v = 0;

    function w(a) {
        return a.originalEvent.detail < 0 || a.originalEvent.wheelDelta > 0 ? (i--, Math.abs(i) >= n && k()) : ++i >= n && g(), !1
    }
    var h = 1,
        b = 1,
        C = 1;

    function k(i) {
        void 0 !== i && i.preventDefault();
        var n = s.filter(".visible"),
            c = "off" == e && a(window).scrollTop() != n.offset().top;
        n = c ? n.next(".cd-section") : n;
        var l = R(t, c, "prev");
        D(n.prev(".cd-section"), l[3]), o || n.is(":first-child") || (o = !0, 0 != v && v--, n.removeClass("visible").children("div").velocity(l[2], l[3], l[4]).end().prev(".cd-section").addClass("visible").children("div").velocity(l[0], l[3], l[4], function() {
            o = !1, "off" == e && a(window).on("scroll", p)
        })), I()
        if(v == 0){
            $('.forma, .forma .form1, .forma .form2 ').removeClass('active');
            $('.phone_form,.smile_form ').slideUp();
            $('.form2').removeClass('moveTogether');
        }
    }
    a("body").on("click", "#carousel-portfolio .no", function() {
        var e = a(this).data("id");
        a("body").addClass("body-fix"), a(".content-modal").empty(), a(".content-modal").append('<img src="assets/img/portfolio/modal/modal' + e + '.jpg">'), a(window).width() > 1049 && a(".content-modal img").addClass("help_img"), a(".modal").fadeIn(), a(".main-modal-block").css("opacity", "1").addClass("animated zoomIn"), a(".customNavigation a").css("opacity", "0"), a(window).width() > 1049 && a(window).off("DOMMouseScroll mousewheel", w)
    }), a("body").on("mouseenter", "#carousel-portfolio .item", function() {
        var e = a(this).data("id");
        a(".pshadow" + e).css({
            opacity: 1
        })
    }), a("body").on("mouseleave", "#carousel-portfolio .item", function() {
        var e = a(this).data("id");
        a(".pshadow" + e).css({
            opacity: 0
        })
    }), a("body").on("click", ".close-pop", function() {
        setTimeout(function() {
            a("body").removeClass("body-fix")
        }, 320), a(".customNavigation a").css("opacity", "1"), a(".modal, .modal2").fadeOut(), a(window).width() > 1049 && a(window).on("DOMMouseScroll mousewheel", w)
    }), a("body").on("click", ".close-modal, .close_modal", function() {
        setTimeout(function() {
            a("body").removeClass("body-fix")
        }, 320), a(".customNavigation a").css("opacity", "1"), a(".modal, .modal2").fadeOut(), a(window).width() > 1049 && a(window).on("DOMMouseScroll mousewheel", w)
    }), a("body").on("click", "#sendmButton", function() {
        var e = a(this).data("id");
        a("body").addClass("body-fix"), a(".modal2[data-id=" + e + "]").fadeIn(), a(".order-modal-block").css("opacity", "1").addClass("animated zoomIn")
    }), a("body").on("click", ".order-btn", function() {
        var e = a(this).data("id");
        a(".modal2[data-id=" + e + "]").fadeIn(), a(".zakaz-modal-block").css("opacity", "1").addClass("animated zoomIn"), a(window).width() > 1049 && a(window).off("DOMMouseScroll mousewheel", w)
    }), a("body").on("click", ".order-btn2", function() {
        var e = a(this).data("id");
        a(".modal2[data-id=" + e + "]").fadeIn(), a(".zakaz-modal-block").css("opacity", "1").addClass("animated zoomIn"), a(window).width() > 1049 && a(window).off("DOMMouseScroll mousewheel", w)
    }), a("body").on("click", "#cbtn2", function() {
        var e = a(this).data("id");
        a("body").addClass("body-fix"), a(".modal2[data-id=" + e + "]").fadeIn(), a(".mail-modal-block").css("opacity", "1").addClass("animated zoomIn")
    }), a("body").on("click", ".iphoneh", function() {
        var e = a(this).data("id");
        a(".modal2[data-id=" + e + "]").fadeIn(), a(".zakaz-modal-block").css("opacity", "1").addClass("animated zoomIn"), a(window).width() > 1049 && a(window).off("DOMMouseScroll mousewheel", w)
    });
    var x = window.location.hash;

    function g(i) {
        if(!$('.forma').hasClass('active')){$('.forma').addClass('active');}
        void 0 !== i && i.preventDefault();
        var n = s.filter(".visible"),
            c = "off" == e && a(window).scrollTop() != n.offset().top,
            l = R(t, c, "next");
        D(n.next(".cd-section"), l[3]), o || n.is(":last-of-type") || (o = !0, n.removeClass("visible").children("div").velocity(l[1], l[3], l[4]).end().next(".cd-section").addClass("visible").children("div").velocity(l[0], l[3], l[4], function() {
            1 == ++v && (a(".d0").addClass("animated fadeInLeft active").animate({
                opacity: "1"
            }, 500, function() {
                a(".d1").addClass("animated fadeInLeft active").animate({
                    opacity: "1"
                }, 500, function() {
                    a(".d2").addClass("animated fadeInLeft active").animate({
                        opacity: "1"
                    }, 500, function() {
                        a(".d3").addClass("animated fadeInLeft active").animate({
                            opacity: "1"
                        }, 500, function() {
                            a(".d4").addClass("animated fadeInLeft active")
                        })
                    })
                })
            }), a(".d9").addClass("animated fadeInRight active").animate({
                opacity: "1"
            }, 500, function() {
                a(".d8").addClass("animated fadeInRight active").animate({
                    opacity: "1"
                }, 500, function() {
                    a(".d7").addClass("animated fadeInRight active").animate({
                        opacity: "1"
                    }, 500, function() {
                        a(".d6").addClass("animated fadeInRight active").animate({
                            opacity: "1"
                        }, 500, function() {
                            a(".d5").addClass("animated fadeInRight active").animate({
                                opacity: "1"
                            }, 500, function() {
                                a(".design-types-footer, .market-header").addClass("animated fadeIn active")
                            })
                        })
                    })
                })
            }), setTimeout(function() {
                var e = !1;
                ! function t(i) {
                    1 == i && (i = 2), 11 == i && t(1 + (i = 1)), e && 1 == i || (a(".d-circle[data-id=" + i + "]").addClass("animated zoomIn"), a(".b-circle[data-id=" + i + "]").addClass("animated bounce"), setTimeout(function() {
                        a(".d-circle[data-id=" + i + "]").removeClass("animated zoomIn"), a(".b-circle[data-id=" + i + "]").removeClass("animated bounce"), (e || 1 != i) && t(i + 1)
                    }, 2e3));
                }(1), e = !0, e = !1
            }, 3e3)), 3 == v ? function() {
                a(".design-center").addClass("active").animate({
                    opacity: "1"
                }, 1e3, function() {
                    a(".design-center-box").addClass("active animated rotateIn").animate({
                        opacity: "1"
                    }, 1e3, function() {
                        a(".design-circle").addClass("active animated zoomIn").animate({
                            opacity: "1"
                        }, 1e3, function() {
                            a(".design-f-item").addClass("active animated fadeIn").animate({
                                opacity: "1"
                            }, 1e3, function() {
                                a(".d-text").addClass("active animated fadeInDown").animate({
                                    opacity: "1"
                                }, 1e3, function() {
                                    a(".blinkes #hluch1,.blinkes #hluch2,.blinkes #hluch3,.blinkes #hluch4,.blinkes #hluch5").css("visibility", "visible")
                                })
                            })
                        })
                    })
                }), setInterval(function() {
                    b < 3 && (a("#comluch-" + b + " img").animate({
                        opacity: 1
                    }, 1e3), b++)
                }, 1e3), a("#comluch-6").css("-webkit-animation", "leaves 2s ease-in-out infinite alternate", "animation", "leaves 2s ease-in-out infinite alternate"), setInterval(function() {
                    C < 4 && (a("#bluch" + C + " img").animate({
                        opacity: 1
                    }, 1e3), C++)
                }, 1e3), setInterval(function() {
                    h < 4 && (a("#fluch-" + h + " img").animate({
                        opacity: 1
                    }, 1e3), h++)
                }, 1e3), a("#fluch-1").css("-webkit-animation", "leaves 2s ease-in-out infinite alternate", "animation", "leaves 2s ease-in-out infinite alternate");
                var e = 1;
                setInterval(function() {
                    e < 3 && (a("#left-luch" + e + " img").animate({
                        opacity: 1
                    }, 1e3), e++)
                }, 1e3), a("#left-luch1 img").css("-webkit-animation", "leaves 2s ease-in-out infinite alternate", "animation", "leaves 2s ease-in-out infinite alternate")
            }() : 4 == v ? (
                setInterval(function() {
                b < 3 && (a("#comluch-" + b + " img").animate({
                    opacity: 1
                }, 1e3), b++)
            }, 1e3), a("#comluch-8").css("-webkit-animation", "leaves 2s ease-in-out infinite alternate", "animation", "leaves 2s ease-in-out infinite alternate"), setInterval(function() {
                C < 4 && (a("#bluch" + C + " img").animate({
                    opacity: 1
                }, 1e3), C++)
            }, 1e3), v = 4) : 5 == v && (a(".st-anim[data-id=1]").css({
                top: "0",
                transform: "rotate(0"
            }).promise().done(function() {
                a(".st-anim[data-id=1]").animate({
                    opacity: 1
                }, 1e3, function() {
                    a(".st-txt[data-id=1]").animate({
                        opacity: 1
                    }, 1e3, function() {
                        a(".st-anim[data-id=2]").css({
                            top: "0",
                            transform: "rotate(0"
                        }).promise().done(function() {
                            a(".st-anim[data-id=2]").animate({
                                opacity: 1
                            }, 1e3, function() {
                                a(".st-txt[data-id=2]").animate({
                                    opacity: 1
                                }, 1e3, function() {
                                    a(".st-anim[data-id=3]").css({
                                        top: "0",
                                        transform: "rotate(0"
                                    }).promise().done(function() {
                                        a(".st-anim[data-id=3]").animate({
                                            opacity: 1
                                        }, 1e3, function() {
                                            a(".st-txt[data-id=3]").animate({
                                                opacity: 1
                                            }, 1e3, function() {
                                                a(".st-anim[data-id=4]").css({
                                                    top: "0",
                                                    transform: "rotate(0"
                                                }).promise().done(function() {
                                                    a(".st-anim[data-id=4]").animate({
                                                        opacity: 1
                                                    }, 1e3, function() {
                                                        a(".st-txt[data-id=4]").animate({
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
            }), setInterval(function() {
                b < 3 && (a("#comluch-" + b + " img").animate({
                    opacity: 1
                }, 1e3), b++)
            }, 1e3), a("#comluch-1").css("-webkit-animation", "leaves 2s ease-in-out infinite alternate", "animation", "leaves 2s ease-in-out infinite alternate"), setInterval(function() {
                C < 4 && (a("#bluch" + C + " img").animate({
                    opacity: 1
                }, 1e3), C++)
            }, 1e3), a("#bluch1 img").css("-webkit-animation", "leaves 2s ease-in-out infinite alternate", "animation", "leaves 2s ease-in-out infinite alternate"), a(".petr").hasClass("a-check") || (a(".petr").addClass("animated-team  petr-on a-check").animate({
                opacity: 1
            }, 2500, function() {
                a(".petr").removeClass("animated-team  petr-on"), a("#dos-rhand").addClass("animated-team  dos-on").animate({
                    opacity: 1
                }, 2500, function() {
                    a("#dos-rhand").removeClass("animated-team  dos-on"), a("#andriy-rhand").addClass("animated-team  andriy-on").animate({
                        opacity: 1
                    }, 2500, function() {
                        a("#andriy-rhand").removeClass("animated-team  andriy-on"), a("#yuliya-rhand").addClass("animated-team  yuliya-on").animate({
                            opacity: 1
                        }, 2500, function() {
                            a("#yuliya-rhand").removeClass("animated-team  yuliya-on"), a("#dmitrii-lhand").addClass("animated-team  dmitrii-on").animate({
                                opacity: 1
                            }, 2500, function() {
                                a("#dmitrii-lhand").removeClass("animated-team  dmitrii-on")
                            })
                        })
                    })
                })
            }), setInterval(function() {
                a(".petr").addClass("animated-team  petr-on").animate({
                    opacity: 1
                }, 2500, function() {
                    a(".petr").removeClass("animated-team  petr-on"), a("#dos-rhand").addClass("animated-team  dos-on").animate({
                        opacity: 1
                    }, 2500, function() {
                        a("#dos-rhand").removeClass("animated-team  dos-on"), a("#andriy-rhand").addClass("animated-team  andriy-on").animate({
                            opacity: 1
                        }, 2500, function() {
                            a("#andriy-rhand").removeClass("animated-team  andriy-on"), a("#yuliya-rhand").addClass("animated-team  yuliya-on").animate({
                                opacity: 1
                            }, 2500, function() {
                                a("#yuliya-rhand").removeClass("animated-team  yuliya-on"), a("#dmitrii-lhand").addClass("animated-team  dmitrii-on").animate({
                                    opacity: 1
                                }, 2500, function() {
                                    a("#dmitrii-lhand").removeClass("animated-team  dmitrii-on")
                                })
                            })
                        })
                    })
                })
            }, 15e3)),
                $('.partners-box.first').addClass('active').animate({opacity: 1}, 1500, function () {
                    $('.partners-box.second').addClass('active').animate({opacity: 1}, 1500, function () {
                        $('.partners-box.third').addClass('active').animate({opacity: 1}, 1500, function () {

                        })
                    })
                })
                , v = 5), o = !1, "off" == e && a(window).on("scroll", p)
        })), I()
    }

    function D(i, n) {
        "off" == e && (a(window).off("scroll", p), "catch" == t ? a("body, html").scrollTop(i.offset().top) : i.velocity("scroll", {
            duration: n
        }))
    }

    function I() {
        i = 0, S()
    }

    function S() {
        s.filter(".visible").is(":first-of-type") ? d.addClass("inactive") : d.removeClass("inactive"), s.filter(".visible").is(":last-of-type") ? r.addClass("inactive") : r.removeClass("inactive")
    }

    function Y() {
        return window.getComputedStyle(document.querySelector("body"), "::before").getPropertyValue("content").replace(/"/g, "").replace(/'/g, "")
    }

    function R(a, t, i) {
        var n = "translateNone",
            o = "translateUp",
            s = "translateDown",
            c = "ease",
            l = 800;
        switch (a) {
            case "scaleDown":
                o = "scaleDown", c = "easeInCubic";
                break;
            case "rotate":
                "off" == e ? (o = "rotation.scroll", s = "translateNone") : (o = "rotation", c = "easeInCubic");
                break;
            case "gallery":
                l = 1500, t ? (o = "scaleDown.moveUp.scroll", n = "scaleUp.moveUp.scroll", s = "scaleDown.moveDown.scroll") : (n = "next" == i ? "scaleUp.moveUp" : "scaleUp.moveDown", o = "scaleDown.moveUp", s = "scaleDown.moveDown");
                break;
            case "catch":
                n = "translateUp.delay";
                break;
            case "opacity":
                l = 700, o = "hide.scaleUp", s = "hide.scaleDown";
                break;
            case "fixed":
                o = "translateNone", c = "easeInCubic";
                break;
            case "parallax":
                o = "translateUp.half", c = "easeInCubic"
        }
        return [n, o, s, l, c]
    }
    "#structure" == x && g(), "#portfolio" == x && (g(), setTimeout(function() {
        g()
    }, 1500)), "#kinds" == x && (g(), setTimeout(function() {
        g()
    }, 1500), setTimeout(function() {
        g()
    }, 3e3)), "#about" == x && (g(), setTimeout(function() {
        g()
    }, 1500), setTimeout(function() {
        g()
    }, 3e3), setTimeout(function() {
        g()
    }, 4500)), "#part" == x && (g(), setTimeout(function() {
        g()
    }, 1500), setTimeout(function() {
        g()
    }, 3000), setTimeout(function() {
        g()
    }, 4500), setTimeout(function() {
        g()
    }, 6000)), "#statistics" == x && (g(), setTimeout(function() {
        g()
    }, 1500), setTimeout(function() {
        g()
    }, 3000), setTimeout(function() {
        g()
    }, 4500), setTimeout(function() {
        g()
    }, 6000), setTimeout(function() {
        g()
    }, 7500))
}), $.Velocity.RegisterEffect("translateUp", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: "-100%"
        }, 1]
    ]
}), $.Velocity.RegisterEffect("translateDown", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: "100%"
        }, 1]
    ]
}), $.Velocity.RegisterEffect("translateNone", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: "0",
            opacity: "1",
            scale: "1",
            rotateX: "0",
            boxShadowBlur: "0"
        }, 1]
    ]
}), $.Velocity.RegisterEffect("scaleDown", {
    defaultDuration: 1,
    calls: [
        [{
            opacity: "0",
            scale: "0.7",
            boxShadowBlur: "40px"
        }, 1]
    ]
}), $.Velocity.RegisterEffect("rotation", {
    defaultDuration: 1,
    calls: [
        [{
            opacity: "0",
            rotateX: "90",
            translateY: "-100%"
        }, 1]
    ]
}), $.Velocity.RegisterEffect("rotation.scroll", {
    defaultDuration: 1,
    calls: [
        [{
            opacity: "0",
            rotateX: "90",
            translateY: "0"
        }, 1]
    ]
}), $.Velocity.RegisterEffect("scaleDown.moveUp", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: "-10%",
            scale: "0.9",
            boxShadowBlur: "40px"
        }, .2],
        [{
            translateY: "-100%"
        }, .6],
        [{
            translateY: "-100%",
            scale: "1",
            boxShadowBlur: "0"
        }, .2]
    ]
}), $.Velocity.RegisterEffect("scaleDown.moveUp.scroll", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: "-100%",
            scale: "0.9",
            boxShadowBlur: "40px"
        }, .6],
        [{
            translateY: "-100%",
            scale: "1",
            boxShadowBlur: "0"
        }, .4]
    ]
}), $.Velocity.RegisterEffect("scaleUp.moveUp", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: "90%",
            scale: "0.9",
            boxShadowBlur: "40px"
        }, .2],
        [{
            translateY: "0%"
        }, .6],
        [{
            translateY: "0%",
            scale: "1",
            boxShadowBlur: "0"
        }, .2]
    ]
}), $.Velocity.RegisterEffect("scaleUp.moveUp.scroll", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: "0%",
            scale: "0.9",
            boxShadowBlur: "40px"
        }, .6],
        [{
            translateY: "0%",
            scale: "1",
            boxShadowBlur: "0"
        }, .4]
    ]
}), $.Velocity.RegisterEffect("scaleDown.moveDown", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: "10%",
            scale: "0.9",
            boxShadowBlur: "40px"
        }, .2],
        [{
            translateY: "100%"
        }, .6],
        [{
            translateY: "100%",
            scale: "1",
            boxShadowBlur: "0"
        }, .2]
    ]
}), $.Velocity.RegisterEffect("scaleDown.moveDown.scroll", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: "100%",
            scale: "0.9",
            boxShadowBlur: "40px"
        }, .6],
        [{
            translateY: "100%",
            scale: "1",
            boxShadowBlur: "0"
        }, .4]
    ]
}), $.Velocity.RegisterEffect("scaleUp.moveDown", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: "-90%",
            scale: "0.9",
            boxShadowBlur: "40px"
        }, .2],
        [{
            translateY: "0%"
        }, .6],
        [{
            translateY: "0%",
            scale: "1",
            boxShadowBlur: "0"
        }, .2]
    ]
}), $.Velocity.RegisterEffect("translateUp.delay", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: "0%"
        }, .8, {
            delay: 100
        }]
    ]
}), $.Velocity.RegisterEffect("hide.scaleUp", {
    defaultDuration: 1,
    calls: [
        [{
            opacity: "0",
            scale: "1.2"
        }, 1]
    ]
}), $.Velocity.RegisterEffect("hide.scaleDown", {
    defaultDuration: 1,
    calls: [
        [{
            opacity: "0",
            scale: "0.8"
        }, 1]
    ]
}), $.Velocity.RegisterEffect("translateUp.half", {
    defaultDuration: 1,
    calls: [
        [{
            translateY: "-50%"
        }, 1]
    ]
});