var swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 480,
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
  // breakpoints: {
  //   640: {
  //     slidesPerView: 1,
  //     spaceBetween: 20,
  //   },
  //   768: {
  //     slidesPerView: 3,
  //     spaceBetween: 580,
  //   },
  //   1024: {
  //     slidesPerView: 3,
  //     spaceBetween: 580,
  //   },
  // },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
