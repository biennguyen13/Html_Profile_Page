(function($) {
    "use strict";

    $(".navbar-toggler").on('click', function(event) {
        $(this).toggleClass('active');
    });

    $(".navbar-nav a").on('click', function() { $(".navbar-toggler").removeClass('active'); });

    $(".navbar-nav a").on('click', function() { $(".navbar-collapse").removeClass("show"); });

    $(window).on('scroll', function(event) {
        var scroll = $(window).scrollTop();
        if (scroll < 10) { $(".navigation").removeClass("sticky"); } else { $(".navigation").addClass("sticky"); }
    });
    // lấy các thẻ a trong navbar-nav
    var scrollLink = $('.page-scroll');
    //mỗi khi cuộn màn hình
    $(window).scroll(function() {
        //tọa độ top hiện tại của window
        var scrollbarLocation = $(this).scrollTop();
        //loop mỗi thẻ a
        scrollLink.each(function() {
            //lấy offset-top của section có id tương đương với href
            var sectionOffset = $(this.hash).offset().top - 73;
            //so sánh với scroll-top của window
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

}(jQuery));