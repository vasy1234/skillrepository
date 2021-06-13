const swiper = new Swiper('.swiper-container', {
  speed: 1000,
  loop: true,
  setInitialSlide: 0,
  spaceBetween: 30,
});
var mySwiper = document.querySelector('.swiper-container').swiper

mySwiper.slideNext();

var mySwiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 11000,
  },
});
