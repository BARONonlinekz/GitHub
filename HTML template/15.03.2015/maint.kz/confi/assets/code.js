
$(document).ready(function() {
    $("body").on("click", ".menu_change", function(e) {
        e.preventDefault();
        var id = $(this).data('id');
        $('.menu_list_show').slideUp();
        $('.menu_change').removeClass('active');
        if ($('.menu_list_show[data-id=' + id + ']').hasClass('active')) {
            $('.menu_list_show[data-id=' + id + ']').removeClass('active').slideUp()
        } else if (!$('.menu_list_show[data-id=' + id + ']').hasClass('active')) {
            $('.menu_list_show[data-id=' + id + ']').addClass('active').slideDown();
            $(this).addClass('active').slideDown();
            if ($('.menu_list_show[data-id=' + id + ']').addClass('active').slideDown()) {
                $('.menu_list_show').not($('.menu_list_show[data-id=' + id + ']')).removeClass('active')
            }
        }
    });
    var menu_width = $('.hi_item1').width();
    $('.bg_menu, .menu_show').css({
        width: menu_width
    });
    $(window).resize(function() {
        var menu_width = $('.hi_item1').width();
        $('.bg_menu').css({
            width: menu_width
        })
    });
    $("body").on("click", "a.menu_btn", function(e) {
        e.preventDefault();
        if(!$("#slide").hasClass('active')){
            $("#slide").slideDown().addClass('active');
        }else{
            $("#slide").slideUp().removeClass('active');
        }
    });
    $("body").on("click", "a#close", function(e) {
        e.preventDefault();
        $("#slide").slideUp().removeClass('active');
        setTimeout(function(){
            $(".menu_list_show ").removeClass('active').hide();
        },1000);
    });
});
