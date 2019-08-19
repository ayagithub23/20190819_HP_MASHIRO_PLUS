$(function () {
    $(".mainContentBannerMore").on("click", function () {
        var index = $('.mainContentBannerMore').index(this);
        $(".mainContentElement").eq(index).slideToggle(500);
    });

    $(window).scroll(function () {
        $('.mainContentTvBoxCheck').each(function () {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200) {
                $(this).css('opacity', '1');
                $(this).css('transform', 'translateY(0%)');
            }
        });
    });
    $('.slickBox').slick({
        autoplay: true,
        adaptiveHeight: true,
        arrows: true,
        dots: true,
        infinite: true,
        speed: 150,
        autoplaySpeed: 1000,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<div class="prev"><i class="fa fa-chevron-circle-left fa-2x" aria-hidden="true"></i></div>',
        nextArrow: '<div class="next"><i class="fa fa-chevron-circle-right fa-2x" aria-hidden="true"></i></div>'
    });


    $(function () {
        $("dl").click(function () {
            $("test").removeClass("test")
            $(this).toggleClass("border")
                .siblings()
                .removeClass("border");
        });
        $(".ac").on("click", function () {
            $(this)
                .next()
                .slideToggle(300);
            $("dd")
                .not($(this).next("dd"))
                .slideUp();
            $(this).toggleClass("active");
            $(".ac")
                .not($(this))
                .removeClass("active");
        });
        $("dt.ac:nth(0)").trigger("click");
    });

})