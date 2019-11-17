$(document).ready(function () {
    /* ------------------------------------------- */
    /*                  PRELOADER                  */
    /* ------------------------------------------- */
    $('#preloader').fadeOut();

    /* ------------------------------------------- */
    /*                  SUB MENU                   */
    /* ------------------------------------------- */
    $('.icon-menu').on('click', function (e) {
        e.preventDefault();
        $('.top-bar__menu').slideToggle();
    });

    /* ------------------------------------------- */
    /*               ACTIVE MENU                   */
    /* ------------------------------------------- */
    $(".top-bar__menu a")
        .click(function (e) {
            let link = $(this);

            if (link.hasClass("active")) {
                link.removeClass("active");
            } else {
                link.addClass("active");
            }
        })
        .each(function () {
            let link = $(this);
            if (link.get(0).href === location.href) {
                link.addClass("active").parents("li").addClass("active");
                return false;
            }
        });

    $(".footer__nav-menu a")
        .click(function (e) {
            let link = $(this);

            if (link.hasClass("active")) {
                link.removeClass("active");
            } else {
                link.addClass("active");
            }
        })
        .each(function () {
            let link = $(this);
            if (link.get(0).href === location.href) {
                link.addClass("active").parents("li").addClass("active");
                return false;
            }
        });

});