function sliderPopular() {
    var swiper = new Swiper('.popular .swiper', {
        slidesPerView: '3',
        spaceBetween: 30,
        loop: false,
        pagination: {
            el: ".popular .swiper-pagination",
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1.1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            992: {
                slidesPerView: 2,
            },
            1370: {
                slidesPerView: '3',
            },
        }
    })
}

function sliderAdvantages() {
    var swiper = new Swiper('.advantages .swiper', {
        slidesPerView: '1',
        spaceBetween: 30,
        loop: false,
        navigation: {
            nextEl: '.advantages .swiper-button-next',
            prevEl: '.advantages .swiper-button-prev',
        },
        pagination: {
            el: ".advantages .swiper-pagination",
            type: 'bullets',
            dynamicBullets: true,
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1.1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            992: {
                slidesPerView: '1',
                spaceBetween: 30,
            },
        },
        on: {
            slideChange: function () {
                $(".advantages__item").removeClass("advantages__item--active")
                $(`.advantages__item[data-slide="${this.activeIndex}"]`).addClass("advantages__item--active")
            },
        },
    })

    $(".advantages__item").mouseover(function () {
        let slide = +$(this).attr("data-slide")

        swiper.slideTo(slide)
    })
}

$(document).ready(function() {
    sliderPopular();
    sliderAdvantages();

    // Menu
    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $(".header__right").toggleClass("header__right--active")
        $("body").addClass("fixed-body")
    })

    $(".header__close-btn").click(function() {
        $(this).removeClass("header__close-btn--active")
        $(".header__right").removeClass("header__right--active")
        $("body").removeClass("fixed-body")
    })

    //input
    $('input[type="tel"]').mask('+7 999 999-9999', { autoclear: false }, { placeholder: '+7             ' });

    // Accordion
    $(".answers__item-show").click((function() {
            $(this).toggleClass("answers__item-show--active")
            $(this).siblings(".answers__item-hidden").slideToggle()}
    ));
})