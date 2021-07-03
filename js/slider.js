const swiper = new Swiper('.new__swaper', {
  loop: true,
  spaceBetween: 200,
  slidesPerView: 0.9,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});
