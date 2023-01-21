$(document).ready(function(){
    var owl_part = $("#part-slider");
    owl_part.owlCarousel({
        items: 2,
        loop:true,
        itemsDesktop: [1049, 2],
        itemsDesktopSmall: [900,2],
        itemsTablet: [670, 2],
        itemsMobile: false,
        pagination: false,
    });
    $("#part-next").click(function() {
        owl_part.trigger('next.owl');
    });
    $("#part-prev").click(function() {
        owl_part.trigger('prev.owl');
    });
    $(".d_top").click(function() {
        $(this).parent().addClass('hover');
        $(this).siblings('.overlay_list').addClass('active');
    });
    $('.like_project').click(function() {
        $(this).children('i').toggleClass('active')
    });
    $('.overlay_list').click(function() {
        $(this).parent().removeClass('hover');
        $(this).removeClass('active');
    });
    $('.directions .item').hover(function() {
        $(this).addClass('hover');
    },function () {
        const ths = $(this)
        if(!$(ths).children('.overlay_list').hasClass('active')) {
            $(ths).removeClass('hover');
        }
    });
    $('.overlay_list .close-modal').click(function() {
        $(this).parent().removeClass('active')
    });
    $("body").on("click",".portfolio_link",function(e){
        e.preventDefault();
        var id=$(this).attr('href');
        var category=$(this).data('category');
        var image_id=$(this).data('id');
        var href_project = $(this).data('href');
        var modal = $('.modal[data-id='+id+']');
        var image = $('<img>',{
            src : `assets/img/portfolio/${category}/${image_id}.jpg`
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
            "data-id" : "contact_modal"
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
        $('.modal-portfolio').scrollTop(0)
        $('body').css({'overflow':'hidden'})
    });



    var myMap;
    ymaps.ready(init);
    //
    function init() {
        myMap = new ymaps.Map('map', {
            center: [43.245931448034604,76.92571410252846],
            zoom: 18,
            controls: ['zoomControl']
        }), myPlacemark = new ymaps.Placemark([43.245931448034604,76.92571410252846], {
            hintContent: 'Маркетинговая компания Maint',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'assets/img/placemark.png',
            iconImageSize: [40,54],
            iconImageOffset: [-20, -54]
        });
        myMap.geoObjects.add(myPlacemark)
    }
    var owl=$("#carousel");owl.owlCarousel({items:1,margin:10,loop:!0,smartSpeed:450,dotsContainer:'.change_item',video:!0,center:!0,});var header_pos=$('.h_top').offset().top;var block_pos=$('.txt_block').offset().top;var height=block_pos-header_pos;$('.green_line').css({top:-height,height:height});$('.green_line3').css({left:0});$('.green_line2').css({bottom:'60%'});$('.gl_circle').css({opacity:1});function offsetBottom(el,i){i=i||0;return $(el)[i].getBoundingClientRect().bottom}
    var header_btm=offsetBottom('header');var block_btm=offsetBottom('.txt_block');var height2=header_btm-block_btm;$('.blue_line').css({bottom:-height2,height:height2});$('.blue_line3').css({right:0});$('.blue_line2').css({top:'60%'});$('.bl_circle').css({opacity:1});var click=0;var click2=0;$("body").on("click",".s_img",function(e){e.preventDefault();if(click2==0){$('header .h_top').animate({top:'3.5em'},500);click2=1}else{setTimeout(function(){$('header .h_top').animate({top:0},500)},300)
        click2=0}
        $('.search_top').slideDown(500).promise().done(function(){if(click==0){$('.search_input').css({opacity:1});click=1}else{$('.search_input').css({opacity:0}).promise().done(function(){setTimeout(function(){$('.search_top').slideUp(500)},300)});click=0}})});var click_social=0;$("body").on("click",".social_call",function(e){if(click_social==0){$('header .contact_slide').slideDown();setTimeout(function(){$('header .link').css({opacity:1})},250);click_social=1}else{$('header .link').css({opacity:0})
        setTimeout(function(){$('header .contact_slide').slideUp()},250);click_social=0}});$("body").click(function(event){if($(event.target).closest(".social_call").length===0){$('header .link').css({opacity:0})
        setTimeout(function(){$('header .contact_slide').slideUp()},250);click_social=0}});$("body").on("click","#msearch_btn, #msearch_btn2",function(e){e.preventDefault();$('.msearch ').fadeIn()});$("body").on("click","#search_close, #search_close2",function(e){e.preventDefault();$('.msearch ').fadeOut()});$("body").on("click","#mshare_btn, #mshare_btn2",function(e){e.preventDefault();$('.mshare_block').slideToggle()});$("body").on("click",".menu_change",function(e){e.preventDefault();var id=$(this).data('id');$('.menu_list_show').slideUp();$('.menu_change').removeClass('active');if($('.menu_list_show[data-id='+id+']').hasClass('active')){$('.menu_list_show[data-id='+id+']').removeClass('active').slideUp()}else if(!$('.menu_list_show[data-id='+id+']').hasClass('active')){$('.menu_list_show[data-id='+id+']').addClass('active').slideDown();$(this).addClass('active').slideDown();if($('.menu_list_show[data-id='+id+']').addClass('active').slideDown()){$('.menu_list_show').not($('.menu_list_show[data-id='+id+']')).removeClass('active')}}});var menu_width=$('.hi_item1').width();$('.bg_menu, .menu_show').css({width:menu_width});$(window).resize(function(){var menu_width=$('.hi_item1').width();$('.bg_menu').css({width:menu_width})});$("body").on("click","a.menu_btn",function(e){e.preventDefault();if(!$("#slide").hasClass('active')){$('.menu_icon').hide().promise().done(function(){$('.menu_icon_after').show()});$('.mnbottom').addClass('bg_fill');$("#slide").slideDown().addClass('active')}else{$("#slide").slideUp().removeClass('active');setTimeout(function(){$('.menu_icon_after').hide().promise().done(function(){$('.menu_icon').show()});$('.mnbottom').removeClass('bg_fill')},250)}});$("body").on("click","a#close",function(e){e.preventDefault();$("#slide").slideUp().removeClass('active');setTimeout(function(){$('.menu_icon_after').hide().promise().done(function(){$('.menu_icon').show()});$('.mnbottom').removeClass('bg_fill')},250);setTimeout(function(){$(".menu_list_show ").removeClass('active').hide()},1000)});$("body").on("click",".order_btn, .order_btn2, #popup__toggle, .modal_link",function(e){e.preventDefault();;var id=$(this).data('id');$('.modal[data-id='+id+']').fadeIn().promise().done(function(){$('.modal[data-id='+id+'] .modal_content').css('opacity','1').addClass('animated zoomIn')})});$("body").on("click",".close_modal, .modal_overlay",function(){$('.modal').fadeOut();$('body').css({'overflow':'','overflow-x':'hidden'});});
        // $("body").on("click",".pozv_wpp",function(e){e.preventDefault();var id=$(this).data('id');$('.modal[data-id='+id+']').fadeIn().promise().done(function(){$('.modal[data-id='+id+'] .modal_content').css('opacity','1').addClass('animated zoomIn')})});
        $("body").on("click","a#mmenu_btn, a#mmenu_btn2",function(e){e.preventDefault();$('.mmenu').slideDown()});$("body").click(function(event){if($(event.target).closest("a#mmenu_btn, a#mmenu_btn2, .mmenu_list").length===0){$('.mmenu').slideUp()}});$("body").on("click",".btn_m",function(){var id=$(this).data('id');$('.sub_list').fadeOut();$('.btn_m').removeClass('active');if($('.sub_list[data-id='+id+']').hasClass('active')){$('.sub_list[data-id='+id+']').removeClass('active').fadeOut()}else if(!$('.sub_list[data-id='+id+']').hasClass('active')){$('.sub_list[data-id='+id+']').addClass('active').fadeIn();$(this).addClass('active').fadeIn();if($('.sub_list[data-id='+id+']').addClass('active').fadeIn()){$('.sub_list').not($('.sub_list[data-id='+id+']')).removeClass('active')}}});$("body").on("click",".md_in",function(){var id=$(this).data('id');$('.change_href_pages').hide();$('.md_in').removeClass('active');if($('.change_href_pages[data-id='+id+']').hasClass('active')){$('.change_href_pages[data-id='+id+']').removeClass('active').hide()}else if(!$('.change_href_pages[data-id='+id+']').hasClass('active')){$('.change_href_pages[data-id='+id+']').addClass('active').show();$(this).addClass('active').show();if($('.change_href_pages[data-id='+id+']').addClass('active').show()){$('.change_href_pages').not($('.change_href_pages[data-id='+id+']')).removeClass('active')}}});$("body").on("click",".close2",function(e){e.preventDefault();$('.change_href_pages ').removeClass('active').hide();$('.md_in').removeClass('active')});if($(window).width()<992){$('.tmp').removeClass('anim-btn on tmp')}
    $("body").on("click",".mcomp_img",function(){$('.mcomp_img img').removeClass('run')})
    $(".mcomp_img").scroll(function(){$('.mcomp_img img').removeClass('run')})
    $('body').on('click','.search_input_block button.btn-search',function(){var input=$('.search_input_block input');input.addClass('active');var btn=$('.search_input_block button');setTimeout(function(){btn.attr('type','submit')},200)});$("body").click(function(event){if($(event.target).closest(".search_input_block").length===0){var input=$('.search_input_block input');input.removeClass('active');var btn=$('.search_input_block button');btn.attr('type','button')}})});jQuery(document).ready(function(e){function s(){a(e(".animated-headline.letters").find("b")),n(e(".animated-headline"))}
    function a(s){s.each(function(){var s=e(this),a=s.text().split(""),n=s.hasClass("is-visible");for(i in a)s.parents(".scale").length>0&&(a[i]=" "==a[i]?'<em class="word-spacer">'+a[i]+"</em>":"<em>"+a[i]+"</em>"),a[i]=n?'<i class="in">'+a[i]+"</i>":"<i>"+a[i]+"</i>";var t=a.join("");s.html(t).css("opacity",1)})}
    function n(i){var s=h;i.each(function(){var i=e(this);if(i.hasClass("loading-bar"))s=m,setTimeout(function(){i.find(".animated-words-wrapper").addClass("is-loading")},u);else if(i.hasClass("clip")){var a=i.find(".animated-words-wrapper"),n=a.width()+10;a.css("width",n)}else if(!i.hasClass("type")){var d=i.find(".animated-words-wrapper b"),l=0;d.each(function(){var i=e(this).width();i>l&&(l=i)})}
        setTimeout(function(){t(i.find(".is-visible").eq(0))},s)})}
    function t(i){var e=o(i);if(i.parents(".animated-headline").hasClass("type")){var s=i.parent(".animated-words-wrapper");s.addClass("selected").removeClass("waiting"),setTimeout(function(){s.removeClass("selected"),i.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")},C),setTimeout(function(){d(e,f)},w)}else if(i.parents(".animated-headline").hasClass("letters")){var a=i.children("i").length>=e.children("i").length?!0:!1;l(i.find("i").eq(0),i,a,p),r(e.find("i").eq(0),e,a,p)}else i.parents(".animated-headline").hasClass("clip")?i.parents(".animated-words-wrapper").animate({width:"2px"},v,function(){c(i,e),d(e)}):i.parents(".animated-headline").hasClass("loading-bar")?(i.parents(".animated-words-wrapper").removeClass("is-loading"),c(i,e),setTimeout(function(){t(e)},m),setTimeout(function(){i.parents(".animated-words-wrapper").addClass("is-loading")},u)):(c(i,e),setTimeout(function(){t(e)},h))}
    function d(i,e){i.parents(".animated-headline").hasClass("type")?(r(i.find("i").eq(0),i,!1,e),i.addClass("is-visible").removeClass("is-hidden")):i.parents(".animated-headline").hasClass("clip")&&i.parents(".animated-words-wrapper").animate({width:i.width()+10},v,function(){setTimeout(function(){t(i)},T)})}
    function l(i,s,a,n){if(i.removeClass("in").addClass("out"),i.is(":last-child")?a&&setTimeout(function(){t(o(s))},h):setTimeout(function(){l(i.next(),s,a,n)},n),i.is(":last-child")&&e("html").hasClass("no-csstransitions")){var d=o(s);c(s,d)}}
    function r(i,e,s,a){i.addClass("in").removeClass("out"),i.is(":last-child")?(e.parents(".animated-headline").hasClass("type")&&setTimeout(function(){e.parents(".animated-words-wrapper").addClass("waiting")},200),s||setTimeout(function(){t(e)},h)):setTimeout(function(){r(i.next(),e,s,a)},a)}
    function o(i){return i.is(":last-child")?i.parent().children().eq(0):i.next()}
    function c(i,e){i.removeClass("is-visible").addClass("is-hidden"),e.removeClass("is-hidden").addClass("is-visible")}
    var h=2500,m=3800,u=m-3e3,p=50,f=150,C=500,w=C+800,v=600,T=3000;s()
    })