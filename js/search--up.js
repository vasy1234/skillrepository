window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.header-search__link').addEventListener('click', function () {
    document.querySelector('.header-search__input').classList.toggle('search--up')
    // document.querySelector('.header__burger').classList.toggle('open-menu')
    // document.querySelector('.header__btn').classList.toggle('open-menu')
    // document.querySelector('body').classList.toggle('fixed-page')
  })
})
