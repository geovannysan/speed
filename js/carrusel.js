const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    
    slidesPerView: 3, 
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // When screen width is <= 768px, show only 1 slide
        800: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 1,
        },
        400:{
            slidesPerView:1,
        },
        300: {
            slidesPerView: 1,
        },
        200: {
            slidesPerView: 1,
        },
        // When screen width is <= 992px, show 2 slides
        992: {
            slidesPerView: 3,
        },
    },
});