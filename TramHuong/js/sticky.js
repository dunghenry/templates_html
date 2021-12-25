$(window).scroll(function(){
    var oTop = $(".section-content").offset().top -700;
    if ($(window).scrollTop() > oTop) {
        $('.bottom-bar').addClass('sticky');
    } else {
        $('.bottom-bar').removeClass('sticky');
    }
})