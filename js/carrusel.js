const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3, 
    spaceBetween: 0, // Ajusta este valor para reducir el espacio entre diapositivas

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        800: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 1,
        },
        400: {
            slidesPerView: 1,
        },
        300: {
            slidesPerView: 1,
        },
        200: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 3,
        },
    },
});
$(document).ready(function () {
    $('.slick-carousel').slick({
        slidesToShow: 3, // Cambia a 3 para mostrar más elementos
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        // Activa el modo centrado
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                }
            }
        ],
        nextArrow: '<div class="swiper-button-next" tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-b47a45d67edc65b8"></div>',
        prevArrow: '<div class="swiper-button-prev" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-b47a45d67edc65b8"></div>'
    });
});
