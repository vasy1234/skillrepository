window.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.catalog__link-right').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {

      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog__link-right').forEach(function (tab) {
        tab.classList.remove('catalog__link-right-active')
      })
      document.querySelectorAll('.catalog__left').forEach(function (tabContent) {
        tabContent.classList.remove('catalog__left-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__left-active')
      document.querySelector(`[data-path="${path}"]`).classList.add('catalog__link-right-active')
    })
  })
})
