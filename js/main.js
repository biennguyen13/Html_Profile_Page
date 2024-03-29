(function($) {
    "use strict";
    $(window).on('load', function(event) { $('.preloader').delay(500).fadeOut(500); });

    $(".navbar-toggler").on('click', function() { $(this).toggleClass('active'); });

    $(".navbar-nav a").on('click', function() { $(".navbar-toggler").removeClass('active'); });

    $(".navbar-nav a").on('click', function() { $(".navbar-collapse").removeClass("show"); });

    $(window).on('scroll', function(event) {
        var scroll = $(window).scrollTop();

        if (scroll < 10) { $(".navigation").removeClass("sticky"); } else { $(".navigation").addClass("sticky"); }
    });

    var scrollLink = $('.page-scroll');
    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {
            var sectionOffset = $(this.hash).offset().top - 73;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');

                $(this).parent().siblings().removeClass('active');
            }
        });
    });

    function parallaxMouse() {
        if ($('#parallax').length) {
            var scene = document.getElementById('parallax');

            var parallax = new Parallax(scene);
        };
    };

    parallaxMouse();
    if ($('.progress-line').length) {
        $('.progress-line').appear(function() {
            var el = $(this);

            var percent = el.data('width');
            $(el).css('width', percent + '%');
        }, { accY: 0 });
    }


    $('.counter').counterUp({ delay: 10, time: 1600, });

    $('.image-popup').magnificPopup({ type: 'image', gallery: { enabled: true } });

    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 600) { $('.back-to-top').fadeIn(200) } else { $('.back-to-top').fadeOut(200) }
    });

    $('.back-to-top').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({ scrollTop: 0, }, 1500);
    });
}(jQuery));