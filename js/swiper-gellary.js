const swiper = new Swiper(".gswiper", {
  // slidesPerView: 3,
  // slidesPerColumn: 2,
  // spaceBetween: 50,
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      spaceBetween: 34
    },
    640: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 2.06,
      slidesPerColumn: 2,
      spaceBetween: 30
    },
    994: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34
    },
    1024: {
      slidesPerView: 2.1,
      slidesPerColumn: 2,
      spaceBetween: 34
    },
    1120: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34
    },
    1330: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34
    },
    1440: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34
    },
    1620: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 40
    },
    1920: {
      slidesPerView: 3.1,
      slidesPerColumn: 2,
      spaceBetween: 48
    }
  }
});
