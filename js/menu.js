window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.header__burger').addEventListener('click', function () {
    document.querySelector('.nav__list-top').classList.toggle('open-menu')
    document.querySelector('.header__burger').classList.toggle('open-menu')
    document.querySelector('.header__btn').classList.toggle('open-menu')
  })
})
