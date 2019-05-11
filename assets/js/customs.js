$(document).ready(function() {

    'use strict';

    var imgLogo = $('.logo img'), navbar = $('header');

    $(window).bind('mousewheel', function(e){
        if(e.originalEvent.wheelDelta / 120 > 0) {
            var imglogosml = imgLogo.attr('src').replace('big', 'small');
            imgLogo.attr('src', imglogosml);
            navbar.addClass("scroll-up");
            navbar.removeClass("scroll-down");
            $('footer').removeClass("fix-footer");

            var a = $(window).scrollTop();
            if (a == 0) {
                navbar.removeClass("scroll-up");
                var imglogosml = imgLogo.attr('src').replace('small', 'big');
                imgLogo.attr('src', imglogosml);
            }
        }
        else{
            navbar.removeClass("scroll-up");
            navbar.addClass("scroll-down");
        }

        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop() + 260;
        // console.log('scrollHeight: ' + scrollHeight);
        // console.log('scrollPosition: ' + scrollPosition);
        if (scrollHeight <= scrollPosition) {
            $('footer').addClass("fix-footer");
        } else {
            $('footer').removeClass("fix-footer");
        }
    });

    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        scrollBar: true
    });

    // click show menu
    $('#navLine').click(function() {
        $(this).toggleClass('active');
        $('.hd-right').toggleClass('nav-active');
    });

});