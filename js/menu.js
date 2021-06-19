// $(document).ready(function () {
//   $('.header__burger').click(function () {
//     $('.header__burger, .nav__list').toggleClass('open-menu');
//     $('body').toggleClass('fixed-page');
//   });
// });
window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.header__burger').addEventListener('click', function () {
    document.querySelector('.nav__list-top').classList.toggle('open-menu')
    document.querySelector('.header__burger').classList.toggle('open-menu')
    document.querySelector('.header__btn').classList.toggle('open-menu')
    // document.querySelector('body').classList.toggle('fixed-page')
  })
})
