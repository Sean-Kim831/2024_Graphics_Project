$(document).ready(function(){
    // Smooth scrolling
    $('.nav-link').on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function(){
            window.location.hash = target.selector;
        });
    });

    $('.parallax-window').parallax({
        imageSrc: 'img/Gosuckjung.jpeg'  // 패럴랙스 효과를 위한 이미지 경로
    });

    $('#menu-button').click(function () {
        $('.header').toggleClass('open');
    });

    $(window).resize(function() {
        if ($(window).width() > 768 && $(window).height() > 600) {
            $('.header').removeClass('open');
        }
    });
});
