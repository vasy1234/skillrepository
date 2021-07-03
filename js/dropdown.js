  document.querySelector(".select-1")
  .addEventListener("click", function(){
    document.querySelector(".arrow-1").classList.toggle("is-active")
  })

  document.querySelector(".select-2")
  .addEventListener("click", function(){
    document.querySelector(".arrow-2").classList.toggle("is-active")
  })

  document.querySelector(".select-3")
  .addEventListener("click", function(){
    document.querySelector(".arrow-3").classList.toggle("is-active")
  })

  document.querySelector(".select-4")
  .addEventListener("click", function(){
    document.querySelector(".arrow-4").classList.toggle("is-active")
  })

  document.querySelector(".select-5")
  .addEventListener("click", function(){
    document.querySelector(".arrow-5").classList.toggle("is-active")
  })

  function myFunction() {
    document.getElementById("myDropdown-1").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
  function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
  function myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
  function myFunction5() {
    document.getElementById("myDropdown5").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
