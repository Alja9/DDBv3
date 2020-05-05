// Scrolling Effect
$(window).on("scroll", function() {
    if ($(window).scrollTop()) {
        $('nav').addClass('merah');
    } else {
        $('nav').removeClass('merah');
    }
});

// Menu Navbar Mobile
$(document).ready(function() {
    $("#iconNavMenu").on("click", function () {
        $("nav ul").toggleClass("showing");
    });
});

// Icon Menu Mobile
$(document).ready(function () {
    $('#iconNavMenu').click(function () {
        $(this).toggleClass('open');
    });
    $('ul li a').on("click", function () {
        $('#iconNavMenu').click();
    });
});

//counting
var hitungAwal = 0;
$(window).scroll(function() {
    var nTop = $('.count').offset().top - window.innerHeight;
    if (hitungAwal == 0 && $(window).scrollTop() > nTop) {
        $('.count').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 6000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        }); hitungAwal = 1;}
});