$(document).ready(function () {
    svg4everybody({});

    let mainSubnavHover = function () {
        $('.main-subnav__item').hover(
            function () {
                let parentList = $(this).closest('.main-subnav__list');
                if ($(this).children('.main-subnav__list').length) {
                    let catNavHeight = $(this).children('.main-subnav__list').outerHeight();
                    if (parentList.outerHeight() < catNavHeight) {
                        parentList.css('height', catNavHeight);
                    }
                    parentList.css('width', '720');
                }
            }, function () {
                let parentList = $(this).closest('.main-subnav__list');
                parentList.css('height', 'auto');
                parentList.css('width', 'auto');
            }
        )
    };

    let openSearchForm = function () {
        $(document).on('click','.search__icon',function () {
            $(this).parent().addClass('search--open');
        });
    };

    let clearSearchForm = function () {
        $(document).on('click', '.search__clear', function () {
            $('.search__input').val('');
        });

    };

    let bannerSlider = function () {
        $('.js-banner').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            prevArrow: ".banner__navigation--prev",
            nextArrow: ".banner__navigation--next",
            customPaging : function(slider, i) {
                return '<a class="banner__dot"></a>';
            },
            appendDots: '.banner__dots'
        })
    };

    let tabs = function () {
        $('.tabs-navigation__item').click(function() {
            let tabName = $(this).attr('show-tab');
            $(this).addClass('tabs-navigation__item--active').siblings()
                .removeClass('tabs-navigation__item--active');
            $('.tabs__body .' + tabName).addClass('tab--active').siblings().removeClass('tab--active');
            if ('.tabs__body .' + tabName + '.js-product-line-slider') {
                $('.js-product-line-slider').each(function () {
                    $(this).slick('refresh');
                });
                $('.js-product-line__slider').each(function () {
                    $(this).slick('refresh');
                });
            }
        });
    };

    let productPrevSlider = function () {
        $('.js-product-prev__slider').each(function (idx) {
            let carouselId = "carousel" + idx;
            this.closest('.product-prev').id = carouselId;
            $(this).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                appendDots: '#' + carouselId + ' .product-prev__colors',
                customPaging : function(slider, i) {
                    let color = $(slider.$slides[i]).data('color');
                    return '<a class="product-prev__color" style="background-color:' + color + '"></a>'
                }
            });
        });
    };

    let productLineSlider = function () {
        $('.js-products-line-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1
        })
    };

    mainSubnavHover();
    openSearchForm();
    clearSearchForm();
    bannerSlider();
    tabs();
    productPrevSlider();
    productLineSlider();

});