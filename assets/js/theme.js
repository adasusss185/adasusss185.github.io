$( document ).ready(function() {
    $(this).scrollTop(0);

    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".fixed-top").addClass("navbar--dark");
            $(".fixed-top").removeClass("navbar--light");
        } else {
            $(".fixed-top").addClass("navbar--light");
            $(".fixed-top").removeClass("navbar--dark");
        }
    });

    $('a.page-scroll').click(function(){
        $('html, body').animate({
            scrollTop: $('.main-page-content').offset().top + (-70)
        }, 1000);
        return false;
    });

    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 500) {
            $('.footer').css('display', 'flex');
        } else {
            $('.footer').css('display', 'none');
        }
    });
});
