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

    scrollLink.on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({ scrollTop: $(this.hash).offset().top, },
            0.25 * Math.abs($(this.hash).offset().top - $(window).scrollTop()));
    });

    function parallaxMouse() {
        if ($('#parallax').length) {
            var scene = document.getElementById('parallax');
            var parallax = new Parallax(scene);
        };
    };

    parallaxMouse();
    // if ($('.progress-line').length) {
    //     $('.progress-line').appear(function() {
    //         var el = $(this);

    //         var percent = el.data('width');
    //         $(el).css('width', percent + '%');
    //     }, { accY: 0 });
    // }

    // $('.counter').counterUp({ delay: 10, time: 1600, });

    //$('.image-popup').magnificPopup({ type: 'image', gallery: { enabled: true } });

    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 600) { $('.back-to-top').fadeIn(200) } else { $('.back-to-top').fadeOut(200) }
    });

    $('.back-to-top').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({ scrollTop: 0, }, 0.25 * $(window).scrollTop());
    });

    function Progress_Line() {
        var isProgressWasRan = false;
        var offset_top_section_about = $('#about').offset().top;
        var $progress_line_List = $('.about-skills .skill-item .skill-bar .bar-inner .progress-line');
        $progress_line_List.each(function() {
            $(this).css("width", "0%");
        });

        $(window).scroll(function() {
            if (isProgressWasRan) { return; }
            if (offset_top_section_about <= $(this).scrollTop() + $(this).height() * 0.5) {
                isProgressWasRan = true;
                $progress_line_List.each(function() {
                    var data_width = $(this).attr('data-width');
                    $(this).css('width', data_width + '%');
                    // Progress_Run();
                })
            }
        })
    }

    function Progress_Run(data_width, ) {
        var elem = document.getElementById("myBar");
        var width = 10;
        var id = setInterval(Run, 10);

        function Run() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
                elem.innerHTML = width * 1 + '%';
            }
        }
    }
    Progress_Line();

    var a = $('.about-content .about-title').parent();
    console.log(a);

    // scroll reveal js
    ScrollReveal().reveal($('section'), { delay: 750 });

}(jQuery));