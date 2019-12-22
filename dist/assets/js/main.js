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

    /* ------------------------------------------- */
    /*           IMAGE TO BACKGROUND               */
    /* ------------------------------------------- */
    function changeImgToBg(imgSel, parentSel) {

        if (!imgSel) {
            console.info('no img selector');
            return false;
        }

        let $parent,
            _this;

        $(imgSel)
            .each(function () {
                _this = $(this);
                if ('none' == _this.css('display')) {
                    return true;
                }

                $parent = _this.closest(parentSel);
                $parent = $parent.length ? $parent : _this.parent();
                $parent.css('background-image', 'url(' + _this.attr('src') + ')');
                _this.hide();
            });
    }

    changeImgToBg('.js-bg');

    /* ------------------------------------------- */
    /*             SEE MORE BUTTON                 */
    /* ------------------------------------------- */
    $('.products__see-more-btn').on('click', function() {
        $('.products__item-wrap').slideDown();
        $('.products__item-wrap').removeClass('hide');
    });
});