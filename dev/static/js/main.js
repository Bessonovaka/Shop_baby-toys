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
            if ($(tabsBody).find('.js-products-line-slider').length) {
                $('.js-products-line-slider').each(function () {
                    $(this).slick('refresh');
                });
                $('.js-products-line__slider').each(function () {
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
                    if (color === '#ffffff') {
                        return '<div class="product-prev__color product-prev__color--white" style="background-color:' + color + '"></div>'
                    } else {
                        return '<div class="product-prev__color" style="background-color:' + color + '"></div>'
                    }
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

    let categorySlider = function () {
        $('.js-category-slider').slick({
            slidesToShow: 6,
            dots: true,
            arrows: false,
            appendDots: '.category-slider__dots',
            customPaging: function (slider, i) {
                return '<div class="category-slider__dot"></div>';
            },
            responsive: [
                {
                    breakpoint: 1139,
                    settings: {
                        slidesToShow: 4
                    }
                },{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3
                    }
                },{
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        })
    };

    let productSlider = function () {
        $('.js-product-slider-dots').slick({
            asNavFor: '.js-product-slider',
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: true,
            prevArrow: '.product-slider-dots__btn--prev',
            nextArrow: '.product-slider-dots__btn--next',
            focusOnChange: true,
            infinite: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: "unslick"
                }
            ]
        });
        $('.js-product-slider').slick({
            asNavFor: '.js-product-slider-dots',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            infinite: false
        });
    };

    let tabletSubnavMenu = function () {
        $(document).on('click', '.inform-nav__tablet-toggle', function () {
            $(this).toggleClass('inform-subnav--open');
        });
    };

    let select = function () {
        $(document).on('click','.select__header',function () {
            $(this).parent().toggleClass('select--open');
        });
        $(document).on('click','.select-list__item',function () {
            let current = $(this).closest('.select').find('.select__current')[0];
            $(this).closest('.select').removeClass('select--open');
            $(current).text($(this).text());
        });
    };

    let filterToggle = function () {
        $(document).on('click', '.filter-mobile__toggle', function () {
            $('.filter').addClass('filter--open');
        });
        $(document).on('click', '.filter-mobile__close', function () {
            $('.filter').removeClass('filter--open');
        });
    }

    let productsBorderLineSlider = function () {
        $('.js-products-border-line-slider').each(function (idx) {
            let productsBorderLineSliderId = "products-border-line-slider-" + idx;
            this.closest('.products-border-line-slider').id = productsBorderLineSliderId;
            $(this).slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: false,
                dots: true,
                appendDots: '#' + productsBorderLineSliderId + ' .products-border-line-slider__dots',
                prevArrow: '#' + productsBorderLineSliderId + ' .products-border-line-slider__btn--prev',
                nextArrow: '#' + productsBorderLineSliderId + ' .products-border-line-slider__btn--next',
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

    let colorClicked = function () {
        $(document).on('click','.color-list__item', function () {
            $(this).addClass('color-list__item--active').siblings().removeClass('color-list__item--active')
        });
    };

    let scrollToElement = function () {
        $('.scroll-link')
            .not('[href="#')
            .not('[href="#0')
            .click(function (event) {
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                    &&
                    location.hostname == this.hostname
                ) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
                    if (target.length) {
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top - 50
                        }, 1000, function () {
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) {
                                return false;
                            } else {
                                $target.attr('tabindex', '-1');
                                $target.focus();
                            };
                        });
                    }
                }
            });
        
    };

    let productDetalWidth = function () {
        let detalArr = $('.product-detals-navigation__item'),
            detalWidth = 0;
        for (let i = 0; i < detalArr.length; i++) {
            detalWidth = detalWidth + detalArr[i].offsetWidth;
        }
        $('.product-detals-navigation').css('min-width', detalWidth);
    };

    let productDetalTablet = function () {
        if (window.innerWidth < 1140) {
            $('.product-info__footer').appendTo('.product__header');
            $('.product-info__header').prependTo('.product__header');
        }
    };

    let popupLink = function () {
        $('.js-popup-link').magnificPopup({
            showCloseBtn: false
        });
        $(document).on('click', '.popup__close', function () {
            $.magnificPopup.close();
        })
    };

    let formValidate = function () {
        $('form').each(function () {
            $(this).on('submit', function () {
                $(this).validate({
                    rules: {
                        name: 'required',
                        phone: 'required',
                        email: 'required',
                        password: 'required'
                    },
                    messages: {
                        name: 'Введите корректное имя',
                        phone: 'Введите корректный номер',
                        email: 'Введите корректный email',
                        password: 'Введите корректный пароль'
                    },
                    errorPlacement: function (error, element) {
                        element.attr("placeholder", error[0].outerText);
                    }
                });
                if ($(this).valid()) {
                    let wrap = $(this)[0].closest('.hide-on-success');
                    if (wrap) {
                        $(wrap).siblings('.show-on-success').show();
                        $(wrap).hide();
                    }
                }
                return false;
            })
        });
    }

    catalogNavHover();
    openSearchForm();
    clearSearchForm();
    popupLink();
    formValidate();
    bannerSlider();
    tabs();
    productPrevSlider();
    productLineSlider();
    mobileMenu();
    categorySlider();
    tabletSubnavMenu();
    select();
    filterToggle();
    productSlider();
    productsBorderLineSlider();
    colorClicked();
    scrollToElement();
    productDetalTablet();
    productDetalWidth();
});

