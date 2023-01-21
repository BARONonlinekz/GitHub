jQuery(document).ready(function($) {
    if($(window).width()<=1049){
        $('button').removeClass('pulse-button');
        $('.alina').addClass('container');
        $('body').on('click','.pogov',function () {
            $('.pogov').html('Ответить');
            $('.head_chat').slideDown();
            $('.zakryt').show();
        });
        $('body').on('click','.zakryt',function () {
            $('.pogov').html('Поговорить с Алиной');
            $('.head_chat').slideUp();
            $('.zakryt').hide();
        });
    }

    var offset=[
        $('#block-1').offset().top,
        $('#block-3').offset().top+100,
        $('#block-5').offset().top+100,
        $('#block-7').offset().top+100,
        $('#block-9').offset().top+100,
        $('#offset2').offset().top-100,
        $('#offset3').offset().top-100,
        $('#icn4').offset().top,
        $('#icn5').offset().top,
        $('#icn6').offset().top,
        $('#chat-1_mob').offset().top,
        $('#chat-2_mob').offset().top,
        $('#dots').offset().top
    ];

    console.log(offset);
    var once1ee=false;
    var once2ee=false;
    var once3ee=false;
    var once4ee=false;
    var once5ee=false;
    var once6ee=false;
    var once7ee=false;
    var once8ee=false;
    $(window).scroll(function() {
        var scrollBottom= $(window).scrollTop() + $(window).height();
        if($(window).width()<=1049){
            if(scrollBottom>offset[0]){
                $('#block-1 p').removeClass('active');
                $('#block-2 p').removeClass('active1');
            }
            if(scrollBottom>offset[1]){
                $('#block-3 p').removeClass('active');
                $('#block-4 p').removeClass('active1');
            }
            if(scrollBottom>offset[2]){
                $('#block-5 p').removeClass('active');
                $('#block-6 p').removeClass('active1');
            }
            if(scrollBottom>offset[3]){
                $('#block-7 p').removeClass('active');
                $('#block-8 p').removeClass('active1');
            }
            if(scrollBottom>offset[4]){
                $('#block-9 p').removeClass('active');
                $('#block-10 p').removeClass('active1');
            }
            if(scrollBottom>offset[5]){

                setTimeout(function () {
                    if(!once1ee){
                        botx2('.split1');
                    }
                    once1ee=true;
                    $('#offset2 .bol-line p').addClass('bounceInDown');
                    $('#offset2 .bol-line p').removeClass('opacity');
                },1500)
            }
            if(scrollBottom>offset[6]){

                setTimeout(function () {
                    if(!once2ee){
                        botx2('.split2');
                    }
                    once2ee=true;
                    $('#offset3 .bol-line p').addClass('bounceInDown');
                    $('#offset3 .bol-line p').removeClass('opacity');
                },1500)
            }
            if(scrollBottom>offset[7]){
                if(!once3ee){
                    go_cirles_mob(4);
                }
                once3ee=true;
            }
            if(scrollBottom>offset[8]){
                if(!once4ee){
                    go_cirles_mob(5);
                }
                once4ee=true;

            }
            if(scrollBottom>offset[9]){
                if(!once5ee){
                    go_cirles_mob(6);
                }
                once5ee=true;

            }
            if(scrollBottom>offset[10]){
                if(!once6ee){
                    indexArray=2;
                    cur_container=document.getElementById('chat-1_mob');
                    anim_chat(cur_container,indexArray);
                }
                once6ee=true;
            }
            if(scrollBottom>offset[11]){
                if(!once7ee){
                    indexArray=2;
                    cur_container=document.getElementById('chat-2_mob');
                    anim_chat(cur_container,indexArray)                }
                once7ee=true;
            }
            if(scrollBottom>offset[12]){
                if(!once8ee){
                    go_dots()
                }
                once8ee=true;
            }
        }
    });
    $('body').on('click','.verss',function () {
        $('.verss').removeClass('active');
        $(this).addClass('active');
    });
    if($(window).width()<=992){
        var scrollBottom= $(window).scrollTop() + $(window).height();
        if(scrollBottom>offset[0]){
            $('#block-1 p').removeClass('active');
            $('#block-2 p').removeClass('active1');
        }
    }

    var txts= [[],[],[],[],[],[],[]];
    var chat;
    var once3=!1;
    var indexArray=0;
    function anim_chat(chat,array,contn){
        if(once3){
            return
        }
        count_tag=chat.children.length;
        a=0;
        while(a!=count_tag){
             contn=chat.children[a];
            if(contn.tagName=='BR'){
                txts[indexArray][a]='';
                contn.innerHTML='';
            }else if(contn.tagName=='SPAN'){
                txts[indexArray][a]=chat.children[a].innerHTML;
                contn.innerHTML='';
            }else{
            }

            a++;
        }
        console.log(txts);
        $(chat).children('span').css({'opacity':'1'});
        go_anim(0,chat,count_tag,array);


    }
    function go_anim(tg,chat,count_run,array){
        if(tg==count_run+1){
            console.log('txt'+count_run);
            return
        }
        if(txts[indexArray][tg]!=null){
            txt(0,chat.children[tg],txts[indexArray][tg],tg,chat);
        }else{
            go_anim(tg+1,chat,count_run,array);
        }


    }


    function txt(d,c,t,tg,chat){
        lim=t.length;
        if(d==lim){
            c.classList.remove('blinkTextCursor');
            // console.log('txt'+count_run)
            go_anim(tg+1,chat);
            return
        }
        c.innerHTML=c.innerHTML+t[d];
        c.className='blinkTextCursor';
        setTimeout(function(){
            txt(d+1,c,t,tg,chat);
        },80);
    }

    function progerss() {
        setTimeout(function () {
            $('.circle').circleProgress({
                animationStartValue: 0,
                value: 1,
                reverse:true
            });
            setTimeout(function () {
                $('.circle').circleProgress({
                    animationStartValue: 1,
                    value: 0,
                    reverse:false
                });
                setTimeout(function () {
                    progerss()
                },16000)
            },16000)
        },3000);
    }
    function progress1(ind_circl) {
        $('#icn'+ind_circl+' .prog_anim').circleProgress({
            thickness: '8',
            reverse: false,
            animationStartValue: 0,
            value: 1,
            animation: {
                duration: 6000
            }
        });
        setTimeout(function () {
            $('#icn'+ind_circl+' .prog_anim').circleProgress({
                animationStartValue: 1,
                value: 0,
                thickness: '8',
                reverse: true,
                animation: {
                    duration: 9000
                }
            });
            setTimeout(function () {
                progress1(ind_circl);
            },16000);
        },16000)
    }

    var cur_icn;
    var last_ind=0;
    function anim_icon() {
        cur_ind=Math.floor((Math.random()*10)+1);
        if(last_ind==cur_ind){
            anim_icon();
            return
        }
        cur_icn=$('.go_home').children('img')[cur_ind];
        $(cur_icn).addClass('Around1');
        setTimeout(function () {
            // console.log(cur_ind);
            $(cur_icn).removeClass('Around1');
            last_ind=cur_ind;
            anim_icon();
        },2500);
    }


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
    stars(1);
    star_op(1);


    function stars(str) {
        if(str==7){
            setTimeout(function () {
                stars(1);
            },4000);
        }
        var cor1=(Math.random()*100)-50|0;
        var cor2=(Math.random()*100)-50|0;
        $('#head .bg #h_l'+str).css({"transform":"translate("+cor1+"%,"+cor2+"%)"});
        setTimeout(function () {
            stars(str+1);
        },10);
    }
    function star_op(op){
        $('#head .bg #h_l'+op).addClass('luch_op');
        setTimeout(function () {
            star_op(op+1);
        },900);
    }

    setTimeout(function () {
        head_anim(1);
    },300);
    function soc_icn(soc_index) {
        if(soc_index>=5){
            soc_icn(1);
        }else{
            $('.soc_icn').find('img').removeClass('bounce1');
            $('#soc_'+soc_index).find('img').addClass('bounce1');
            setTimeout(function () {
                soc_icn(soc_index+1);
            },3200);
        }
    }
    function head_anim(soc){
        if(soc==5){
            if(($window().width()>=992)){
                soc_icn(1);
            }
            // $('.soc_icn').find('img').addClass('bounce');
            return
        }
        $('#soc_'+soc).children('.hr').addClass('active');
        setTimeout(function () {
            $('#soc_'+soc).addClass('active');
            setTimeout(function () {
                $('#soc_'+soc).children('span').addClass('active');
            },200);
            setTimeout(function () {
                head_anim(soc+1);
            },900)
        },400);
    }
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
    ;

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
    var once2=!1;
    // function anim_icn(rad) {
    //     if (rad==5){
    //         return
    //     }
    //     if(once2 && (rad==1)){
    //         return
    //     }
    //     $('.lds-ring .load').css({"animation": "lds-ring 2s cubic-bezier(0.5, 0, 0.5, 1)"});
    //     setTimeout(function () {
    //         if (rad==4){
    //             $('.lds-ring .load').css({'opacity':'0'});
    //             progerss();
    //             anim_icon();
    //         }
    //         $('.lds-ring .load').css({"animation": "none"});
    //         $('.pomogaet .item'+(rad+1)).addClass('go_home');
    //         setTimeout(function () {
    //             $('.pomogaet .item'+(rad+1)).css({'opacity':'1'});
    //             setTimeout(function () {
    //                 $('.pomogaet .item'+(rad+1)).children('p').addClass('fadeInLeft');
    //                 $('.pomogaet .item'+(rad+1)).children('p').css({'opacity':'1'});
    //             },400);
    //         },500);
    //         setTimeout(function () {
    //             anim_icn(rad+1);
    //         },2000);
    //     },2000);
    // }
    function anim_icn(rad) {
        if (rad==5){
            return
        }
        if(once2 && (rad==1)){
            return
        }
        if(rad==1){
            $('.lds-ring .load').css({"animation": "lds-ring 2s cubic-bezier(0.5, 0, 0.5, 1)"});
            setTimeout(function () {
                // if (rad==4){
                //     $('.lds-ring .load').css({'opacity':'0'});
                //     progerss();
                //     anim_icon();
                // }
                // $('.lds-ring .load').css({"animation": "none"});
                $('.pomogaet .item'+(rad+1)).addClass('go_home');
                setTimeout(function () {
                    $('.pomogaet .item'+(rad+1)).css({'opacity':'1'});
                    setTimeout(function () {
                        $('.pomogaet .item'+(rad+1)).children('p').addClass('fadeInLeft');
                        $('.pomogaet .item'+(rad+1)).children('p').css({'opacity':'1'});
                    },400);
                },500);
                setTimeout(function () {
                    anim_icn(rad+1);
                },2000);
            },2000);
        }

            if (rad==4){
                $('.lds-ring .load').css({'opacity':'0'});
                progerss();
                anim_icon();
            }
            // $('.lds-ring .load').css({"animation": "none"});
            $('.pomogaet .item'+(rad+1)).addClass('go_home');
            setTimeout(function () {
                $('.pomogaet .item'+(rad+1)).css({'opacity':'1'});
                setTimeout(function () {
                    $('.pomogaet .item'+(rad+1)).children('p').addClass('fadeInLeft');
                    $('.pomogaet .item'+(rad+1)).children('p').css({'opacity':'1'});
                },400);
            },500);
            setTimeout(function () {
                anim_icn(rad+1);
            },1000);

    }
    function animateOn1() {
        anim_icn(1);
        once2=!0;
    }
    var cur_container;
    var oncee=false;
   function go_chat() {
       $('.text .hor_ln').addClass('active');
       setTimeout(function () {
           $('#razg_bef').addClass('active pulse-button');
           $('#but_anim3').addClass('blink')
           setTimeout(function () {
               $('.bol-line p').addClass('bounceInDown');
               $('.bol-line p').removeClass('opacity');
           },3000)
       },2000);
       if(!oncee){
           setTimeout(function () {
               botx2('.split_anim_1');
           },2000);
           cur_container=document.getElementById('chat-1');
           anim_chat(cur_container,indexArray)
       }
   }

   function botx2(name_div) {
       $(name_div).removeClass('active1');
       setTimeout(function () {
           $(name_div).removeClass('opacity');
       },200);
       $(name_div).addClass('active');
       setTimeout(function () {
           $(name_div).removeClass('active');
       },2000);
       setTimeout(function () {
           $(name_div).addClass('active1 ');
           setTimeout(function () {
               $(name_div).addClass('opacity');
               setTimeout(function () {
                   botx2(name_div);
               },1000)
           },1000);
       },3000);
   }

    function animateOn2() {
        go_chat();
        oncee=true;


    }
    var checkAnim=0;
    var checkAnim1=0;
    function go_cirles(ind_circl) {
       if(ind_circl==4){
           return
       }
        $('#icn'+ind_circl).children('.bg_cir').children().addClass('zoom');
        $('#icn'+ind_circl).children('.bold_bd,.bdsml').children().addClass('zoom');
        setTimeout(function () {
            $('#icn'+ind_circl).children('.bg_cir').children().css({'opacity': '1'});
                 $('#icn'+ind_circl).children('.bold_bd,.bdsml').children().css({'opacity': '1'});
                 setTimeout(function () {
                     if(ind_circl==2){
                         cur_container=document.getElementById('chat-2');
                         if(checkAnim==0){
                             a=1;
                             indexArray=1;
                             checkAnim=1;
                             anim_chat(cur_container,indexArray);
                         }
                     }
                     $('#icn'+ind_circl).find('.line1').css({'clip-path':'polygon(100% 0, 100% 0, 100% 100%, 0% 100%)'});
                     $('#icn'+ind_circl).find('.line_d').css({'clip-path':'polygon(0 0, 28% 0, 28% 100%, 0% 100%)'});
                     setTimeout(function () {
                         $('#icn'+ind_circl).find('.line1').css({'clip-path':'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'});
                         $('#icn'+ind_circl).find('.line_d').css({'clip-path':'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'});
                         setTimeout(function () {
                             $('#icn'+ind_circl).children('.anim_bor').children().css({'opacity': '1'});
                             $('#icn'+ind_circl).children('.dopol').children('span').css({'opacity': '1'});
                             $('#icn'+ind_circl).children('.icn_m').children().addClass('Around');
                             setTimeout(function () {
                                 $('#icn'+ind_circl).children('.icn_m').children().css({'opacity': '1'});
                                 go_cirles(ind_circl+1);
                                 setTimeout(function () {
                                     if(checkAnim1==0){
                                         checkAnim1=1;
                                         go_dots()
                                     }
                                 },8000)
                             },600);
                             setTimeout(function () {
                                 $('#icn'+ind_circl).children('.anim_bor').children().addClass('lds-ring1');
                                 progress1(ind_circl);
                             },2000)
                         },500)
                     },600)
                 },500)
        },600);
    }
    function go_dots() {
        $('.bottomx3').removeClass('active');
        setTimeout(function () {
            $('.bottomx3').addClass('active');
            setTimeout(function () {
                go_dots()
            },10000)
        },10000)
    }
    function go_cirles_mob(ind_circl) {
        $('#icn'+ind_circl).children('.bg_cir').children().addClass('zoom');
        $('#icn'+ind_circl).children('.bold_bd,.bdsml').children().addClass('zoom');
        setTimeout(function () {
            $('#icn'+ind_circl).children('.bg_cir').children().css({'opacity': '1'});
            $('#icn'+ind_circl).children('.bold_bd,.bdsml').children().css({'opacity': '1'});
            setTimeout(function () {
                $('#icn'+ind_circl).find('.line1').css({'clip-path':'polygon(100% 0, 100% 0, 100% 100%, 0% 100%)'});
                $('#icn'+ind_circl).find('.line_d').css({'clip-path':'polygon(0px 0px, 8% 0px, 8% 100%, 0% 100%)'});
                    setTimeout(function () {
                        $('#icn'+ind_circl).find('.line1').css({'clip-path':'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'});
                        $('#icn'+ind_circl).find('.line_d').css({'clip-path':'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'});
                        setTimeout(function () {
                            $('#icn'+ind_circl).children('.anim_bor').children().css({'opacity': '1'});
                            $('#icn'+ind_circl).children('.dopol').children('span').css({'opacity': '1'});
                            $('#icn'+ind_circl).children('.icn_m').children().addClass('Around');
                            setTimeout(function () {
                                $('#icn'+ind_circl).children('.icn_m').children().css({'opacity': '1'});
                            },600);
                            setTimeout(function () {
                                $('#icn'+ind_circl).children('.anim_bor').children().addClass('lds-ring1');
                                progress1(ind_circl);
                            },2000)
                        },500)
                    },600)
            },500)
        },600)
    }

    function animateOn3() {
        go_cirles(1);
    }


       // this=$('#icn1');
       //  $('#icn1').children('.bg_cir').children().addClass('zoom');
       //  $('#icn1').children('.bold_bd,.bdsml').children().addClass('zoom');
       //  setTimeout(function () {
       //      $('#icn1').children('.bg_cir').children().css({'opacity': '1'});
       //      $('#icn1').children('.bold_bd,.bdsml').children().css({'opacity': '1'});
       //      setTimeout(function () {
       //          $('#icn1').find('.line1').css({'clip-path':'polygon(100% 0, 100% 0, 100% 100%, 0% 100%)'});
       //          $('#icn1').find('.line_d').css({'clip-path':'polygon(0 0, 28% 0, 28% 100%, 0% 100%)'});
       //          setTimeout(function () {
       //              $('#icn1').find('.line1').css({'clip-path':'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'});
       //              $('#icn1').find('.line_d').css({'clip-path':'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'});
       //              setTimeout(function () {
       //                  $('#icn1').children('.anim_bor').children().css({'opacity': '1'});
       //                  $('#icn1').children('.dopol').children('span').css({'opacity': '1'});
       //                  $('#icn1').children('.icn_m').children().addClass('Around');
       //                  setTimeout(function () {
       //                      $('#icn1').children('.icn_m').children().css({'opacity': '1'});
       //                  },600);
       //                  setTimeout(function () {
       //                      $('#icn1').children('.anim_bor').children().addClass('lds-ring1');
       //                      progress1();
       //                  },2000)
       //              },500)
       //          },600)
       //      },500)
       //  }, 600)



        // setTimeout(function () {
        //     $('#icn1').children('.anim_bor').children().css({'opacity': '1'});
        //     $('#icn1').children('.icn_m').children().addClass('Around');
        //     setTimeout(function () {
        //         $('#icn1').children('.icn_m').children().css({'opacity': '1'});
        //         $('#icn1').children('.dopol').children('span').css({'opacity': '1'});
        //         setTimeout(function () {
        //             $('#icn1').children('.bdanim').addClass('bd_anim').css({'opacity':'1'});
        //             $('#icn1').children('.anim_bor').children().addClass('lds-ring1');
        //         },400)
        //     },500)
        // },500)}

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
    var oonce=false;

    function chat_dil(icon) {
        if(icon==11){
            setTimeout(function () {
                chat_dil(1)
            },2000);
        }
        if((icon>=1)&&(icon<=4)){
            $('.dial_bota').children().removeClass('wobble-hor-bottom');
            $('#icon_dil-'+icon).addClass('active');
            setTimeout(function () {
                chat_dil(icon+1)
            },350);
        }
        if((icon>=5)&&(icon<=10)){
            if(icon==5){
                setTimeout(function () {
                    $('#icon_dil-3').addClass('wobble-hor-bottom');
                },800);
                setTimeout(function () {
                    $('#icon_dil-2').addClass('wobble-hor-bottom');
                },1900);
                setTimeout(function () {
                    $('#icon_dil-4').addClass('wobble-hor-bottom');
                },2700);
                setTimeout(function () {
                    $('#icon_dil-1').addClass('wobble-hor-bottom');
                },4300);
                setTimeout(function () {
                    $('#icon_dil-'+(icon-4)).removeClass('active');
                    setTimeout(function () {
                        chat_dil(icon+1)
                    },350);
                },6000)
            }else{
                $('#icon_dil-'+(icon-4)).removeClass('active');
                setTimeout(function () {
                    chat_dil(icon+1)
                },350);
            }
        }
    }
    function oncefunc(){
        if(oonce){
            return
        }else{
            chat_dil(1);
        }

    }
    $('body').on('click','.razg',function () {
        $('.alina .bot-i').addClass('opacity');
        setTimeout(function () {
            $('.alina').addClass('transform container' ).removeClass('transformx');
            $('.bor2').css({'transform':'translateY(90%)'});
            $('.alina  .razg').addClass('none');
            $('.alina .text hr').addClass('none');
            $('.sms').removeClass('none');
            $('#but_anim3').addClass('none');
            setTimeout(function () {
                $('#vers-1,#vers-2').removeClass('none');
                $('.alina .bot-i').removeClass('opacity');
                $('.sms').removeClass('opacity');
                $('.sms .hor_ln').addClass('active')
                $('#go_back').removeClass('none ');
                setTimeout(function () {
                    $('.sms .otvet').addClass('active pulse-button');
                    $('#but_anim4').addClass('blink');
                },1500);
            },1000);
        },300);

    });
    $('body').on('click','#go_back',function () {
        $('.alina .bot-i').addClass('opacity');
        setTimeout(function () {
            $('.sms .otvet').removeClass('active pulse-button');
            $('#but_anim4').removeClass('blink');
            $('.bor2').css({'transform':'none'});
            $('#vers-1,#vers-2').addClass('none');
            $('.sms').addClass('opacity');
            $('.sms .hor_ln').removeClass('active');
            $('#go_back').addClass('none ');
            $('.alina').removeClass('transform container' ).addClass('transformx');
            $('.sms').addClass('none');
            setTimeout(function () {
                $('.alina .bot-i').removeClass('opacity');
                $('.alina  .razg').removeClass('none');
                $('.alina .text hr').removeClass('none');
                $('#but_anim3').removeClass('none');
            },1000);
        },300);
    });

    function animateOn4() {

    }
    function animateOn5() {
        oncefunc();
        oonce=true;
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
if(animate_on == 0){$('.forma, .forma .form1, .forma .form2 ').removeClass('active');$('.phone_form,.smile_form ').slideUp();$('.form2').removeClass('moveTogether');} 
        resetScroll();
    }
    var ahref = 0;
    var hash = window.location.hash;
    var firstAnimate = false;
    if (!firstAnimate && hash == '#structure') {
        nextSection();
    }
    if (!firstAnimate && hash == '#portfolio') {
        nextSection();
        setTimeout(function() {
            nextSection();
        }, 1500);
    }
    if (!firstAnimate && hash == '#kinds') {
        nextSection();
        setTimeout(function() {
            nextSection();
        }, 1500);
        setTimeout(function() {
            nextSection();
        }, 3000);
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
                } else if (animate_on == 3) {
                    animateOn3();
                    animate_on = 4;
                } else if (animate_on == 4) {
                    // alert(5)
                    animateOn4();
                    animate_on = 5;
                }else if(animate_on==5){
                    animateOn5()
                    // alert()
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