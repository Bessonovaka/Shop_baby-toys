$(document).ready(function () {
  svg4everybody({});

  let catalogNavHover = function () {
    $('.catalog-nav__item').hover(
      function () {
        let parentList = $(this).closest('.catalog-nav__list');
        if ($(this).children('.catalog-nav__list').length) {
          let catNavHeight = $(this).children('.catalog-nav__list').outerHeight();
            if (parentList.outerHeight() < catNavHeight) {
                parentList.css('height', catNavHeight);
              }
                parentList.css('width', '720');
          }
      }, function () {
            let parentList = $(this).closest('.catalog-nav__list');
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
            appendDots: '.banner__dots',
            customPaging : function(slider, i) {
                return '<div class="banner__dot"></div>';
            },
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                    }
                }
            ]
        })
    };

    let tabs = function () {
        $('.tabs-navigation__item').click(function() {
            let tabName = $(this).attr('show-tab'),
                tabsBody = $(this).closest('.tabs').find('.tabs__body')[0],
                tab = $(tabsBody).find('.' + tabName);
            $(this).addClass('tabs-navigation__item--active').siblings().removeClass('tabs-navigation__item--active');
            $(tab).addClass('tab--active').siblings().removeClass('tab--active');
            if ($(tabsBody).find('.js-product-line-slider').length) {
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
            let productPrevSliderClass = "product-prev-slider-" + idx;
            this.closest('.product-prev').classList.add(productPrevSliderClass);
            $(this).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                appendDots: '.' + productPrevSliderClass + ' .product-prev__colors',
                swipe: false,
                infinite: false,
                customPaging : function(slider, i) {
                    let color = $(slider.$slides[i]).data('color');
                    return '<a class="product-prev__color" style="background-color:' + color + '"></a>'
                }
            });
        });
    };

    let productLineSlider = function () {
        $('.js-products-line-slider').each(function (idx) {
            let productsLineSliderId = "products-line-slider-" + idx;
            this.closest('.products-line-slider').id = productsLineSliderId;
            $(this).slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: false,
                dots: true,
                appendDots: '#' + productsLineSliderId + ' .products-line-slider__dots',
                prevArrow: '#' + productsLineSliderId + ' .products-line-slider__btn--prev',
                nextArrow: '#' + productsLineSliderId + ' .products-line-slider__btn--next',
                customPaging : function(slider, i) {
                    return '<div class="products-line-slider__dot"></div>';
                },
                responsive: [
                    {
                        breakpoint: 1139,
                        settings: {
                            slidesToShow: 3
                        }
                    },{
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2
                        }
                    },{
                        breakpoint: 550,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        });
    };

    let mobileMenu = function () {
        $(document).on('click','.mobile-menu__toggle', function () {
            $(this).parent().addClass('mobile-menu--open');
            if ($(window).width() < 768) {
                $('html').addClass('fixed');
                $('.wrapper').addClass('mobile-menu-open');
            }
        });
        $(document).on('click','.mobile-menu__close', function () {
            $(this).closest('.mobile-menu').removeClass('mobile-menu--open');
            if ($(window).width() < 768) {
                $('html').removeClass('fixed');
                $('.wrapper').removeClass('mobile-menu-open');
            }
        });
    };

    catalogNavHover();
    openSearchForm();
    clearSearchForm();
    bannerSlider();
    tabs();
    productPrevSlider();
    productLineSlider();
    mobileMenu();

});