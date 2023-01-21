$(document).ready(function() {
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