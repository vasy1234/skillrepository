window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.header__search').addEventListener('click', function () {
    document.querySelector('.header-search__input').classList.toggle('active-form')
    document.querySelector('.header__container').classList.toggle('header-none')
    document.querySelector('.header__logo').classList.toggle('header__logo-none')
    document.querySelector('.header__search').classList.toggle('header__search-active')
  })
})
