window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll(".dropbtn").forEach(item => {
    item.addEventListener("click", function () {
      let btnThis = this;
      btnThis.classList.toggle("active-btn");
      let el = this.parentElement.querySelector(".dropdown-content");
      console.log(el)
      el.classList.toggle("show-active");
      document.querySelectorAll(".dropbtn").forEach(allBtn => {
        if (btnThis != allBtn) {
          allBtn.classList.remove("active-btn")
        }
        if (el != allBtn.parentElement.querySelector(".dropdown-content")) {
          allBtn.classList.remove("show-active");
        }
      })

    })
  })
})

