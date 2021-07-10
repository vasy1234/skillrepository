window.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.catalog__link-tab').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {

      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog__link-tab').forEach(function (tab) {
        tab.classList.remove('catalog__icon-active')
      })
      // document.querySelectorAll('.catalog__left').forEach(function (tabContent) {
      //   tabContent.classList.remove('tab-content-active')
      // })
      // document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
      document.querySelector(`[data-path="${path}"]`).classList.add('catalog__icon-active')
    })
  })
})
