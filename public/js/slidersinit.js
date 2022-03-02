"use strict";

$(function () {
    var homeSlider = new Swiper(".home-slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        speed: 1500,
        parallax: true,
        autoplay: {
            delay: 5000,
        },
        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: "#homeNext",
            prevEl: "#homePrev",
        },
    });

    var homeSliderDesign = new Swiper(".home-slider-design", {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        speed: 1500,
        parallax: true,
        autoplay: {
            delay: 5000,
        },
        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: "#homeNext",
            prevEl: "#homePrev",
        },
    });

    var detailSlider = new Swiper(".detail-slider", {
        mode: "horizontal",
        loop: true,
        on: {
            slideChangeTransitionStart: highlightThumb,
        },
    });

    var brandsSlider = new Swiper(".brands-slider", {
        slidesPerView: 6,
        spaceBetween: 15,
        loop: true,
        roundLengths: true,
        breakpoints: {
            1200: {
                slidesPerView: 5,
            },
            991: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
    });

    // =====================================================
    //      Similar Items slider
    // =====================================================

    var similarSlider = new Swiper(".similar-slider", {
        slidesPerView: 2,
        spaceBetween: 15,
        loop: true,
        loopedSlides: 50,
        roundLengths: true,
        slidesPerGroup: 2,
        breakpoints: {
            1200: {
                slidesPerView: 4,
            },
            991: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: "#similarNext",
            prevEl: "#similarPrev",
        },
    });

    $("#quickView").on("shown.bs.modal", function (e) {
        quickViewSlider = new Swiper("#quickViewSlider", {
            mode: "horizontal",
            loop: true,
            on: {
                slideChangeTransitionStart: highlightThumb,
            },
        });
    });

    $("#quickView").on("hidden.bs.modal", function (e) {
        if (quickViewSlider) {
            quickViewSlider.destroy();
        }
    });

    function highlightThumb() {
        var sliderId = this.$el.attr("id");
        var thumbs = $('.swiper-thumbs[data-swiper="#' + sliderId + '"]');
        // if thumbs for this slider exist
        if (thumbs.length > 0) {
            thumbs.find(".swiper-thumb-item.active").removeClass("active");
            thumbs
                .find(".swiper-thumb-item")
                .eq(this.realIndex)
                .addClass("active");
        }
    }

    $(".swiper-thumb-item").on("click", function (e) {
        e.preventDefault();
        var swiperId = $(this).parents(".swiper-thumbs").data("swiper");
        $(swiperId)[0].swiper.slideToLoop($(this).index());
    });
});
