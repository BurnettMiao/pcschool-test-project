var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // 640: {
    //   slidesPerView: 1,
    //   spaceBetween: 20,
    // },
    768: {
      slidesPerView: 1,
      spaceBetween: 580,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    1140: {
      slidesPerView: 3,
      spaceBetween: 10,
    },

    1400: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
